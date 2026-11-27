// Live price list: products and prices are read from a Google Sheet,
// so they can be changed from a phone without touching this code.
// Sheet columns: id, name, urdu, unit, price, category, emoji, available
// If the sheet cannot be loaded, the built-in list in app.js is used instead.
const SHEET_ID = "1EaJ2UZhQC39N5woCEmDrZUJY0MGyYywn2on6lQljV8U";

function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c !== '"') cell += c;
      else if (text[i + 1] === '"') { cell += '"'; i++; }
      else quoted = false;
    }
    else if (c === '"') quoted = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (c !== "\r") cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

(async () => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&headers=1`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const rows = parseCsv(await res.text());
    const head = rows.shift().map((h) => h.trim().toLowerCase());
    if (!head.includes("id") || !head.includes("name") || !head.includes("price")) throw new Error("missing columns");

    const list = [];
    for (const r of rows) {
      // Read one cell by column name, with characters that could break the page removed.
      const get = (name) => (r[head.indexOf(name)] || "").replace(/[<>"'\\]/g, "").trim();
      const id = get("id").toLowerCase().replace(/[^a-z0-9_-]/g, "");
      const price = Number(get("price").replace(/[^0-9.]/g, ""));
      if (!id || !get("name") || !(price > 0)) continue;
      if (/^(no|n|0|false)$/i.test(get("available"))) continue;
      list.push({
        id,
        name: get("name"),
        urdu: get("urdu"),
        unit: get("unit"),
        price,
        cat: get("category") || "Other",
        art: productArt(id, get("emoji") || "🛒"),
      });
    }
    if (!list.length) throw new Error("no products in sheet");

    // Swap the built-in list for the sheet's list and redraw.
    PRODUCTS.splice(0, PRODUCTS.length, ...list);
    for (const k of Object.keys(byId)) delete byId[k];
    for (const p of list) byId[p.id] = p;
    for (const id of Object.keys(cart)) if (!byId[id]) delete cart[id];
    saveCart();
    if (!list.some((p) => p.cat === activeCat)) activeCat = "All";
    renderCategories();
    renderGrid();
    renderCart();
  } catch (e) {
    console.warn("Price sheet not loaded, showing built-in prices.", e);
  }
})();

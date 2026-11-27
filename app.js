// ---------------------------------------------------------------
// STORE SETTINGS - edit these to make the shop yours.
// ---------------------------------------------------------------
const STORE = {
  name: "Taza Tokri",
  // Your WhatsApp business number: country code + number, no "+" or spaces.
  // 923000000000 is a placeholder - orders will not reach anyone until you change it.
  whatsapp: "923000000000",
  deliveryFee: 150,          // Rs
  freeDeliveryOver: 3000,    // Rs - orders at or above this ship free
  areas: ["DHA", "Gulberg", "Johar Town", "Model Town", "Bahria Town", "Other (confirm on WhatsApp)"],
};

// ---------------------------------------------------------------
// PRODUCTS - sample items and sample prices. Replace with your own.
// ---------------------------------------------------------------
const PRODUCTS = [
  { id: "tomato",   name: "Tomatoes",        urdu: "Tamatar",      unit: "1 kg",    price: 150,  cat: "Vegetables", art: "🍅" },
  { id: "onion",    name: "Onions",          urdu: "Pyaz",         unit: "1 kg",    price: 120,  cat: "Vegetables", art: "🧅" },
  { id: "potato",   name: "Potatoes",        urdu: "Aloo",         unit: "1 kg",    price: 90,   cat: "Vegetables", art: "🥔" },
  { id: "garlic",   name: "Garlic",          urdu: "Lehsan",       unit: "250 g",   price: 130,  cat: "Vegetables", art: "🧄" },
  { id: "ginger",   name: "Ginger",          urdu: "Adrak",        unit: "250 g",   price: 150,  cat: "Vegetables", art: "🫚" },
  { id: "chilli",   name: "Green chillies",  urdu: "Hari mirch",   unit: "250 g",   price: 60,   cat: "Vegetables", art: "🌶️" },
  { id: "carrot",   name: "Carrots",         urdu: "Gajar",        unit: "1 kg",    price: 110,  cat: "Vegetables", art: "🥕" },
  { id: "cucumber", name: "Cucumbers",       urdu: "Kheera",       unit: "1 kg",    price: 100,  cat: "Vegetables", art: "🥒" },

  { id: "banana",   name: "Bananas",         urdu: "Kela",         unit: "1 dozen", price: 180,  cat: "Fruit",      art: "🍌" },
  { id: "apple",    name: "Apples",          urdu: "Saib",         unit: "1 kg",    price: 300,  cat: "Fruit",      art: "🍎" },
  { id: "kinnow",   name: "Kinnow",          urdu: "Kinnu",        unit: "1 dozen", price: 200,  cat: "Fruit",      art: "🍊" },
  { id: "lemon",    name: "Lemons",          urdu: "Nimbu",        unit: "250 g",   price: 80,   cat: "Fruit",      art: "🍋" },
  { id: "grapes",   name: "Grapes",          urdu: "Angoor",       unit: "500 g",   price: 250,  cat: "Fruit",      art: "🍇" },

  { id: "milk",     name: "Fresh milk",      urdu: "Doodh",        unit: "1 litre", price: 220,  cat: "Dairy & Eggs", art: "🥛" },
  { id: "yogurt",   name: "Yogurt",          urdu: "Dahi",         unit: "1 kg",    price: 260,  cat: "Dairy & Eggs", art: "🥣" },
  { id: "eggs",     name: "Eggs",            urdu: "Anday",        unit: "1 dozen", price: 330,  cat: "Dairy & Eggs", art: "🥚" },
  { id: "butter",   name: "Butter",          urdu: "Makhan",       unit: "200 g",   price: 400,  cat: "Dairy & Eggs", art: "🧈" },
  { id: "cheese",   name: "Cheddar cheese",  urdu: "Paneer",       unit: "200 g",   price: 520,  cat: "Dairy & Eggs", art: "🧀" },

  { id: "chicken",  name: "Chicken",         urdu: "Murghi",       unit: "1 kg",    price: 650,  cat: "Meat",       art: "🍗" },
  { id: "mutton",   name: "Mutton",          urdu: "Bakray ka gosht", unit: "1 kg", price: 2400, cat: "Meat",       art: "🥩" },
  { id: "fish",     name: "Rohu fish",       urdu: "Machli",       unit: "1 kg",    price: 800,  cat: "Meat",       art: "🐟" },

  { id: "atta",     name: "Wheat flour",     urdu: "Atta",         unit: "10 kg",   price: 1400, cat: "Staples",    art: "🌾" },
  { id: "rice",     name: "Basmati rice",    urdu: "Chawal",       unit: "5 kg",    price: 1900, cat: "Staples",    art: "🍚" },
  { id: "sugar",    name: "Sugar",           urdu: "Cheeni",       unit: "1 kg",    price: 160,  cat: "Staples",    art: "🧂" },
  { id: "oil",      name: "Cooking oil",     urdu: "Tel",          unit: "1 litre", price: 560,  cat: "Staples",    art: "🫗" },
  { id: "ghee",     name: "Banaspati ghee",  urdu: "Ghee",         unit: "1 kg",    price: 570,  cat: "Staples",    art: "🫙" },
  { id: "chana",    name: "Daal chana",      urdu: "Chanay ki daal", unit: "1 kg",  price: 380,  cat: "Staples",    art: "🫘" },
  { id: "masoor",   name: "Daal masoor",     urdu: "Masoor ki daal", unit: "1 kg",  price: 340,  cat: "Staples",    art: "🫘" },
  { id: "bread",    name: "Bread",           urdu: "Double roti",  unit: "Large",   price: 150,  cat: "Staples",    art: "🍞" },

  { id: "tea",      name: "Black tea",       urdu: "Chai ki patti", unit: "430 g",  price: 1100, cat: "Tea & Spices", art: "🍵" },
  { id: "salt",     name: "Iodised salt",    urdu: "Namak",        unit: "800 g",   price: 60,   cat: "Tea & Spices", art: "🧂" },
  { id: "mirch",    name: "Red chilli powder", urdu: "Lal mirch",  unit: "200 g",   price: 220,  cat: "Tea & Spices", art: "🌶️" },
  { id: "haldi",    name: "Turmeric powder", urdu: "Haldi",        unit: "200 g",   price: 180,  cat: "Tea & Spices", art: "🟡" },

  { id: "soap",     name: "Bath soap",       urdu: "Sabun",        unit: "Pack of 3", price: 330, cat: "Household", art: "🧼" },
  { id: "surf",     name: "Washing powder",  urdu: "Surf",         unit: "1 kg",    price: 450,  cat: "Household",  art: "🧺" },
  { id: "dish",     name: "Dishwash liquid", urdu: "Bartan dhonay ka liquid", unit: "500 ml", price: 280, cat: "Household", art: "🧴" },
  { id: "tissue",   name: "Tissue box",      urdu: "Tissue",       unit: "1 box",   price: 180,  cat: "Household",  art: "🧻" },
];

// ---------------------------------------------------------------
// App
// ---------------------------------------------------------------
const $ = (id) => document.getElementById(id);
const rs = (n) => "Rs " + n.toLocaleString("en-PK");
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

let cart = loadCart();
let activeCat = "All";
let query = "";

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("cart") || "{}");
    // Drop anything that is no longer in the catalogue.
    return Object.fromEntries(Object.entries(saved).filter(([id, q]) => byId[id] && q > 0));
  } catch {
    return {};
  }
}
function saveCart() {
  try { localStorage.setItem("cart", JSON.stringify(cart)); } catch { /* private mode */ }
}

function setQty(id, qty) {
  if (qty <= 0) delete cart[id]; else cart[id] = Math.min(qty, 99);
  saveCart();
  renderGrid();
  renderCart();
}

function qtyControl(id) {
  const q = cart[id] || 0;
  if (!q) return `<button class="add" data-add="${id}">Add</button>`;
  return `<span class="qty">
    <button data-dec="${id}" aria-label="Remove one">−</button>
    <span>${q}</span>
    <button data-inc="${id}" aria-label="Add one">+</button>
  </span>`;
}

function renderCategories() {
  const cats = ["All", ...new Set(PRODUCTS.map((p) => p.cat))];
  $("categories").innerHTML = cats
    .map((c) => `<button class="chip" role="tab" aria-selected="${c === activeCat}" data-cat="${c}">${c}</button>`)
    .join("");
}

function renderGrid() {
  const q = query.trim().toLowerCase();
  const list = PRODUCTS.filter((p) =>
    (q || activeCat === "All" || p.cat === activeCat) &&
    (!q || (p.name + " " + p.urdu + " " + p.cat).toLowerCase().includes(q))
  );
  $("grid").innerHTML = list.map((p) => `
    <article class="card">
      <div class="card-art" aria-hidden="true">${p.art}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-urdu">${p.urdu}</div>
      <div class="card-unit">${p.unit}</div>
      <div class="card-row">
        <span class="price">${rs(p.price)}</span>
        ${qtyControl(p.id)}
      </div>
    </article>`).join("");
  $("empty").hidden = list.length > 0;
}

function totals() {
  const lines = Object.entries(cart).map(([id, qty]) => ({ ...byId[id], qty }));
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.price, 0);
  const delivery = subtotal === 0 || subtotal >= STORE.freeDeliveryOver ? 0 : STORE.deliveryFee;
  return { lines, count, subtotal, delivery, total: subtotal + delivery };
}

function renderCart() {
  const t = totals();
  $("cartCount").textContent = t.count;
  $("cartFooter").hidden = t.count === 0;

  if (t.count === 0) {
    $("cartItems").innerHTML = `<p class="cart-empty">Your basket is empty.<br>Add something fresh!</p>`;
    return;
  }
  $("cartItems").innerHTML = t.lines.map((l) => `
    <div class="line">
      <div class="line-art" aria-hidden="true">${l.art}</div>
      <div>
        <div class="line-name">${l.name}</div>
        <div class="line-sub">${l.unit} · ${rs(l.price)}</div>
      </div>
      <div class="line-right">
        <b>${rs(l.price * l.qty)}</b>
        ${qtyControl(l.id)}
      </div>
    </div>`).join("");

  $("subtotal").textContent = rs(t.subtotal);
  $("delivery").textContent = t.delivery ? rs(t.delivery) : "Free";
  $("total").textContent = rs(t.total);
  $("freeHint").textContent = t.delivery
    ? `Add ${rs(STORE.freeDeliveryOver - t.subtotal)} more for free delivery.`
    : "You've got free delivery 🎉";
}

function openCart(open) {
  $("drawer").classList.toggle("open", open);
  $("drawer").setAttribute("aria-hidden", String(!open));
  $("overlay").hidden = !open;
  document.body.style.overflow = open ? "hidden" : "";
}

function buildOrderMessage(form) {
  const t = totals();
  const f = Object.fromEntries(new FormData(form));
  const items = t.lines.map((l) => `• ${l.qty} x ${l.name} (${l.unit}) — ${rs(l.price * l.qty)}`);
  return [
    `*New order — ${STORE.name}*`,
    "",
    ...items,
    "",
    `Subtotal: ${rs(t.subtotal)}`,
    `Delivery: ${t.delivery ? rs(t.delivery) : "Free"}`,
    `*Total: ${rs(t.total)}* (cash on delivery)`,
    "",
    `Name: ${f.name.trim()}`,
    `Phone: ${f.phone.trim()}`,
    `Area: ${f.area}`,
    `Address: ${f.address.trim()}`,
    f.notes.trim() ? `Notes: ${f.notes.trim()}` : null,
  ].filter((line) => line !== null).join("\n");
}

// Clicks on Add / + / - anywhere on the page.
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  const { add, inc, dec, cat } = b.dataset;
  if (add) setQty(add, 1);
  else if (inc) setQty(inc, (cart[inc] || 0) + 1);
  else if (dec) setQty(dec, (cart[dec] || 0) - 1);
  else if (cat) { activeCat = cat; renderCategories(); renderGrid(); }
});

$("search").addEventListener("input", (e) => { query = e.target.value; renderGrid(); });
$("cartBtn").addEventListener("click", () => openCart(true));
$("closeCart").addEventListener("click", () => openCart(false));
$("overlay").addEventListener("click", () => openCart(false));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });

$("checkout").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const ok = ["name", "phone", "area", "address"].every((k) => form.elements[k].value.trim());
  $("formError").hidden = ok;
  if (!ok || totals().count === 0) return;
  const url = `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(buildOrderMessage(form))}`;
  window.open(url, "_blank", "noopener");
});

// Fill in store settings on the page.
$("brandName").textContent = STORE.name;
$("perkFree").textContent = `On orders over ${rs(STORE.freeDeliveryOver)}`;
$("areasText").textContent = STORE.areas.filter((a) => !a.startsWith("Other")).join(" · ");
$("areaSelect").innerHTML = `<option value="">Select your area</option>` +
  STORE.areas.map((a) => `<option>${a}</option>`).join("");
$("waLink").href = `https://wa.me/${STORE.whatsapp}`;

renderCategories();
renderGrid();
renderCart();

// Product photos from Unsplash (free to use, unsplash.com/license).
// Each entry is: product id -> Unsplash photo id.
// Remove a line to go back to the emoji for that product.
const PHOTOS = {
  tomato: "1582284540020-8acbe03f4924",
  onion: "1618512496248-a07fe83aa8cb",
  potato: "1518977676601-b53f82aba655",
  garlic: "1540148426945-6cf22a6b2383",
  ginger: "1758055660285-d32b7b3b1e77",
  chilli: "1599987141071-f5810d32e21a",
  carrot: "1598170845058-32b9d6a5da37",
  cucumber: "1449300079323-02e209d9d3a6",
  banana: "1603833665858-e61d17a86224",
  apple: "1560806887-1e4cd0b6cbd6",
  kinnow: "1620217491382-4772d58bc863",
  lemon: "1590502593747-42a996133562",
  grapes: "1631299106224-aae61c217164",
  milk: "1517448931760-9bf4414148c5",
  yogurt: "1627308594190-a057cd4bfac8",
  eggs: "1639194335563-d56b83f0060c",
  butter: "1587185717368-4d92f8de4ad2",
  cheese: "1683314573422-649a3c6ad784",
  chicken: "1587593810167-a84920ea0781",
  mutton: "1602470520998-f4a52199a3d6",
  fish: "1766059965546-c335e31ac4be",
  atta: "1627735483792-233bf632619b",
  rice: "1586201375761-83865001e31c",
  sugar: "1673791031202-ebc0eea03bf2",
  oil: "1474979266404-7eaacbcd87c5",
  ghee: "1760539013975-c391fb318234",
  chana: "1780478238047-13e4e6c07cba",
  masoor: "1614373532201-c40b993f0013",
  bread: "1598373182133-52452f7691ef",
  tea: "1433891248364-3ce993ff0e92",
  salt: "1634612831148-03a8550e1d52",
  mirch: "1702041295471-01b73fd39907",
  haldi: "1702041295331-840d4d9aa7c9",
  soap: "1585145868057-135bf14b0503",
  surf: "1582735689369-4fe89db7114c",
  dish: "1590610994353-7b0e7546e681",
  tissue: "1609840112990-4265448268d1",
};

// Picture for a product: its photo if it has one, otherwise its emoji.
// If a photo fails to load, the emoji comes back.
function productArt(id, emoji) {
  const photo = PHOTOS[id];
  if (!photo) return emoji;
  const url = `https://images.unsplash.com/photo-${photo}?w=400&h=300&fit=crop&q=70&auto=format`;
  return `<img src="${url}" alt="" loading="lazy" onerror="this.replaceWith('${emoji}')">`;
}

for (const p of PRODUCTS) p.art = productArt(p.id, p.art);
renderGrid();
renderCart();

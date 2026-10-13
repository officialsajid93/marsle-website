/* Marsle Electronics — site script
   ===== EDIT YOUR BUSINESS DETAILS HERE ===== */
const SHOP = {
  whatsapp: "919134901414",            // main WhatsApp number used for orders (91 + 10 digits)
  phone: "+91 9134901414\n+91 9734595587",   // each number on its own line
  email: "info@marsle.com",
  address: "Murshidabad, West Bengal - 742202",
  hours: "10:00 AM – 7:00 PM"
};
/* ========================================== */

const ICONS = {
  switch:'<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="22" y="10" width="52" height="76" rx="6"/><rect x="34" y="26" width="28" height="44" rx="4" fill="currentColor" fill-opacity=".08"/><circle cx="48" cy="20" r="2.5" class="acc" stroke="none"/></svg>',
  socket:'<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="16" width="76" height="64" rx="6"/><circle cx="48" cy="48" r="20" fill="currentColor" fill-opacity=".06"/><rect x="45" y="32" width="6" height="11" rx="1.5" fill="currentColor"/><rect x="37" y="50" width="5" height="9" rx="1.5" fill="currentColor"/><rect x="54" y="50" width="5" height="9" rx="1.5" fill="currentColor"/><circle cx="76" cy="24" r="2.5" class="acc" stroke="none"/></svg>',
  regulator:'<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="10" y="16" width="76" height="64" rx="6"/><circle cx="48" cy="48" r="18" fill="currentColor" fill-opacity=".06"/><line x1="48" y1="48" x2="58" y2="36" stroke-width="3.5" stroke-linecap="round"/><g fill="currentColor" stroke="none"><circle cx="30" cy="62" r="2"/><circle cx="28" cy="46" r="2"/><circle cx="36" cy="32" r="2"/><circle cx="52" cy="27" r="2"/></g><circle cx="66" cy="36" r="2.5" class="acc" stroke="none"/></svg>',
  other:'<svg viewBox="0 0 96 96" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M34 14h28v20H34z" fill="currentColor" fill-opacity=".08"/><path d="M30 34h36l-4 14H34z"/><path d="M38 48c-8 6-10 14-10 20a20 20 0 0 0 40 0c0-6-2-14-10-20"/><circle cx="48" cy="24" r="2.5" class="acc" stroke="none"/></svg>'
};

/* Product list — edit names, specs and prices (₹ per piece) here */
const PRODUCTS = [
  {id:1,cat:"switch",name:"6A One-Way Switch",spec:"6A · 240V · 1M modular",desc:"Everyday switch for lights and fans with a smooth, firm click.",price:28,tag:"Best seller"},
  {id:2,cat:"switch",name:"16A Power Switch",spec:"16A · 240V · 1M modular",desc:"For heavy loads like AC, geyser and room heater.",price:62},
  {id:3,cat:"switch",name:"6A Two-Way Switch",spec:"6A · 240V · 1M modular",desc:"Control one light from two places, ideal for stairs and bedrooms.",price:44},
  {id:4,cat:"switch",name:"Bell Push Switch",spec:"6A · 240V · 1M modular",desc:"Spring-return push button for door bells.",price:38},
  {id:5,cat:"socket",name:"6A 3-Pin Socket",spec:"6A · 240V · 2M modular",desc:"For chargers, TVs and light appliances.",price:55,tag:"ISI"},
  {id:6,cat:"socket",name:"16A 3-Pin Socket",spec:"16A · 240V · 2M modular",desc:"For fridge, washing machine and AC points.",price:98},
  {id:7,cat:"socket",name:"6/16A Combi Socket",spec:"6A + 16A · 240V · 2M",desc:"Takes both small and large plugs in one socket.",price:115},
  {id:8,cat:"socket",name:"USB Charger Socket",spec:"5V 2.1A dual USB · 2M",desc:"Charge phones directly without an adapter.",price:340,tag:"New"},
  {id:12,cat:"other",name:"Pendant Lamp Holder",spec:"B22 · 6A · Bakelite",desc:"Hanging holder for bulbs.",price:22},
  {id:13,cat:"other",name:"Batten Holder",spec:"B22 · 6A · Angle type",desc:"Mounts directly on wall or ceiling.",price:30},
  {id:14,cat:"other",name:"8-Module Cover Plate",spec:"8M · White · with frame",desc:"Modular plate and frame for switchboards.",price:85},
  /* Fan regulators — from July 2026 price list, rate +60% rounded */
  {"id":101,"cat":"regulator","grp":"7step","img":"reg-7anp.webp","name":"7 Step Fan Regulator – Pointer Knob","spec":"Model 7ANP · Plate type · ABS · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":23},
  {"id":102,"cat":"regulator","grp":"7step","img":"reg-7afp.webp","name":"7 Step Fan Regulator – Ring Knob","spec":"Model 7AFP · Plate type · ABS · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":23},
  {"id":103,"cat":"regulator","grp":"7step","img":"reg-7p.webp","name":"7 Step Fan Regulator – Dial Cap","spec":"Model 7P · Plate type · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":25},
  {"id":104,"cat":"regulator","grp":"7step","img":"reg-7np.webp","name":"7 Step Fan Regulator – Pointer Knob","spec":"Model 7NP · Plate type · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":26},
  {"id":105,"cat":"regulator","grp":"7step","img":"reg-7fp.webp","name":"7 Step Fan Regulator – Ring Knob","spec":"Model 7FP · Plate type · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":27},
  {"id":106,"cat":"regulator","grp":"7step","img":"reg-7sp.webp","name":"7 Step Fan Regulator – Trio Knob","spec":"Model 7SP · Plate type · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":27},
  {"id":107,"cat":"regulator","grp":"7step","img":"reg-7cp.webp","name":"7 Step Fan Regulator – Chrome Ring","spec":"Model 7CP · Plate type · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":29},
  {"id":108,"cat":"regulator","grp":"7step","img":"reg-7np-b.webp","name":"7 Step Fan Regulator – Pointer Knob, Black","spec":"Model 7NP-B · Plate type · PC · Pack of 20","desc":"Pointer knob in a glossy black finish for dark switchboards.","price":27},
  {"id":109,"cat":"regulator","grp":"4step","img":"reg-4p.webp","name":"4 Step Fan Regulator – Dial Cap","spec":"Model 4P · Plate type · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":44},
  {"id":110,"cat":"regulator","grp":"4step","img":"reg-4np.webp","name":"4 Step Fan Regulator – Pointer Knob","spec":"Model 4NP · Plate type · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":45},
  {"id":111,"cat":"regulator","grp":"4step","img":"reg-4fp.webp","name":"4 Step Fan Regulator – Ring Knob","spec":"Model 4FP · Plate type · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":46},
  {"id":112,"cat":"regulator","grp":"4step","img":"reg-4sp.webp","name":"4 Step Fan Regulator – Trio Knob","spec":"Model 4SP · Plate type · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":46},
  {"id":113,"cat":"regulator","grp":"4step","img":"reg-4cp.webp","name":"4 Step Fan Regulator – Chrome Ring","spec":"Model 4CP · Plate type · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":48},
  {"id":114,"cat":"regulator","grp":"5step","img":"reg-5p.webp","name":"5 Step Fan Regulator – Dial Cap","spec":"Model 5P · Plate type · PC · Pack of 10","desc":"Clean flat cap with printed speed numbers.","price":66},
  {"id":115,"cat":"regulator","grp":"5step","img":"reg-5np.webp","name":"5 Step Fan Regulator – Pointer Knob","spec":"Model 5NP · Plate type · PC · Pack of 10","desc":"Easy-grip knob with a red pointer showing the speed.","price":65},
  {"id":116,"cat":"regulator","grp":"5step","img":"reg-5cp.webp","name":"5 Step Fan Regulator – Chrome Ring","spec":"Model 5CP · Plate type · PC · Pack of 10","desc":"Double chrome ring design with a sleek finish.","price":68},
  {"id":117,"cat":"regulator","grp":"dimmer","img":"reg-vp.webp","name":"Fan Dimmer Regulator – Dial Cap","spec":"Model VP · Plate type · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":36},
  {"id":118,"cat":"regulator","grp":"dimmer","img":"reg-vnp.webp","name":"Fan Dimmer Regulator – Pointer Knob","spec":"Model VNP · Plate type · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":37},
  {"id":119,"cat":"regulator","grp":"dimmer","img":"reg-vfp.webp","name":"Fan Dimmer Regulator – Ring Knob","spec":"Model VFP · Plate type · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":38},
  {"id":120,"cat":"regulator","grp":"dimmer","img":"reg-vsp.webp","name":"Fan Dimmer Regulator – Trio Knob","spec":"Model VSP · Plate type · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":38},
  {"id":121,"cat":"regulator","grp":"dimmer","img":"reg-vcp.webp","name":"Fan Dimmer Regulator – Chrome Ring","spec":"Model VCP · Plate type · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":41},
  {"id":122,"cat":"regulator","grp":"dimmer","img":"reg-vnp-b.webp","name":"Fan Dimmer Regulator – Pointer Knob, Black","spec":"Model VNP-B · Plate type · PC · Pack of 20","desc":"Pointer knob in a glossy black finish for dark switchboards.","price":38},
  {"id":123,"cat":"regulator","grp":"7step","img":"reg-7m.webp","name":"7 Step Fan Regulator – Dial Cap","spec":"Model 7M · Modular · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":26},
  {"id":124,"cat":"regulator","grp":"7step","img":"reg-7nm.webp","name":"7 Step Fan Regulator – Pointer Knob","spec":"Model 7NM · Modular · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":26},
  {"id":125,"cat":"regulator","grp":"7step","img":"reg-7fm.webp","name":"7 Step Fan Regulator – Ring Knob","spec":"Model 7FM · Modular · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":28},
  {"id":126,"cat":"regulator","grp":"7step","img":"reg-7sm.webp","name":"7 Step Fan Regulator – Trio Knob","spec":"Model 7SM · Modular · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":28},
  {"id":127,"cat":"regulator","grp":"7step","img":"reg-7cm.webp","name":"7 Step Fan Regulator – Chrome Ring","spec":"Model 7CM · Modular · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":29},
  {"id":128,"cat":"regulator","grp":"4step","img":"reg-4m.webp","name":"4 Step Fan Regulator – Dial Cap","spec":"Model 4M · Modular · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":44},
  {"id":129,"cat":"regulator","grp":"4step","img":"reg-4nm.webp","name":"4 Step Fan Regulator – Pointer Knob","spec":"Model 4NM · Modular · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":44,"featured":true},
  {"id":130,"cat":"regulator","grp":"4step","img":"reg-4fm.webp","name":"4 Step Fan Regulator – Ring Knob","spec":"Model 4FM · Modular · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":45},
  {"id":131,"cat":"regulator","grp":"4step","img":"reg-4sm.webp","name":"4 Step Fan Regulator – Trio Knob","spec":"Model 4SM · Modular · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":45},
  {"id":132,"cat":"regulator","grp":"4step","img":"reg-4cm.webp","name":"4 Step Fan Regulator – Chrome Ring","spec":"Model 4CM · Modular · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":47},
  {"id":133,"cat":"regulator","grp":"4step","img":"reg-4am.webp","name":"4 Step Fan Regulator – Grip Knob","spec":"Model 4AM · Modular · PC · Pack of 20","desc":"Long red grip knob over a printed speed scale.","price":45},
  {"id":134,"cat":"regulator","grp":"4step","img":"reg-4bm.webp","name":"4 Step Fan Regulator – Round Cap","spec":"Model 4BM · Modular · PC · Pack of 20","desc":"Minimal round cap with a fan symbol.","price":46},
  {"id":135,"cat":"regulator","grp":"4step","img":"reg-4dm.webp","name":"4 Step Fan Regulator – Diamond Cap","spec":"Model 4DM · Modular · PC · Pack of 20","desc":"Diamond-shaped cap with a modern look.","price":46},
  {"id":136,"cat":"regulator","grp":"4step","img":"reg-4dlm.webp","name":"4 Step Fan Regulator – Deluxe Dial","spec":"Model 4DLM · Modular · PC · Pack of 20","desc":"Chrome ring dial with a fine speed scale.","price":48},
  {"id":137,"cat":"regulator","grp":"4step","img":"reg-4alm.webp","name":"4 Step Fan Regulator – Line Dial","spec":"Model 4ALM · Modular · PC · Pack of 20","desc":"Slim line pointer over a fine speed scale.","price":48},
  {"id":138,"cat":"regulator","grp":"4step","img":"reg-4nm-bl.webp","name":"4 Step Fan Regulator – Pointer Knob, Black","spec":"Model 4NM-BL · Modular · PC · Pack of 20","desc":"Pointer knob in a glossy black finish for dark switchboards.","price":49},
  {"id":139,"cat":"regulator","grp":"5step","img":"reg-5m.webp","name":"5 Step Fan Regulator – Dial Cap","spec":"Model 5M · Modular · PC · Pack of 10","desc":"Clean flat cap with printed speed numbers.","price":66},
  {"id":140,"cat":"regulator","grp":"5step","img":"reg-5nm.webp","name":"5 Step Fan Regulator – Pointer Knob","spec":"Model 5NM · Modular · PC · Pack of 10","desc":"Easy-grip knob with a red pointer showing the speed.","price":67,"featured":true},
  {"id":141,"cat":"regulator","grp":"5step","img":"reg-5cm.webp","name":"5 Step Fan Regulator – Chrome Ring","spec":"Model 5CM · Modular · PC · Pack of 10","desc":"Double chrome ring design with a sleek finish.","price":70},
  {"id":142,"cat":"regulator","grp":"5step","img":"reg-5dm.webp","name":"5 Step Fan Regulator – Diamond Cap","spec":"Model 5DM · Modular · PC · Pack of 10","desc":"Diamond-shaped cap with a modern look.","price":68},
  {"id":143,"cat":"regulator","grp":"5step","img":"reg-5dlm.webp","name":"5 Step Fan Regulator – Deluxe Dial","spec":"Model 5DLM · Modular · PC · Pack of 10","desc":"Chrome ring dial with a fine speed scale.","price":72},
  {"id":144,"cat":"regulator","grp":"dimmer","img":"reg-vm.webp","name":"Fan Dimmer Regulator – Dial Cap","spec":"Model VM · Modular · PC · Pack of 20","desc":"Clean flat cap with printed speed numbers.","price":37},
  {"id":145,"cat":"regulator","grp":"dimmer","img":"reg-vnm.webp","name":"Fan Dimmer Regulator – Pointer Knob","spec":"Model VNM · Modular · PC · Pack of 20","desc":"Easy-grip knob with a red pointer showing the speed.","price":37},
  {"id":146,"cat":"regulator","grp":"dimmer","img":"reg-vfm.webp","name":"Fan Dimmer Regulator – Ring Knob","spec":"Model VFM · Modular · PC · Pack of 20","desc":"Chrome ring knob with a slim pointer for a premium look.","price":38},
  {"id":147,"cat":"regulator","grp":"dimmer","img":"reg-vsm.webp","name":"Fan Dimmer Regulator – Trio Knob","spec":"Model VSM · Modular · PC · Pack of 20","desc":"Three-wing knob that is easy to turn.","price":38},
  {"id":148,"cat":"regulator","grp":"dimmer","img":"reg-vcm.webp","name":"Fan Dimmer Regulator – Chrome Ring","spec":"Model VCM · Modular · PC · Pack of 20","desc":"Double chrome ring design with a sleek finish.","price":40},
  {"id":149,"cat":"regulator","grp":"4step","img":"reg-4pm.webp","name":"4 Step Fan Regulator – Fan Logo Cap","spec":"Model 4PM · Modular · PC · Pack of 20","desc":"Round cap with a fan logo pointer.","price":48},
  {"id":150,"cat":"regulator","grp":"5step","img":"reg-5pm.webp","name":"5 Step Fan Regulator – Fan Logo Cap","spec":"Model 5PM · Modular · PC · Pack of 10","desc":"Round cap with a fan logo pointer.","price":71},
  {"id":151,"cat":"regulator","grp":"4step","img":"reg-4j.webp","name":"4 Step Fan Regulator – Dome Cap","spec":"Model 4J · Modular · PC · Pack of 20","desc":"Smooth dome cap with a clean speed layout.","price":48},
  {"id":152,"cat":"regulator","grp":"5step","img":"reg-5j.webp","name":"5 Step Fan Regulator – Dome Cap","spec":"Model 5J · Modular · PC · Pack of 10","desc":"Smooth dome cap with a clean speed layout.","price":71},
  {"id":153,"cat":"regulator","grp":"4step","img":"reg-4nw.webp","name":"4 Step Fan Regulator – Classic Dial","spec":"Model 4NW · Plate type · PC · Pack of 20","desc":"Classic round dial with numbered positions.","price":48},
  {"id":154,"cat":"regulator","grp":"5step","img":"reg-5nw.webp","name":"5 Step Fan Regulator – Classic Dial","spec":"Model 5NW · Plate type · PC · Pack of 10","desc":"Classic round dial with numbered positions.","price":71},
  {"id":155,"cat":"regulator","grp":"4step","img":"reg-4agm.webp","name":"4 Step Fan Regulator – Grip Knob","spec":"Model 4AGM · Modular · PC · Pack of 20","desc":"Long red grip knob over a fine speed scale.","price":48},
  {"id":156,"cat":"regulator","grp":"4step","img":"reg-4ri.webp","name":"4 Step Fan Regulator – Indicator Dial","spec":"Model 4RI · Modular · PC · Pack of 20","desc":"Minimal dial with dot indicator.","price":48},
  {"id":157,"cat":"regulator","grp":"4step","img":"reg-4gg.webp","name":"4 Step Fan Regulator – Ivory Dial","spec":"Model 4GG · Plate type · PC · Pack of 20","desc":"Round dial in an ivory finish.","price":48},
  {"id":158,"cat":"regulator","grp":"cooler","img":"reg-cn.webp","name":"Cooler Regulator 1000W – Pointer Knob","spec":"Model CN · 1000W · PC · Pack of 10","desc":"Cooler speed regulator with a red pointer knob.","price":76,"featured":true},
  {"id":159,"cat":"regulator","grp":"cooler","img":"reg-cn.webp","name":"Cooler Regulator 1500W – Pointer Knob","spec":"Model CN · 1500W · PC · Pack of 10","desc":"Cooler speed regulator with a red pointer knob.","price":80},
  {"id":160,"cat":"regulator","grp":"cooler","img":"reg-cn.webp","name":"Cooler Regulator 2000W – Pointer Knob","spec":"Model CN · 2000W · PC · Pack of 10","desc":"Cooler speed regulator with a red pointer knob.","price":83},
  {"id":161,"cat":"regulator","grp":"cooler","img":"reg-cn.webp","name":"Cooler Regulator 2300W – Pointer Knob","spec":"Model CN · 2300W · PC · Pack of 10","desc":"Cooler speed regulator with a red pointer knob.","price":89},
  {"id":162,"cat":"regulator","grp":"cooler","img":"reg-cc.webp","name":"Cooler Regulator 1000W – Chrome Ring","spec":"Model CC · 1000W · PC · Pack of 10","desc":"Cooler speed regulator with a double chrome ring.","price":81},
  {"id":163,"cat":"regulator","grp":"cooler","img":"reg-cc.webp","name":"Cooler Regulator 1500W – Chrome Ring","spec":"Model CC · 1500W · PC · Pack of 10","desc":"Cooler speed regulator with a double chrome ring.","price":84},
  {"id":164,"cat":"regulator","grp":"cooler","img":"reg-cc.webp","name":"Cooler Regulator 2000W – Chrome Ring","spec":"Model CC · 2000W · PC · Pack of 10","desc":"Cooler speed regulator with a double chrome ring.","price":87},
  {"id":165,"cat":"regulator","grp":"cooler","img":"reg-cc.webp","name":"Cooler Regulator 2300W – Chrome Ring","spec":"Model CC · 2300W · PC · Pack of 10","desc":"Cooler speed regulator with a double chrome ring.","price":93},
  {"id":166,"cat":"regulator","grp":"blank","img":"reg-r-bp.webp","name":"Blank Plate – R Series","spec":"Model R-BP · PC · Pack of 300","desc":"Cover plate to close an unused module slot.","price":2},
  {"id":167,"cat":"regulator","grp":"blank","img":"reg-j-bp.webp","name":"Blank Plate – J Series","spec":"Model J-BP · PC · Pack of 300","desc":"Cover plate to close an unused module slot.","price":3},
  {"id":168,"cat":"regulator","grp":"blank","img":"reg-pm-bp.webp","name":"Blank Plate – PM Series","spec":"Model PM-BP · PC · Pack of 300","desc":"Cover plate to close an unused module slot.","price":4},
  {"id":169,"cat":"regulator","grp":"blank","img":"reg-agm-bp.webp","name":"Blank Plate – AGM Series","spec":"Model AGM-BP · PC · Pack of 300","desc":"Cover plate to close an unused module slot.","price":4},
  {"id":170,"cat":"regulator","grp":"blank","img":"reg-ri-bp.webp","name":"Blank Plate – RI Series","spec":"Model Ri-BP · PC · Pack of 300","desc":"Cover plate to close an unused module slot.","price":4}
];

const $ = s => document.querySelector(s);
const HAS_CART = !!document.getElementById("drawer");
const $$ = s => document.querySelectorAll(s);
const inr = n => "₹" + n.toLocaleString("en-IN");
const wa = text => "https://wa.me/" + SHOP.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

let cart = {};
try { cart = JSON.parse(localStorage.getItem("marsle_cart") || "{}"); } catch(e) { cart = {}; }
const save = () => { try { localStorage.setItem("marsle_cart", JSON.stringify(cart)); } catch(e){} };

/* fill shop details anywhere on the page */
$$("[data-shop]").forEach(el => { el.textContent = SHOP[el.dataset.shop]; });
$$("[data-wa]").forEach(el => { el.href = wa("Hello Marsle Electronics, I have an enquiry."); });
$$("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
$$("[data-count-cat]").forEach(el => { el.textContent = PRODUCTS.filter(p=>p.cat===el.dataset.countCat).length + " products"; });

/* mobile menu */
const burger = $(".burger");
if (burger) burger.onclick = () => { const m = $(".menu"); m.classList.toggle("open"); burger.setAttribute("aria-expanded", m.classList.contains("open")); };

/* ---------- product grid ---------- */
const grid = $("#grid");
let cat = "all", query = "", grp = "all";
const IMG_BASE = (() => { const l = document.querySelector(".brand img"); return l ? l.getAttribute("src").replace(/logo\.png$/,"") : ""; })();
const syncSub = () => { const st = $("#subtools"); if (st) st.hidden = cat !== "regulator"; };
if (grid) {
  const fromUrl = new URLSearchParams(location.search).get("cat");
  if (fromUrl && ["switch","socket","regulator","other"].includes(fromUrl)) cat = fromUrl;
  $$(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.cat === cat));
  syncSub();
}
function render(){
  if (!grid) return;
  const limit = grid.dataset.featured ? PRODUCTS.filter(p => p.tag || p.featured) : PRODUCTS;
  const q = query.trim().toLowerCase();
  const list = limit.filter(p => (cat==="all"||p.cat===cat) && (cat!=="regulator"||grp==="all"||p.grp===grp) &&
    (!q || (p.name+" "+p.spec+" "+p.desc).toLowerCase().includes(q)));
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="pic">${p.tag?`<span class="tag">${p.tag}</span>`:""}${p.img?`<img src="${IMG_BASE+p.img}" alt="${p.name}" loading="lazy">`:ICONS[p.cat]}</div>
      <div class="body">
        <h3>${p.name}</h3>
        <div class="spec">${p.spec}</div>
        <p class="desc">${p.desc}</p>
        <div class="buy">
          <div class="price">${inr(p.price)} <small>/ piece</small></div>
          ${HAS_CART ? `<button class="add${cart[p.id]?" in":""}" data-id="${p.id}">${cart[p.id]?"In cart ("+cart[p.id]+")":"Add to Cart"}</button>` : `<a class="add" href="products.html">View Product</a>`}
        </div>
      </div>
    </article>`).join("");
  const empty = $("#empty"); if (empty) empty.hidden = list.length > 0;
  if (animateGrid) { grid.classList.remove("swap"); void grid.offsetWidth; grid.classList.add("swap");
    grid.querySelectorAll(".card").forEach((c,i)=>c.style.setProperty("--i",i)); animateGrid = false; }
}
let animateGrid = false;
const q = $("#q"); if (q) q.addEventListener("input", e => { query = e.target.value; animateGrid = true; render(); });

/* ---------- cart ---------- */
function orderText(){
  let t = "Hello Marsle Electronics, I would like to order:\n", total = 0;
  Object.keys(cart).filter(id=>cart[id]>0).forEach((id,i) => {
    const p = PRODUCTS.find(x=>x.id==id); if (!p) return; total += p.price*cart[id];
    t += `${i+1}. ${p.name} (${p.spec}) x ${cart[id]} = ${inr(p.price*cart[id])}\n`;
  });
  return t + `Total: ${inr(total)}`;
}
function renderCart(){
  if (!HAS_CART) return;
  const ids = Object.keys(cart).filter(id => cart[id] > 0 && PRODUCTS.some(p=>p.id==id));
  let total = 0, count = 0;
  $("#items").innerHTML = ids.length ? ids.map(id => {
    const p = PRODUCTS.find(x => x.id == id), n = cart[id];
    total += p.price*n; count += n;
    return `<div class="it">
      <div><div class="n">${p.name}</div><div class="s">${p.spec} · ${inr(p.price)} each</div></div>
      <div class="lt">${inr(p.price*n)}</div>
      <div class="qty"><button data-dec="${id}" aria-label="Decrease">−</button><span>${n}</span><button data-inc="${id}" aria-label="Increase">+</button></div>
    </div>`;
  }).join("") : `<p class="empty">Your cart is empty. Tap "Add to Cart" on any product.</p>`;
  $("#total").textContent = inr(total);
  $("#count").textContent = count;
  const link = $("#waLink");
  if (ids.length) { link.href = wa(orderText()); link.setAttribute("aria-disabled","false"); }
  else { link.href = "#"; link.setAttribute("aria-disabled","true"); }
}

document.addEventListener("click", e => {
  const add = e.target.closest(".add");
  if (add) { const id = add.dataset.id; cart[id] = (cart[id]||0)+1; save(); render(); renderCart(); bump(); return; }
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
  if (inc) cart[inc.dataset.inc]++;
  if (dec) { const id = dec.dataset.dec; cart[id]--; if (cart[id]<=0) delete cart[id]; }
  if (inc || dec) { save(); render(); renderCart(); }
  const chip = e.target.closest(".chip");
  if (chip) { cat = chip.dataset.cat; $$(".chip").forEach(c=>c.setAttribute("aria-pressed", c===chip)); syncSub(); animateGrid = true; render(); }
  const sc = e.target.closest(".schip");
  if (sc) { grp = sc.dataset.grp; $$(".schip").forEach(c=>c.setAttribute("aria-pressed", c===sc)); animateGrid = true; render(); }
});

const openCart = v => {
  if (!HAS_CART) return;
  $("#drawer").classList.toggle("open", v); $("#scrim").classList.toggle("open", v);
  $("#drawer").setAttribute("aria-hidden", !v);
  document.body.style.overflow = v ? "hidden" : "";
};
if (HAS_CART) {
$("#openCart").onclick = () => openCart(true);
$("#closeCart").onclick = () => openCart(false);
$("#scrim").onclick = () => openCart(false);
}
document.addEventListener("keydown", e => { if (e.key === "Escape") openCart(false); });

if (HAS_CART) $("#copyOrder").onclick = () => {
  if (!Object.keys(cart).length) { $("#cartNote").textContent = "Add a product to your cart first."; return; }
  const txt = orderText();
  navigator.clipboard.writeText(txt).then(
    () => $("#cartNote").textContent = "Order details copied. Paste them in WhatsApp and send.",
    () => $("#cartNote").textContent = txt
  );
};

/* ---------- enquiry form ---------- */
const enq = $("#enq");
if (enq) enq.addEventListener("submit", e => {
  e.preventDefault();
  const n = $("#en").value.trim(), p = $("#ep").value.replace(/\D/g,"");
  if (!n || p.length < 10) { $("#enqNote").textContent = "Please enter your name and a 10-digit mobile number."; return; }
  const msg = `Enquiry from website\nName: ${n}\nMobile: ${p}\nType: ${$("#et").value}\nRequirement: ${$("#em").value || "-"}`;
  const a = document.createElement("a");
  a.href = wa(msg); a.target = "_blank"; a.rel = "noopener";
  document.body.appendChild(a); a.click(); a.remove();
  $("#enqNote").textContent = "Opening WhatsApp. Tap Send there to submit your enquiry.";
});

render(); renderCart();

/* ---------- motion ---------- */
function bump(){ const b = $("#count"); if (!b) return; b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* header shadow + shrink on scroll */
const siteHeader = $(".top");
const onScroll = () => siteHeader && siteHeader.classList.toggle("scrolled", window.scrollY > 30);
window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

/* scroll reveal */
if ("IntersectionObserver" in window && !reduce) {
  const targets = [];
  $$("section .head, .cats .cat, .why > div, .split > *, .founder-grid > *, .bulk .wrap > *, .band .wrap > *, footer .cols > *, .strip .wrap > div")
    .forEach(el => targets.push(el));
  $$(".grid:not(.swap)").forEach(g => g.querySelectorAll(".card").forEach(c => targets.push(c)));
  document.documentElement.classList.add("js-motion");
  const show = el => { el.classList.add("in");
    setTimeout(() => { el.classList.remove("rv","in"); el.style.removeProperty("--d"); }, 1300); };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { show(en.target); io.unobserve(en.target); }
  }), {threshold:.12, rootMargin:"0px 0px -40px 0px"});
  targets.forEach(el => {
    const sib = [...el.parentElement.children].filter(c => targets.includes(c));
    el.style.setProperty("--d", (sib.indexOf(el) % 6) * 0.08 + "s");
    el.classList.add("rv");
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) requestAnimationFrame(() => show(el));
    else io.observe(el);
  });
}

/* smooth fade between pages */
document.addEventListener("click", e => {
  const a = e.target.closest("a[href]");
  if (!a || reduce || e.ctrlKey || e.metaKey || e.shiftKey || a.target === "_blank") return;
  const href = a.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) return;
  if (a.pathname === location.pathname && a.hash) return;
  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(() => { location.href = a.href; }, 260);
});
window.addEventListener("pageshow", e => { if (e.persisted) document.body.classList.remove("leaving"); });

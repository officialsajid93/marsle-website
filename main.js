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
  {id:9,cat:"regulator",name:"5-Step Fan Regulator",spec:"Up to 100W fan · 2M",desc:"Step-type regulator that runs cool and saves power.",price:165,tag:"Best seller"},
  {id:10,cat:"regulator",name:"Rotary Fan Regulator",spec:"Up to 100W fan · 2M",desc:"Smooth knob-type speed control.",price:210},
  {id:11,cat:"regulator",name:"Socket-Type Regulator",spec:"Up to 100W fan · Surface",desc:"Surface-mounted, suits older wiring.",price:120},
  {id:12,cat:"other",name:"Pendant Lamp Holder",spec:"B22 · 6A · Bakelite",desc:"Hanging holder for bulbs.",price:22},
  {id:13,cat:"other",name:"Batten Holder",spec:"B22 · 6A · Angle type",desc:"Mounts directly on wall or ceiling.",price:30},
  {id:14,cat:"other",name:"8-Module Cover Plate",spec:"8M · White · with frame",desc:"Modular plate and frame for switchboards.",price:85}
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
let cat = "all", query = "";
if (grid) {
  const fromUrl = new URLSearchParams(location.search).get("cat");
  if (fromUrl && ["switch","socket","regulator","other"].includes(fromUrl)) cat = fromUrl;
  $$(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.cat === cat));
}
function render(){
  if (!grid) return;
  const limit = grid.dataset.featured ? PRODUCTS.filter(p => p.tag) : PRODUCTS;
  const q = query.trim().toLowerCase();
  const list = limit.filter(p => (cat==="all"||p.cat===cat) &&
    (!q || (p.name+" "+p.spec+" "+p.desc).toLowerCase().includes(q)));
  grid.innerHTML = list.map(p => `
    <article class="card">
      <div class="pic">${p.tag?`<span class="tag">${p.tag}</span>`:""}${ICONS[p.cat]}</div>
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
  if (chip) { cat = chip.dataset.cat; $$(".chip").forEach(c=>c.setAttribute("aria-pressed", c===chip)); animateGrid = true; render(); }
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

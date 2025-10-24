// Simple product data
const products = [
  {
    name: "WWE SVR 2010 Mod Pack",
    desc: "High-quality character mods with realistic movesets.",
    img: "https://via.placeholder.com/300x180",
    link: "#"
  },
  {
    name: "Ultimate App Booster",
    desc: "Lightweight tool for faster gameplay and recording.",
    img: "https://via.placeholder.com/300x180",
    link: "#"
  }
];

// render products
const list = document.getElementById("product-list");
list.innerHTML = products.map(p => `
  <div class="product">
    <img src="${p.img}" alt="${p.name}" style="width:100%;border-radius:8px;">
    <h4>${p.name}</h4>
    <p>${p.desc}</p>
    <a href="${p.link}" class="btn">View</a>
  </div>
`).join("");

// theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// language switcher
document.getElementById("lang").addEventListener("change", e => {
  const lang = e.target.value;
  document.querySelectorAll("[data-" + lang + "]").forEach(el => {
    el.textContent = el.dataset[lang];
  });
});

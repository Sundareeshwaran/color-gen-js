const btn = document.querySelector(".color-btn");
const para = document.querySelector(".color-name");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  // document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  para.innerHTML = `RGB: ${r}, ${g}, ${b}`;
  para.style.color = `rgb(${r}, ${g}, ${b})`;
  console.log(`rgb: ${r}, ${g}, ${b}`);
});

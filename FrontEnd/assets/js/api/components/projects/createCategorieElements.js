export const createBtnCategories = (name, active) => {
  const nodeParent = document.querySelector(".filtersbtn");
  const newBtn = document.createElement("button");
  newBtn.classList.add("btnCategory", active && "btnCategory--inactive");
  newBtn.setAttribute("data-filter", name);
  newBtn.innerText = name;
  nodeParent.appendChild(newBtn);
  return newBtn;
};
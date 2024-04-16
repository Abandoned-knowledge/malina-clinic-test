const dropdown = document.querySelector(".dropdown");
const dropdownContent = dropdown.querySelector(".dropdown__content");
const dropdownSorting = dropdown.querySelector(".dropdown__btn-sorting");
import { getUserKeys } from "./api.js";
function showDropdown() {
  this.classList.toggle("dropdown__open");
}
function closeDropdown(event) {
  const target = event.target;
  if (!target.closest(".dropdown")) dropdown.classList.remove("dropdown__open");
}
function selectDropdownItem(event) {
  const target = event.target;
  if (target.closest(".dropdown__item")) {
    dropdownSorting.innerHTML = target.innerHTML;
  }
}

function createDropdownElement(title) {
  const element = document.createElement("li");
  element.classList.add("dropdown__item");
  element.innerHTML = title;

  dropdownContent.appendChild(element);
}

async function createDropdownItems() {
  const keys = await getUserKeys();
  keys.forEach((key) => createDropdownElement(key));
}
createDropdownItems();

dropdown.addEventListener("click", showDropdown);
dropdownContent.addEventListener("click", selectDropdownItem);
window.addEventListener("click", closeDropdown);

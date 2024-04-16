const pagination = document.querySelector(".pagination");
const pagPrev = document.getElementById("pagination__prev");
const pagNext = document.getElementById("pagination__next");
const pagPages = pagination.querySelector(".pagination__pages");
const pages = document.getElementsByClassName("pagination__page");

import { fetchUsers, chunk } from "./api.js";
import { selectUsersCount } from "./table.js";

function createPagElement(index) {
  const el = document.createElement("button");
  el.classList.add("pagination__btn", "pagination__page", "body-text");
  el.innerHTML = index;
  pagPages.appendChild(el);
}

async function createPagItems() {
  const users = await fetchUsers();
  const usersCount = Math.ceil(users.length);
  const pagesCount = usersCount / chunk;

  for (let i = 0; i < pagesCount; i++) {
    createPagElement(i + 1);
  }
}

function selectPagItem(event) {
  const target = event.target;
  const value = Number(target.innerHTML); // the value in the button
  let page;

  // remove all selected pages
  for (let i = 0; i < pages.length; i++) {
    page = pages[i];
    page.classList.remove("pagination__page_selected");
  }

  // add a selected class to a clicked button
  if (target.closest(".pagination__page")) {
    target.classList.add("pagination__page_selected");
    selectUsersCount((value - 1) * chunk, value * chunk); // show records
  }
}
pagPages.addEventListener("click", selectPagItem);

document.addEventListener("DOMContentLoaded", async function () {
  await createPagItems();
  let firstPage = document.querySelector(".pagination__page");
  firstPage.click();
});

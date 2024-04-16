const pagination = document.querySelector(".pagination");
const pagPrev = document.getElementById("pagination__prev");
const pagNext = document.getElementById("pagination__next");
const pagPages = pagination.querySelector(".pagination__pages");
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
  const usersCount = Math.ceil(await users.length);
  const pagesCount = usersCount / chunk;

  for (let i = 0; i < pagesCount; i++) {
    createPagElement(i + 1);
  }
}

function selectPagItem(event) {
  const pages = document.querySelectorAll(".pagination__page");
  pages.forEach((page) => page.classList.remove("pagination__page_selected"));
  const target = event.target;
  const value = Number(target.innerHTML);
  if (target.closest(".pagination__page")) {
    target.classList.add("pagination__page_selected");
    selectUsersCount((value - 1) * chunk, value * chunk);
  }
}

pagPages.addEventListener("click", selectPagItem);

document.addEventListener("DOMContentLoaded", async function () {
  await createPagItems();
  let firstPage = document.querySelector(".pagination__page");
  firstPage.click();
})
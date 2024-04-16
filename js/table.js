const table = document.querySelector(".table");
const tableHead = table.querySelector("thead tr");
const tableBody = table.querySelector("tbody");
import { getUserKeys, fetchUsers } from "./api.js";

function createTableHeadElement(title) {
  const element = document.createElement("th");
  element.innerHTML = title;
  tableHead.appendChild(element);
}

async function createTableHead() {
  const keys = await getUserKeys();
  keys.forEach((key) => createTableHeadElement(key));
}
createTableHead();

export async function selectUsersCount(startIndex, endIndex) {
  tableBody.innerHTML = "";
  const users = await fetchUsers();
  const usersSlicing = await users.slice(startIndex, endIndex);
  usersSlicing.forEach((element) => createTableBodyRecord(element));
}

function createTableBodyRecord(object) {
  const record = document.createElement("tr");
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      const cell = document.createElement("td");
      cell.innerHTML = value;
      record.appendChild(cell);
    }
  }

  tableBody.appendChild(record);
}

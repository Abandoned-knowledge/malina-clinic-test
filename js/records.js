const records = document.querySelector(".item__records");
const recordAll = records.querySelector(".item__records-all");
const recordChunk = records.querySelector(".item__records-chunk");
import { fetchUsers, chunk } from "./api.js";

async function showRecords() {
    recordChunk.innerHTML = chunk;
    const users = await fetchUsers();
    recordAll.innerHTML = users.length;
}

showRecords();
const records = document.querySelector(".item__records");
const recordAll = records.querySelector(".item__records-all");
const recordChunk = records.querySelector(".item__records-chunk");
import { fetchUsers, chunk } from "./api.js";

async function showRecords() {
    const users = await fetchUsers();
    const usersCount = await users.length;
    recordAll.innerHTML = await usersCount;
}
recordChunk.innerHTML = chunk;
showRecords();
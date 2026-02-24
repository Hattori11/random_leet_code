import { showHeader } from "./showHeader.js";
import { search } from "./search.js";
async function renderLeetcodes() {
    const leetcodesContainer = document.getElementById("leetcodes-container");
    const fragment = document.createDocumentFragment();
    const response = await fetch("/api/leetcodes");
    const data = await response.json();
    const total = data.total;
    const states = data.states;
    for (let i = 1; i <= total; i++) {
        const div = document.createElement("div");
        div.innerText = String(i);
        div.id = String(i);
        div.classList.add("leetcode");
        const state = states[i] ?? "unattempted";
        div.classList.add(state);
        fragment.appendChild(div);
    }
    leetcodesContainer.appendChild(fragment);
}
const btnManageLeetcodes = document.getElementById("manage-leetcodes");
btnManageLeetcodes.addEventListener("click", async () => {
    await renderLeetcodes();
    showHeader();
    const inputSearch = document.querySelector('input[type="search"]');
    const formSearch = document.querySelector("#leetcodes-section form");
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const idLeetcode = inputSearch.value;
        const leetcode = document.getElementById(idLeetcode);
        search(leetcode);
        inputSearch.value = "";
    });
    const filterContainer = document.getElementById("filter");
    const alls = document.querySelectorAll(".leetcode");
    filterContainer.addEventListener("click", (event) => {
        const target = event.target;
        if (target instanceof HTMLElement) {
            if (target.id === "all") {
                alls.forEach((div) => {
                    div.classList.remove("hidden");
                });
            }
            else if (target.id === "unattempted") {
                alls.forEach((div) => {
                    if (div.classList.contains("unattempted")) {
                        div.classList.remove("hidden");
                    }
                    else {
                        div.classList.add("hidden");
                    }
                });
            }
            else if (target.id === "in-progress") {
                alls.forEach((div) => {
                    if (div.classList.contains("in-progress")) {
                        div.classList.remove("hidden");
                    }
                    else {
                        div.classList.add("hidden");
                    }
                });
            }
            else {
                alls.forEach((div) => {
                    if (div.classList.contains("solved")) {
                        div.classList.remove("hidden");
                    }
                    else {
                        div.classList.add("hidden");
                    }
                });
            }
        }
    });
});

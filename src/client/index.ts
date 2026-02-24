import { showHeader } from "./showHeader";
import { search } from "./search";

async function renderLeetcodes(): Promise<void> {
  const leetcodesContainer = document.getElementById("leetcodes-container") as HTMLDivElement;
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

const btnManageLeetcodes = document.getElementById("manage-leetcodes") as HTMLButtonElement;

btnManageLeetcodes.addEventListener("click", () => {
  renderLeetcodes();
  showHeader();

  const inputSearch = document.querySelector('input[type="search"]') as HTMLInputElement;
  const formSearch = document.querySelector("#leetcodes-section form") as HTMLFormElement;
  formSearch.addEventListener("submit", (event) => {
    event.preventDefault();

    const idLeetcode: string = inputSearch.value;
    const leetcode = document.getElementById(idLeetcode) as HTMLDivElement;
    search(leetcode);

    inputSearch.value = "";
  });

  // Aqui para baixo que é o filtro não está funcionando
  const filterContainer = document.getElementById("filter") as HTMLDivElement;
  const alls = document.querySelectorAll(".leetcode");
  
  filterContainer.addEventListener("click", (event) => {
    const target = event.target;

    if (target instanceof HTMLElement) {
      if (target.classList.contains("all")) {
        alls.forEach(div => {
          div.classList.remove("hidden");
        });
      } else if (target.classList.contains("unattempted")) {
        alls.forEach(div => {
          if (div.classList.contains("unattempted")) {
            div.classList.remove("hidden");
          } else {
            div.classList.add("hidden");
          }
        });
      } else if (target.classList.contains("in-progress")) {
        alls.forEach(div => {
          if (div.classList.contains("in-progress")) {
            div.classList.remove("hidden");
          } else {
            div.classList.add("hidden");
          }
        });
      } else {
        alls.forEach(div => {
          if (div.classList.contains("solved")) {
            div.classList.remove("hidden");
          } else {
            div.classList.add("hidden");
          }
        });
      }
    }
  });
  // Até aqui, tudo acima não funciona

});
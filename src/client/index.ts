import { showHeader } from "./showHeader";

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
});
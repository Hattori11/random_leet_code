function renderLeetcodes(): void {
    const NUMBER_LEETCODE: number = 3719;

    const grid = document.querySelector(".leetcodes-grid") as HTMLElement;

    if (!grid) {
        throw new Error("Grid não encontrada");
    }

    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= NUMBER_LEETCODE; i++) {
        const div = document.createElement("div");
        div.classList.add("leetcode");
        div.innerText = String(i);

        fragment.appendChild(div);
    }

    grid.appendChild(fragment);
}
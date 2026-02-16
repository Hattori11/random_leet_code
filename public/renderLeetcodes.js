function renderLeetcodes() {
    var NUMBER_LEETCODE = 3719;
    var grid = document.querySelector(".leetcodes-grid");
    if (!grid) {
        throw new Error("Grid não encontrada");
    }
    var fragment = document.createDocumentFragment();
    for (var i = 1; i <= NUMBER_LEETCODE; i++) {
        var div = document.createElement("div");
        div.classList.add("leetcode");
        div.innerText = String(i);
        fragment.appendChild(div);
    }
    grid.appendChild(fragment);
}

function showHeader() {
    const header = document.querySelector("#leetcodes-container > header");
    header.classList.remove("escondido");
}

const btnRenderLeetcodes = document.getElementById("open-leetcodes");
btnRenderLeetcodes.addEventListener("click", () => {
    renderLeetcodes();
    showHeader();
});
function filterLeetcodes() {
    var filterContainer = document.getElementById("filter");
    filterContainer.addEventListener("change", function (event) {
        var target = event.target;
        // Garante que é um radio do grupo correto
        if (target && target.name === "state") {
            var selectedState_1 = target.value;
            var leetcodes = document.querySelectorAll(".leetcode");
            leetcodes.forEach(function (item) {
                if (selectedState_1 === "all" ||
                    item.classList.contains(selectedState_1)) {
                    item.style.display = "block";
                }
                else {
                    item.style.display = "none";
                }
            });
        }
    });
}

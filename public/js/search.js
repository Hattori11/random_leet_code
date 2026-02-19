function searchLeetcode() {
    var input = document.querySelector('#leetcodes-section input[type="search"]');
    var idElement = input.value;
    var element = document.getElementById(idElement);
    element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
    input.value = "";
}

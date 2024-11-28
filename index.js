let projects = document.getElementsByClassName("project");
let selectlang = document.getElementById("selectlang");

for (const e of projects) {
    e.insertAdjacentHTML("beforeend", `<span class="details"><a href="${e.getAttribute("data-repo")}" target="_blank" rel="noopener noreferrer">Github</a></span>`);
    e.style.backgroundImage = `url(./${e.getAttribute("data-bgi")})`;
}

function replaceTexts(lang) {
    for (const e of document.getElementsByClassName("l")) {
        e.innerHTML = e.getAttribute(`data-${lang}`);
    }
}

selectlang.addEventListener("change", () => {
    replaceTexts(selectlang.value);
});

switch (window.navigator.language) {
    case "ja":
    case "ja-JP":
        break;

    case "zh-TW":
        document.getElementsByTagName("html")[0].setAttribute("lang", "zh_Hant");
        selectlang.value = "zh_tw";
        replaceTexts("zh_tw");
        break;

    case "en":
    case "en-US":
        document.getElementsByTagName("html")[0].setAttribute("lang", "en");
        selectlang.value = "en";
        replaceTexts("en");
        break;

    case "eo":
        document.getElementsByTagName("html")[0].setAttribute("lang", "eo");
        selectlang.value = "eo";
        replaceTexts("eo");
        break;

    default:
        break;
}

let projects = document.getElementsByClassName("project");

for (const e of projects) {
    e.insertAdjacentHTML("beforeend", `<span class="details"><a href="${e.getAttribute("data-repo")}" target="_blank" rel="noopener noreferrer">Github</a></span>`);
    e.style.backgroundImage = `url(./${e.getAttribute("data-bgi")})`;
}

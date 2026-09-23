/**
 * voor darkbutton en verzorgt dat darkmodes blijft wanneer je van menu verandert.
 */

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    try {
        localStorage.setItem("darkmode", document.body.classList.contains("dark-mode") ? "aan" : "uit");
    }
    catch (fout) {
    }
}

try {
    if (localStorage.getItem("darkmode") === "aan") {
        document.body.classList.add("dark-mode");
    }
}
catch (fout) {
}
function loadHTML(filePath, containerId) {
    fetch(filePath)
        .then((response) => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then((html) => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch((error) => console.error(error));
}

// Load header and footer
loadHTML("./components/modules/Navigation.html", "header-container");
loadHTML("./components/modules/Footer.html", "footer-container");

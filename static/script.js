function goHome() {
    document.location.href = "/";
}

function menu() {
    const links = document.querySelector(".links");

    if (links.style.display === "none") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
}

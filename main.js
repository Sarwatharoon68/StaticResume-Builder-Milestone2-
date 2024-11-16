function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}

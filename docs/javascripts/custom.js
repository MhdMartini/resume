document.addEventListener("DOMContentLoaded", function() {
    const headerTitle = document.querySelector(".md-header__title");
    const contactIcons = document.querySelector(".contact-icons");
    
    if (headerTitle && contactIcons) {
        contactIcons.classList.add("header-icons");
        // Insert icons right after the title in the header inner flexbox
        headerTitle.parentNode.insertBefore(contactIcons, headerTitle.nextSibling);
    }
});

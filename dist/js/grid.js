document.addEventListener("DOMContentLoaded", function() {
    const projectNav = document.querySelectorAll(".project_tab");
    const projectContent = document.querySelectorAll(".project_content_item");

    projectNav.forEach((tab) => {
        tab.addEventListener("click", function() {
            const targetId = `${this.id}-content`;

            removeActiveMenu();
            this.classList.add("active");

            removeActiveContent();
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });

    function removeActiveMenu() {
        projectNav.forEach((tab) => {
            tab.classList.remove("active");
        });
    }

    function removeActiveContent() {
        projectContent.forEach((content) => {
            content.classList.remove("active");
        });
    }
});

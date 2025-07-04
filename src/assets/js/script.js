let sections = ["home", "portfolio", "notices"];
let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let target = this.dataset.target;
        sections.forEach(id => {
            document.getElementById(id).classList.add("d-none");
        });
        navLinks.forEach(link => {
            link.classList.remove("act");
        });
        document.getElementById(target).classList.remove("d-none");
        this.classList.add("act");
    });
});


const dropdown = document.querySelectorAll(".dropdown");
const menu_bg = document.getElementById("menu-bg");

function closeDropdownMenu() {
    dropdown.forEach((drop) => {
        drop.classList.add("dropdown--hide");
        drop.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    })
}

function closeNavMore() {
    nav_more_open = true;
    toggleNavMore()
}

document.documentElement.addEventListener("click",
    () => {
    closeDropdownMenu();
})

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((link) => {
    link.addEventListener("click", function (e) {
        const dropdownIndex = e.currentTarget.dataset.dropdown;
        const dropdownElement = document.getElementById(dropdownIndex);

        dropdownElement.classList.toggle("dropdown--hide");
        closeNavMore();

        dropdown.forEach((drop) => {
            if (drop.id !== link.dataset["dropdown"]) {
                drop.classList.add("dropdown--hide");
            }
        });
        e.stopPropagation();
    });

})

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let nav_more_open = false;

function toggleNavMore() {
    nav_more_open = !nav_more_open;
    const nav_more = document.getElementById("nav-more");

    if (nav_more_open) {
        nav_more.classList.add("show");
        menu_bg.classList.add("menu-bg--show");
        document.querySelector("#ham-menu #upper-line").classList.add("open");
        document.querySelector("#ham-menu #lower-line").classList.add("open");
    } else {
        nav_more.classList.remove("show");
        menu_bg.classList.remove("menu-bg--show");
        document.querySelector("#ham-menu #upper-line").classList.remove("open");
        document.querySelector("#ham-menu #lower-line").classList.remove("open");
    }
}

let logo_menu_open = false;
function logo_menu() {
    logo_menu_open = !logo_menu_open;

    document.body.classList.toggle('active');
    document.querySelector('#logo').classList.toggle('active-hover');
}

let breadcrumbs_open = false;
function toggle_breadcrumbs(m) {
    m.classList.toggle('open');
    breadcrumbs_open = !breadcrumbs_open;
    scroll_on_top = document.getElementById("scroll-on-top");
    mainnav = document.getElementById("main-nav");
    topbar = document.getElementById("topbar");
    nav_backdrop = document.getElementById("nav-backdrop");

    if (breadcrumbs_open) {
        scroll_on_top.classList.add("show");
        scroll_on_top.classList.remove("hide");
        mainnav.classList.remove("main-nav--hide");
        nav_backdrop.classList.remove("backdrop--hide");
        topbar.classList.add("full");
    } else {
        topbar.classList.remove("full");
        scroll_on_top.classList.add("hide");
        scroll_on_top.classList.remove("show");
        mainnav.classList.add("main-nav--hide");
        // mainnav.classList.remove("show");
        nav_backdrop.classList.add("backdrop--hide");
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
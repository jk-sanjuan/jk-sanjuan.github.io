
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let menu_open = false;

function menu() {
    menu_open = !menu_open;

    if (menu_open) {
        document.getElementById("nav").classList.add("show");
        document.getElementById("menu-bg").classList.add("show-bg");
        document.querySelector("#ham-menu #upper-line").classList.add("open");
        document.querySelector("#ham-menu #lower-line").classList.add("open");
    } else {
        document.getElementById("nav").classList.remove("show");
        document.getElementById("menu-bg").classList.remove("show-bg");
        document.querySelector("#ham-menu #upper-line").classList.remove("open");
        document.querySelector("#ham-menu #lower-line").classList.remove("open");
    }
}

function menuOnHover() {
    menu();
    document.getElementById("nav").classList.add("show");
    document.getElementById("menu-bg").classList.add("show-bg");
}

function menuOnMouseLeave() {
    menu();
    document.getElementById("nav").classList.remove("show");
    document.getElementById("menu-bg").classList.remove("show-bg");
}

let breadcrumbs_open = false;
function breadcrumbs(m) {
    m.classList.toggle('open');
    breadcrumbs_open = !breadcrumbs_open;
    scroll_on_top = document.getElementById("scroll-on-top");
    mainnav = document.getElementById("main-nav");
    tbar = document.getElementById("tbar");

    if (breadcrumbs_open) {
        scroll_on_top.classList.add("show");
        scroll_on_top.classList.remove("hide");
        mainnav.classList.add("show");
        mainnav.classList.remove("hide");
        tbar.style.height = "177px";
    } else {
        tbar.style.height = "102px";
        scroll_on_top.classList.add("hide");
        scroll_on_top.classList.remove("show");
        mainnav.classList.add("hide");
        mainnav.classList.remove("show");
    }
}
function hide_mainnav() {
    mainmenu = document.querySelector(".hamburger");
    mainnav = document.getElementById("main-nav");
    tbar = document.getElementById("tbar");

    mainnav.classList.add("hide");
    mainnav.classList.remove("show");
    breadcrumbs(mainmenu);
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

function reveal_hover(el) {
    el.classList.add("active");
}

function noreveal(el) {
    el.classList.remove("active");
}

window.addEventListener("scroll", reveal);

function select_asterisked() {
    var asterisked = document.querySelectorAll("#coursework span.asterisked");

    for (var i = 0; i < asterisked.length; i++) {
        asterisked[i].classList.add("selected");
    }
}

function deselect_asterisked() {
    var asterisked = document.querySelectorAll("#coursework span.asterisked");

    for (var i = 0; i < asterisked.length; i++) {
        asterisked[i].classList.remove("selected");
    }
}


function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

let menu_open = false;
function menu(m) {
    m.classList.toggle('open');
    menu_open = !menu_open;
    scroll_on_top = document.getElementById("scroll-on-top");
    if (menu_open) {
        scroll_on_top.classList.add("show");
        scroll_on_top.classList.remove("hide");
    } else {
        scroll_on_top.classList.add("hide");
        scroll_on_top.classList.remove("show");
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

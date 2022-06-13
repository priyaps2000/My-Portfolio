function load_navbar_and_footer() {
    let body = document.getElementsByTagName('BODY')[0];
    const desktop_navbar = '<nav class="desktop-nav">'+
                        '<a href="index.html">HOME</a>'+
                        '<a href="about.html">ABOUT</a>'+
                        '<a href="projects.html">PROJECTS</a>'+
                        '<a>RESUME</a>'+
                    '</nav>'
    footer_text = '<footer>'+
                    '<p>Designed and Built with <i class="ri-heart-fill"></i> by <a href="#" class="pps">~pps</a></p>'+
                '</footer>'
    body.innerHTML = desktop_navbar + body.innerHTML +footer_text;
}

function on_menu_button_click() {
    const menu_button = document.getElementsByClassName("mobile-nav")[0];
    if (menu_button.classList.contains("clicked-menu-button")){
        menu_button.classList.remove("clicked-menu-button");
    }
    else {
        menu_button.classList.add("clicked-menu-button");
    }  
} 


function register_menu_button_click_handler() {
    const menu_button = document.getElementsByClassName("menu-button")[0];
    menu_button.addEventListener("click", on_menu_button_click);

}

function on_page_load() {
    load_navbar_and_footer();
    register_menu_button_click_handler();
}

window.onload = on_page_load;
function load_navbar_and_footer() {
    let body = document.getElementsByTagName('BODY')[0];
    const desktop_navbar = '<nav class="desktop-nav">'+
                        '<a href="index.html">HOME</a>'+
                        '<a href="about.html">ABOUT</a>'+
                        '<a href="projects.html">PROJECTS</a>'+
                        '<a href="https://drive.google.com/file/d/1U0eFAddA7eJazSXfVEOcDA0gMJrj3UTx/view?usp=sharing">RESUME</a>'+
                    '</nav>'
    const mobile_navbar = `<nav class="mobile-nav">
                                <a href="#" class="menu-button"><i class="ri-menu-line"></i></a>
                                <a href="index.html" class="menu-option">HOME</a>
                                <a href="about.html" class="menu-option">ABOUT</a>
                                <a href="projects.html" class="menu-option">PROJECTS</a>
                                <a href="https://drive.google.com/file/d/1U0eFAddA7eJazSXfVEOcDA0gMJrj3UTx/view?usp=sharing" class="menu-option">RESUME</a>
                            </nav>`
    footer_text = `<div class="contact">
                        <p>Get In Touch</p>
                        <a href="https://www.linkedin.com/in/priyapspps/"><i class="ri-linkedin-box-fill"></i> </a>
                        <a href="mailto:priya00020130@gmail.com"><i class="ri-mail-fill"></i></a>
                        <a href="https://www.instagram.com/_priya_p_s_/"><i class="ri-instagram-fill"></i></a>
                        <a href="https://twitter.com/PriyaPS_"><i class="ri-twitter-fill"></i></a>
                    </div>`+
                    '<footer>'+
                        '<p>Designed and Built with <i class="ri-heart-fill"></i> by <a href="#" class="pps">~pps</a></p>'+
                    '</footer>'
    body.innerHTML = desktop_navbar + mobile_navbar + body.innerHTML +footer_text;
}

function on_menu_button_click() {
    const menu_button = document.getElementsByClassName("mobile-nav")[0];
    if (menu_button.classList.contains("clicked-menu-button")){
        menu_button.classList.remove("clicked-menu-button");
        enable_body_scrolling();
    }
    else {
        menu_button.classList.add("clicked-menu-button");
        diable_body_scrolling();
    }  
} 


function register_menu_button_click_handler() {
    const menu_button = document.getElementsByClassName("menu-button")[0];
    menu_button.addEventListener("click", on_menu_button_click);

}

function diable_body_scrolling() {
    document.body.style.overflow = "hidden";
}

function enable_body_scrolling() {
    document.body.style.overflow = "initial";
}

function on_page_load() {
    load_navbar_and_footer();
    register_menu_button_click_handler();
}

window.onload = on_page_load;
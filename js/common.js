function load_navbar_and_footer() {
    let body = document.getElementsByTagName('BODY')[0];
    const navbar = '<nav class="desktop-nav">'+
                        '<a href="index.html">HOME</a>'+
                        '<a href="about.html">ABOUT</a>'+
                        '<a href="projects.html">PROJECTS</a>'+
                        '<a>RESUME</a>'+
                        '<a href="art.html">ART</a>'+
                    '</nav>'
    footer_text = '<footer>'+
                    '<p>Designed and Built with <i class="ri-heart-fill"></i> by <a href="#" class="pps">~pps</a></p>'+
                '</footer>'
    body.innerHTML = navbar + body.innerHTML +footer_text;
}

function on_page_load() {
    load_navbar_and_footer();
}

window.onload = on_page_load;
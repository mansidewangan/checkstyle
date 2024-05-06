function navbarDesign(){
    const navbarContainer = document.getElementById("navbar-part");
    navbarContainer.innerHTML =`
    <section class="nav">
            <div class="navbar">
                <div class="menu">
                    <img src="hamburger (menu).png" alt="">
                    <a href="menu.html"><button>Menu</button></a>
                </div>
                <img src="logo(atulpublicity).png" alt="" class="image1">
                <div class="icon1">
                    <ul>
                        <li><i class="fa-brands fa-facebook-f"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-whatsapp"></i></li>
                    </ul>
                </div>
            </div>
        </section>
    `;
}

navbarDesign();
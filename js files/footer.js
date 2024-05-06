function footerDesign(){
    const footerContainer = document.getElementById("footer-part");
    footerContainer.innerHTML = `
    <footer class="footer">
    <div class="footer-main">
            <div class="footer-block1">
                <div class="footer-row">
                    <div class="footer-column">
                        <img class="footer-logo" src="logo-2.png" alt="" />
                    </div>
                    <div class="footer-column">
                        <div class="footer-links">
                            <div class="quick">
                                <div class="footer-title">Quick Links</div>
                                <div class="footer-item">
                                    Home
                                </div>
                                <div class="footer-item">
                                    About US
                                </div>
                                <div class="footer-item">
                                    Service
                                </div>
                                <div class="footer-item">
                                    Portfolio
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-column">
                        <div class="footer-links">
                            <div class="blog">
                                <div class="footer-item">
                                    Blogs
                                </div>
                                <div class="footer-item">
                                    Contact Us
                                </div>
                                <div class="footer-item">
                                    Career
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-column">
                        <div class="footer-links">
                            <div class="footer-contact">
                                <div class="address">
                                    <div class="icon-boxF">
                                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                                    </div>
                                    <p class="us">Call Us!</p>
                                    <a href="tel:"><span style="color: #FFFFFF"><p>(+91) 9644136511 (+91) 9406200210</p></span></a>
                                </div>
                                <div class="email">
                                    <div class="icon-boxF">
                                        <!-- <i class="fa-solid fa-envelope"></i> -->
                                    </div>
                                    <p class="us">Mail Us:</p>
                                    <a href=""><span style="color: #FFFFFF"><p>info@atulpublicity.com</p></span></a>
                                </div>
                                <div class="location">
                                    <div class="icon-boxF">
                                        <!-- <i class="fa-solid fa-location-dot"></i> -->
                                    </div>
                                    <p class="us">Location:</p>
                                    <p>Atul publicity Halwai Lane, Raipur<br> 492001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- footer bottom -->
    <div class="footer-line"></div>
    <div class="footer-bottom">
        <div class="footer-block2">
            <div class="footer-copy">
                <p class="footer-copy1">Copyright  © <a href="index.html"> <span style="color: #F58634;">atulpublicity </span></a>
                    2024
                    All Right Reserved.
                </p>
                <p class="footer-copy2">Powered By <span style="color: #F58634;"> Technolitics </span></p>
            </div>
        </div>
    </div>
    </footer>`;
}

footerDesign();
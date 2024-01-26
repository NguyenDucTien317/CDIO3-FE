<template>
    <section class="page-content">
        <!-- PAGE-BANNER START -->
        <div class="page-banner-area margin-bottom-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="page-banner-menu">
                            <h2 class="page-banner-title">Contact</h2>
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- PAGE-BANNER END -->
        <!-- CONTACT-AREA START -->
        <div class="contact-area margin-bottom-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <!-- widget-brand start -->
                        <aside class="widget widget-brand">
                            <h5 class="sidebar-title">Brand</h5>
                            <ul>
                                <li><input type="checkbox" /><a href="#">Country Road</a></li>
                                <li><input type="checkbox" /><a href="#">H&M Home</a></li>
                                <li><input type="checkbox" /><a href="#">Urban outfitters</a></li>
                                <li><input type="checkbox" /><a href="#">Zara home</a></li>
                            </ul>
                        </aside>
                        <!-- widget-brand end -->
                        <!-- widget-top-brand start -->
                        <aside class="widget top-rated">
                            <h5 class="sidebar-title">top rated</h5>
                            <div class="sidebar-product">
                                <!-- Single-product start -->
                                <div class="single-product">
                                    <div class="product-photo">
                                        <a href="#">
                                            <img class="primary-photo" src="../../../assets/admin_2/img/sidebar/1.png"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div class="product-brief">
                                        <h2><a href="#">Randomised Words</a></h2>
                                        <h3>$500.00 <span>$244.00</span></h3>
                                    </div>
                                </div>
                                <!-- Single-product end -->
                                <!-- Single-product start -->
                                <div class="single-product">
                                    <div class="product-photo">
                                        <a href="#">
                                            <img class="primary-photo" src="../../../assets/admin_2/img/sidebar/2.png"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div class="product-brief">
                                        <h2><a href="#">CLEO POURER</a></h2>
                                        <h3>$500.00 <span>$244.00</span></h3>
                                    </div>
                                </div>
                                <!-- Single-product end -->
                                <!-- Single-product start -->
                                <div class="single-product">
                                    <div class="product-photo">
                                        <a href="#">
                                            <img class="primary-photo" src="../../../assets/admin_2/img/sidebar/3.png"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div class="product-brief">
                                        <h2><a href="#">TAM SPREADER</a></h2>
                                        <h3>$500.00 <span>$244.00</span></h3>
                                    </div>
                                </div>
                                <!-- Single-product end -->
                                <!-- Single-product start -->
                                <div class="single-product">
                                    <div class="product-photo">
                                        <a href="#">
                                            <img class="primary-photo" src="../../../assets/admin_2/img/sidebar/4.png"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div class="product-brief">
                                        <h2><a href="#">MARCEL THROW</a></h2>
                                        <h3>$500.00 <span>$244.00</span></h3>
                                    </div>
                                </div>
                                <!-- Single-product end -->
                                <!-- Single-product start -->
                                <div class="single-product">
                                    <div class="product-photo">
                                        <a href="#">
                                            <img class="primary-photo" src="../../../assets/admin_2/img/sidebar/5.png"
                                                alt="" />
                                        </a>
                                    </div>
                                    <div class="product-brief">
                                        <h2><a href="#">RLIE EXTRA SMALL</a></h2>
                                        <h3>$500.00 <span>$244.00</span></h3>
                                    </div>
                                </div>
                                <!-- Single-product end -->
                            </div>
                        </aside>
                        <!-- widget-top-brand end -->
                        <!-- widget sidebar-banner start -->
                        <aside class="widget sidebar-banner">
                            <a href="#"><img src="../../../assets/admin_2/img/banner/sidebar-1.jpg" alt="" /></a>
                        </aside>
                        <!-- widget sidebar-banner start -->
                    </div>
                    <div class="col-lg-9 col-md-8">
                        <!-- Start Map area -->
                        <div class="map-area">
                            <div id="googleMap" style="width:100%;height:350px;"></div>
                        </div>
                        <!-- End Map area -->
                        <div class="row">
                            <!-- contact-info start -->
                            <div class="col-lg-12">
                                <div class="contact-info">
                                    <h3>Contact info</h3>
                                    <ul>
                                        <li>
                                            <i class="fa fa-map-marker"></i> <strong>Address:</strong>
                                            1234 Pall Mall Street, London England
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope"></i> <strong>Phone:</strong>
                                            +8801234-123456
                                        </li>
                                        <li>
                                            <i class="fa fa-mobile"></i> <strong>Email:</strong>
                                            <a href="#">your-email@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- contact-info end -->
                            <div class="col-lg-12">
                                <div class="contact-form-wrap">
                                    <h3><i class="fa fa-envelope-o"></i> Leave a Message</h3>
                                    <div class="row">
                                        <form id="contact-form" action="https://whizthemes.com/mail-php/other/mail.php">
                                            <div class="col-lg-6">
                                                <input name="con_name" type="text" placeholder="Name (required)" />
                                            </div>
                                            <div class="col-lg-6">
                                                <input name="con_email" type="email" placeholder="Email (required)" />
                                            </div>
                                            <div class="col-lg-12">
                                                <input name="con_subject" type="text" placeholder="Subject" />
                                            </div>
                                            <div class="col-lg-12">
                                                <textarea name="con_message" id="message" cols="30" rows="10"
                                                    placeholder="Message"></textarea>
                                                <button type="submit">Submit Form</button>
                                                <p class="form-message"></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- CONTACT-AREA END -->
        <!-- BRAND-LOGO-AREA START -->
        <div class="brand-logo-area margin-bottom-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5">
                        <div class="brand-brief">
                            <h2 class="border-left-right">they are with us</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a
                                page when looking at its layout. </p>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="brand-logo fix">
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/1.png" alt="" />
                            </div>
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/2.png" alt="" />
                            </div>
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/3.png" alt="" />
                            </div>
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/4.png" alt="" />
                            </div>
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/5.png" alt="" />
                            </div>
                            <div class="single-logo">
                                <img src="../../../assets/admin_2/img/brand/6.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- BRAND-LOGO-AREA END -->
    </section>
</template>
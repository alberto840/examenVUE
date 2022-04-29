

<template>
<!-- Portfolio Grid-->
        <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">CLASIFICADOS</h2>
                    <h3 class="section-subheading text-muted">Aqui encontraras los avisos clasificados de nuestro periodico.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 1-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img src="src/assets/img/1.png" alt="Los Angeles" style="width: 400px;">
                                
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Oferta de servicios</div>
                                <div class="portfolio-caption-subheading text-muted">Encontraras diferentes servicios que puede que sean de tu interes</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 2-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img src="src/assets/img/2.jpg" alt="Los Angeles" style="width: 430px;">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Compra y Venta de prctos</div>
                                <div class="portfolio-caption-subheading text-muted">Podras vender o comprar los productos que te llamen la atencion.</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 3-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img src="src/assets/img/3.jpg" alt="Los Angeles" style="width: 300px;">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Venta de inmuebles</div>
                                <div class="portfolio-caption-subheading text-muted">Si estas interesado en algun inmueble este es el lugar correcto.</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
<!-- Portfolio Modals-->
        <!-- Portfolio item 1 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="src/assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Oferta de servicios</h2>
                                    <p class="item-intro text-muted">Encontraras diferentes servicios que puede que sean de tu interes</p>
                                    <img class="img-fluid d-block mx-auto" src="src/assets/img/1.png" alt="..." />
                                    <p>Este es el espacio para ofrecer servicios que sean de interes para la comunidad, para que tu puedas encontrar lo que requieras para tu hogar u empresa.
                                    Estas son algunos de los servicios disponibles:</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Plomeros, electricistas, mecanicos</strong>
                                        </li>
                                        <li>
                                            <strong>Choferes, conductores</strong>
                                        </li>
                                        <li>
                                            <strong>Servicio de transporte</strong>
                                        </li>
                                        <li>
                                            <strong>Sastreria y zapateria</strong>
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 2 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="src/assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Compra y venta de productos</h2>
                                    <p class="item-intro text-muted">Podras vender o comprar los productos que te llamen la atencion.</p>
                                    <img class="img-fluid d-block mx-auto" src="src/assets/img/2.jpg" alt="..." />
                                    <p>Utiliza este espacio tanto para buscar productos de tu interes o vender ciertos productos que quieras vender para expandir tu negocio a nivel nacional o hasta incluso global
                                    Productos ofrecidos:</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Maquinaria Industrial</strong>

                                        </li>
                                        <li>
                                            <strong>Muebles de oficina y hogar</strong>

                                        </li>
                                        <li>
                                            <strong>Abarrotes</strong>

                                        </li>
                                        <li>
                                            <strong>Equipos de gimnasio</strong>

                                        </li>

                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Portfolio item 3 modal popup-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-bs-dismiss="modal"><img src="src/assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project details-->
                                    <h2 class="text-uppercase">Venta de inmuebles</h2>
                                    <p class="item-intro text-muted">Si estas interesado en algun inmueble este es el lugar correcto.</p>
                                    <img class="img-fluid d-block mx-auto" src="src/assets/img/3.jpg" alt="..." />
                                    <p>Aqui encontrars ofertas de inmuebles que sean de tu interes, por si quieres mudarte a futuro y empezar a ahorrar para una casa u oficina.
                                    Asi que aqui te presentamos diferentes inmuebles:</p>
                                    <ul class="list-inline">
                                        <li>
                                            <strong>Edificios en alquiler</strong>
                                        </li>
                                        <li>
                                            <strong>Casas Compra-venta</strong>
                                        </li>
                                        <li>
                                            <strong>Casas en anticretico</strong>
                                        </li>
                                        <li>
                                            <strong>Departamentos Compra-Venta</strong>
                                        </li>
                                        <li>
                                            <strong>Departamentos anticretico</strong>
                                        </li>
                                        <li>
                                            <strong>Locales comerciales alquiler</strong>
                                        </li>
                                    </ul>
                                    <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                        <i class="fas fa-xmark me-1"></i>
                                        Volver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>
<script>
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
</script>
<style>
@import '../assets/portafolio.css';
.parent {
  border: 1px solid black;
  margin: 1rem;
  padding: 2rem 2rem;
  text-align: center;
  color: azure;
}
.child {
  display: inline-block;
  border: 1px solid #0000;
  padding: 1rem 1rem;
  vertical-align: middle;
}

</style>
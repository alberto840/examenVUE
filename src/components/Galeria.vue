<template>
    <div class="parent">
        <div  class="child position-absolute end-50">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="https://mott.pe/noticias/wp-content/uploads/2018/03/10-trucos-para-saber-c%C3%B3mo-tomar-fotos-profesionales-con-el-celular-portada-1280x720.jpg" alt="Chisca" style="width: 600px;">
    </div>

    <div class="item">
      <img src="https://images.theconversation.com/files/254114/original/file-20190116-163292-1fq0u27.jpg?ixlib=rb-1.1.0&rect=2%2C0%2C1914%2C1514&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt="Chica" style="width: 600px;">
    </div>

    <div class="item">
      <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Fotos-portada-e1467633503131.jpg" alt="New Yo" style="width: 600px;">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
            </div>
        </div>
        <div  class="child position-absolute start-50">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner">
    <div class="item active">
      <img src="https://imborrable.com/wp-content/uploads/2021/04/fotos-gratis-de-stock-1.jpg" alt="Los Angeles" style="width: 600px;">
    </div>

    <div class="item">
      <img src="https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg?w=2000" alt="Chicago" style="width: 600px;">
    </div>

    <div class="item">
      <img src="https://productoraudiovisualbarcelona.com/wp-content/uploads/2018/02/fotografia-eventos-exposiciones-785x510.jpg" alt="New York" style="width: 600px;">
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a>
            </div>
        </div>
    </div>
</template>

<style>
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
<script>
  export default{
    name: 'App',
  }
</script>

<template>
  <div id="app" style="margin: 0%; padding: 0%; background-color: #ffff;" class="d-flex flex-column">

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img src="https://conceptodefinicion.de/wp-content/uploads/2019/06/letras-12.jpg" style="width: 60px;">
    <router-link class="nombreEmpresa" to="/">a Paz  Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="start-50 navbar-nav me-auto mb-2 mb-lg-0 ps-5">
        <li class="nav-item ps-5">
          <router-link aria-current="page" class="nav-link active" to="/galeria">Galeria</router-link>
        </li>
        <li class="nav-item ps-5">
          <router-link aria-current="page" class="nav-link active" to="/Clasificados">Clasificados</router-link>
        </li>
        <li class="nav-item ps-5">
          <router-link aria-current="page" class="nav-link active" to="/contactanos">Contactanos</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  margin: 0 auto;
  padding: 0rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
.nombreEmpresa {
  font-family: 'Courier New', Courier, monospace;
  font-size: 150%;
  text-decoration-line: underline;
  text-decoration-color: #ffff;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    background-color: #ffff;
    display:block;
    place-items:center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

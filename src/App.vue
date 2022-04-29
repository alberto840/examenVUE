<script>
  export default{
    name: 'App',
  }
</script>

<template>
  <nav style ="background-color: #556270;" class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <img src="http://www.ejemplode.com/images/uploads/letras/letra-l.jpg?1490107644727" style="width: 30px;">
    <router-link style="  font-size: 120%; font: bold; font-family: Helvetica;" to="/">a Paz | Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="start-50 navbar-nav me-auto mb-2 mb-lg-0 ps-5">
        <li class="nav-item start-50 ps-1">
          <router-link style="color: #ffff" aria-current="page" class="nav-link active" to="/galeria">Galeria</router-link>
        </li>
        <li class="nav-item start-50 ps-1">
          <router-link style="color: #ffff" aria-current="page" class="nav-link active" to="/RequerimientoCliente">RequerimientoCliente</router-link>
        </li>
        <li class="nav-item start-50 ps-1">
          <router-link style="color: #ffff" aria-current="page" class="nav-link active" to="/contactanos">Contactanos</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>

    <main>
      <router-view></router-view>
    </main>
    
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
  color: rgba(0, 189, 126, 0.795);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    color: aliceblue;
    background-color: hsla(155, 32%, 38%, 0.493);
  }
}

@media (min-width: 1024px) {
  body {
    display:block;
    place-items:center;
    background-color: #ffff;
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

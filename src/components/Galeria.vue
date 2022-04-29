<style>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}
</style>
<template>
<center>
  <div class="container" style="width:200vw; background-color:#4ECDC4; padding:2vw;">
        <div class="col-md-20">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                      <div class=card style="width: 600px">

                        <center><legend class="text-center header" style="color:#4ECDC4;">PUBLICITE SU EMPRESA:</legend></center>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="NOMBRE DE LA EMPRESA" class="form-control">
                            </div>
                        </div>
                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="TIPO DE PRUDUCTO" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="email" name="email" type="text" placeholder="DEPARTAMENTO" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="phone" name="phone" type="text" placeholder="TELF CONTACTO" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:2vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Ingresa su anuncio en este espacio." rows="7"></textarea>
                            </div>
                        </div>
                        <div class="form-group" style="margin:2vw;">
                        <label for="start">Fecha de inicio:</label>

                          <input type="date" id="start" name="trip-start"
                            value="2022-04-29">
                        </div>
                        <div class="form-group" style="margin:2vw;">
                        <label for="start">Fecha de fin:</label>

                          <input type="date" id="start" name="trip-start"
                            value="2022-04-29">
                        </div>
                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                <button id="enviar" class="btn btn-primary btn-lg" style="background-color: #C44D58;" disabled>Enviar</button>
                            </div>
                        </div>
                      </div>
                    </fieldset>
                </form>
            </div>
        </div>
</div>
</center>
</template>
<script type="text/javascript">
function enviar(){
    alert("Se envio el formulario correctamente. Pronto estaremos en contacto contigo");
  }
export default {
    data() {
      return {
        types: [
          'text',
          'number',
          'email',
          'password',
          'search',
          'url',
          'tel',
          'date',
          'time',
          'range',
          'color'
        ]
      }
    }
  };
</script>
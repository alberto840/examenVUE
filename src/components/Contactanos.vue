<style>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}
.body {
    background-color: #ffff;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}
</style>
<template>
<center>
  <div class="container" style="width:200vw; background-color:#C7F464; padding:2vw;">
        <div class="col-md-20">
            <div class="well well-sm">
                <form class="form-horizontal" method="post">
                    <fieldset>
                        <center><legend class="text-center header" style="color:black;">CONTACTANOS</legend></center>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="NOMBRE(S)" class="form-control">
                            </div>
                        </div>
                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="APELLIDO(S)" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="email" name="email" type="text" placeholder="CORREO ELECTRONICO" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:1vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="phone" name="phone" type="text" placeholder="CELULAR" class="form-control">
                            </div>
                        </div>

                        <div class="form-group" style="margin:2vw;">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Ingresa tu mensaje en este espacio. Nos comunicaremos contigo lo mas pronto posible" rows="7"></textarea>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col">
                                <button onclick="myFunction()" class="btn" style="background-color: #ff370f; color: white;" name="crear" disable>Registrar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
</div>
</center>
        <div class="container" style="background-color:#4ECDC4; width: 100%; padding:2vw;">
            <center>
              <h1>Telf: 214124124</h1>
            <h1>Telf: 234525526</h1>
            <h1>Direccion: Los andes numero 500, calle 54</h1>
            <h1>nombre de encargado: Ignacion Muñoz Quispe</h1>
            </center>
        </div>
        <div class="container" style="background-color:#FF6B6B; width: 100%; padding:2vw; ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30172.927342492836!2d-65.25918076931153!3d-19.036639000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8cef38e6c77%3A0xb405926e8bb6321a!2sMercado%20Campesino%20Sucre!5e0!3m2!1ses!2sbo!4v1651118556860!5m2!1ses!2sbo" width="1080" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
</template>
<script type="text/javascript">
function myFunction() {
      alert("¡La cita fue registrada, te estaremos esperando");
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
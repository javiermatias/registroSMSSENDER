exports.devolverHTML = function (user){

return `<!DOCTYPE html>
<html lang="en">
<head>
  <title>Registro</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
 
<div class="container">
  <h2>Descarga SMS SENDER</h2>
  <div class="panel panel-default">
    <div class="panel-heading">Instrucciones</div>
    <div class="panel-body">
    <p>Hola,</p>
 <p>En el Link siguiente puedes descargar el programa : <a href="http://bit.ly/2CzkgTz">SMS SENDER</a> </p>

 <p>Puede que algunos antivirus detecten a este como archivo peligroso, en el caso que te bloquee  el instalador, deberás desactivar el antivirus. </p>

<p>Cuando abras el programa por primera vez, te va a solicitar usuario y contraseña, asegúrate de estar conectado a Internet.</p>

<p>Credenciales: </p>

<p>Usuario: <b>${user}</b>  </p>
<p>Contraseña: <b>${user}</b> </p>          

<p>Luego se activara el sistema, y ya lo puedes usar con normalidad. </p>

<p>La licencia demo dura una semana y puedes usar todas las funcionalidades. </p>

<p>La licencia por PC cuesta  $60 dolares. Es de por vida, y se paga por única vez. Se puede pagar por PayPal o giro por Western Union.</p>

<p>Si tenes alguna duda, con gusto te ayudaremos tanto en instalación como en la capacitación que podríamos coordinar un día mediante Skype o Whatsapp y</p> <p>Teamviewer por asistencia remota...</p>

<p>Nuestro mail de contacto es: programas.smartsoft@gmail.com! </p>

<p>Muchas Gracias por confiar en nosotros! </p>

<p>Saludos,</p>
</div>
  </div>
</div>

</body>
</html>`



}
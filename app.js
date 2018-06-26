// bienvenida y nombre de la trivia//
alert("¡¡¡Bienvenido a Tech-Chimuelo!!!" );
//ingreso de nombre//
var name = prompt("¡¡juega con nosotros!! Ingresa tu Nombre");
//invitacion a jugar al usuario //
var play = prompt("¿ Quieres jugar " + name + "?");

//alertas si la respuesta es si o no//
switch (play) {
  case "no":
  alert("gracias");

    break;
    case "si":
     alert("responde las preguntas");

      break;
  default:

}
//funcion de trivia//
function check() {

  var question1 = document.trivia.question1.value;
  var question2 = document.trivia.question2.value;
  var question3 = document.trivia.question3.value;
  var correct = 0;

   if (question1 == "Peru" ) {
     correct++;
}
     if (question2 == "Mariana Costa Checa") {
       correct++;
}
       if (question3 == "Desarrolladoras Web o Diseñadora UX") {
         correct++;
       }


     var messages = ["¡Excelente!", "Esta mas o menos bien", "Necesitas hacerlo mejor"];
     var pictures = ["img/tenor.gif", "img/mas.gif", "img/debes.gif"];


     var range;

       if (correct < 1) {
         range = 2;
       }

       if (correct > 0 && correct < 3) {
         range = 1;

       }

         if (correct > 2) {
              range = 0;
            }


         
            document.getElementById('after_sumibt').style.visibility = "visible";
            document.getElementById('messages').innerHTML = messages[range];
            document.getElementById('number_correct').innerHTML = "Tienes " + correct + " correcta.";
            document.getElementById('pictures').src = pictures[range];
     }

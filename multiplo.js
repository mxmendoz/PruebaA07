function ingresarNombres(e) {
  e.preventDefault();

  var Nombre = document.getElementById('nombre').value;
  var Edad = document.getElementById('edad').value;
  var Opcion = '<li>' + Nombre + ' tiene ' + Edad + ' años ' + '</li>';
  var Lista = document.getElementById('lista');
  Lista.innerHTML += Opcion;
  document.getElementById('nombre').focus();
}

function esMultiplo(a, b) {
  var respuesta = a % b;
  if (respuesta == 0) return true;
  else return false;
}

function Multiplo(e) {
  e.preventDefault();

  var Nombre = document.getElementById('nombre').value;
  var Edad = document.getElementById('edad').value;
  var N1 = document.getElementById('n1').value;
  var N2 = document.getElementById('n2').value;

  if (esMultiplo(Edad, N1)) {
    var Opcion = '<li>' + Nombre + '</li>';
    var Lista = document.getElementById('lista2');

    Lista.innerHTML += Opcion;
  } else {
    if (esMultiplo(Edad, N2)) {
      var Opcion = '<li>' + Nombre + '</li>';
      var Lista = document.getElementById('lista2');

      Lista.innerHTML += Opcion;
    }
  }
}

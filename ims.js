function operar() {
  var Mt = parseInt(document.getElementById('mt').value);
  var Fc = parseInt(document.getElementById('fc').value);
  var Fa = parseInt(document.getElementById('fa').value);
  var Fd = parseInt(document.getElementById('fd').value);

  const ims = (Mt - (Fa + Fc + Fd)) / Mt;

  document.getElementById('ims').innerHTML = ims.toFixed(2);
}

function limpiar() {
  document.getElementById('formulario').reset();
}

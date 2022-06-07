function operar() {
  var valor1 = parseInt(document.getElementById('a').value);
  var valor2 = parseInt(document.getElementById('b').value);
  var v1 = valor1;
  var v2 = valor2;

  while (valor1 != valor2) {
    if (valor1 > valor2) {
      valor1 = valor1 - valor2;
    } else {
      valor2 = valor2 - valor1;
    }
  }

  const mcd = valor1;
  const mcm = (v1 * v2) / mcd;

  alert('El mcm: ' + mcm);
}

function operar() {
  var valor1 = parseInt(document.getElementById('a').value);
  var valor2 = parseInt(document.getElementById('b').value);
  var v1 = valor1;
  var v2 = valor2;

  while (valor1 != valor2) {
    if (valor1 > valor2) {
      valor1 = valor1 - valor2;
    } else {
      valor2 = valor2 - valor1;
    }
  }

  const mcd = valor1;
  const mcm = (v1 * v2) / mcd;

  document.getElementById('mcm').innerHTML = mcm;
}

function limpiar() {
  document.getElementById('formulario').reset();
}

function handleButtonClick(buttonNumber) {
  const messageElement = document.getElementById('message');
  messageElement.innerText = `Usted ha presionado el botón # ${buttonNumber}`;
  // Llamar a la función Python correspondiente.
}

function handleButtonClick(buttonNumber) {
  // Mostrar mensaje de presión de botón.
  const messageElement = document.getElementById('message');
  messageElement.innerText = `Usted ha presionado el Botón ${buttonNumber}`;

  // Ocultar el mensaje después de 3 segundos
  clearTimeout(window.messageTimeout);
  window.messageTimeout = setTimeout(() => {
      messageElement.innerText = 'Presione un Botón para enviar el código';
  }, 1000);
}

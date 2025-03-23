// Function to generate a random character
const caractereRandom = () => {
  // Rango de códigos ASCII que incluye símbolos + letras
  const caracteres = [
    ...Array.from({length: 15}, (_, i) => 33 + i),   // Símbolos: !"#$%&'()*+,-./
    ...Array.from({length: 7}, (_, i) => 58 + i),     // Símbolos: :;<=>?@
    ...Array.from({length: 6}, (_, i) => 91 + i),     // Símbolos: [\]^_`
    ...Array.from({length: 4}, (_, i) => 123 + i),    // Símbolos: {|}~
    ...Array.from({length: 26}, (_, i) => 65 + i),    // Letras mayúsculas: A-Z
    ...Array.from({length: 26}, (_, i) => 97 + i)     // Letras minúsculas: a-z
  ];
  
  const codigo = caracteres[Math.floor(Math.random() * caracteres.length)];
  return String.fromCharCode(codigo);
};

function numberNew(number) {
  const ancho = 8;
  const alto = 5;
  let numerofinal; 
  switch (number) {
      case 0:
          /**
          * 
          * 00000000   
          * 00----00  
          * 00    00  fila 1 a 3, columna 2 a 5
          * 00----00 
          * 00000000 */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 1:
          /*       00   
           *       00  fila 0 a 4, columna 0 a 6
           *       00 
           *       00 
           *       00 
           * */
          numerofinal = `       ${caractereRandom()}${caractereRandom()}\n       ${caractereRandom()}${caractereRandom()}\n       ${caractereRandom()}${caractereRandom()}\n       ${caractereRandom()}${caractereRandom()}\n       ${caractereRandom()}${caractereRandom()}`;
          break;
      case 2:
          /**
          * 00000000   
          *       00  fila 1 y 3, columna 0 a 6 y 2 a 
          * 00000000 
          * 00       
          * 00000000 
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}      \n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 3:
          /**
          * 00000000   
          *       00  
          * 00000000 
          *       00 
          * 00000000 
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 4:
          /**
          * 00    00   
          * 00    00  
          * 00000000 
          *       00 
          *       00 
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}`;
          break;
      case 5:
          /**
          * 00000000   
          * 00        
          * 00000000 
          *       00 
          * 00000000
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}      \n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 6:
          /**
          * 00000000   
          * 00     
          * 00000000 
          * 00    00 
          * 00000000
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}       \n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 7:
          /**
          * 00000000   
          *       00  
          *       00 
          *       00 
          *       00  
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}`;
          break;
      case 8:
          /**
          * 00000000   
          * 00    00  
          * 00000000 
          * 00    00 
          * 00000000 
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}`;
          break;
      case 9:
          /**
          * 00000000   
          * 00    00  
          * 00000000 
          *       00 
          *       00 
          */
          numerofinal = `${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}    ${caractereRandom()}${caractereRandom()}\n${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}\n      ${caractereRandom()}${caractereRandom()}`;
          break;
      default:
          numerofinal = "";
          break;
  }

  return numerofinal;
}

function analogoNumeros(number) {
  const ancho = 8;
  const alto = 5;
  const numeroDigitales = [];
  
  if (number < 10) {
      numeroDigitales.push(numberNew(0));
      numeroDigitales.push(numberNew(number));
  } else {
      let aux = Math.floor(number / 10); 
      numeroDigitales.push(numberNew(aux));
      aux = number % 10;
      numeroDigitales.push(numberNew(aux));
  }

  // Unir los dos dígitos en una sola cadena combinando las líneas correspondientes
  const lines1 = numeroDigitales[0].split('\n');
  const lines2 = numeroDigitales[1].split('\n');
  
  let result = '';
  for (let i = 0; i < lines1.length; i++) {
    result += lines1[i] + '  ' + lines2[i] + '\n';
  }
  
  return result;
}

function actualizarHora() {
  const ahora = new Date();
  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  const formatoHoras = analogoNumeros(horas);
  const formatoMinutos = analogoNumeros(minutos);
  const formatoSegundos = analogoNumeros(segundos);

  const horaPersonalizada = `${formatoHoras}\n:\n${formatoMinutos}\n:\n${formatoSegundos}`;

  // Obtiene el elemento y verifica si no es null
  const horaElemento = document.getElementById("hora");
  if (horaElemento) {
    horaElemento.innerText = horaPersonalizada;
  }
}

// Actualiza la hora cada segundo
// setInterval(actualizarHora, 1000);
// actualizarHora();

export { caractereRandom, actualizarHora, analogoNumeros };
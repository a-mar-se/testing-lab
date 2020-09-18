function fizzBuzz(numero) {
  // for (let i = 0; i < 16; i++) {
  // console.log('yi');
  let message = '';
  if (numero % 3 === 0) {
    message = message + 'fizz';
  }

  if (numero % 5 === 0) {
    message = message + 'buzz';
  }

  return message;
}

//const fizzBuzz = () => { };

module.exports = fizzBuzz;

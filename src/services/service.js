class ServicoExercicio {

    Somar(num1, num2){
      if(isNaN(num1) || isNaN(num2) || !num2 || !num1){
        throw new Error('somente numeros')
      }
      return num1 + num2;
    }

    Subtrair(num1, num2){
      if(isNaN(num1) || isNaN(num2)){
        throw new Error('somente numeros')
      }5
      return num1 - num2;
    }

    Multiplicar(num1, num2){
      if(isNaN(num1) || isNaN(num2)){
        throw new Error('somente numeros')
      }
      return num1 * num2;
    }

    Dividir(num1, num2){
      if(isNaN(num1) || isNaN(num2)){
        throw new Error('somente numeros')
      }
      return num1 / num2;
    }

}

module.exports = ServicoExercicio;
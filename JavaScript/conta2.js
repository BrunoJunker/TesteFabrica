function calcular(valor1,valor2,oper) {
    if (oper == "somar") {
       var res = parseInt(valor1) + parseInt(valor2);
    } else {
       if (oper == "subtrair") {
          var res = valor1-valor2;
       } else {
          if (oper == "multiplicar") {
             var res = valor1*valor2;
          } else {
            if (oper == "dividir") {
                var res = valor1/valor2;
             } else {
                 if (oper == "exponensiar") {
                var res = Math.pow(valor1,valor2);
          }
       }
    }
    return res;
 }  

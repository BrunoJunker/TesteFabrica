function calcular(valor1,valor2,oper)
{ 
    if (oper == "somar") {
       return Number(valor1)+Number(valor2);
    } else {
       if (oper == "subtrair") {
          return valor1-valor2;
       } else {
          if (oper == "multiplicar") {
              return valor1*valor2;
          } else {
            if (oper == "dividir") {
                return valor1/valor2;
             } else {
                 if (oper == "exponensiar") {
                return Math.pow(valor1,valor2);
          }
       }
    }
 }}} 

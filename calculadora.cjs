    function isPar(numero){
        return numero % 2 ==0;
    }

    function somar (n1,n2){
        return n1+n2;
    }
    console.log("   ");
    console.log("*******************CALCULADORA*******************");
    console.log("   ");
    console.log (`O resultado da soma é: ${somar(2,12)}`);
    console.log ((isPar(somar(2,12)))?"é par":"É impar");
    console.log("   ");
    console.log("=================================================");

    function subtrair (n1,n2){
        return n1-n2;
    }

    console.log("   ");
    console.log (`O resultado da subtração é: ${subtrair(7,2)}`);
    console.log ((isPar(subtrair(7,2)))?"é par":"É impar");
    console.log("   ");
    console.log("=================================================");

    function dividir (n1,n2){
        return n1/n2;
    }

    console.log("   ");
    console.log (`O resultado da divisão é: ${dividir(42,2)}`);
    console.log ((isPar(dividir(42,2)))?"é par":"É impar");
    console.log("   ");
    console.log("=================================================");

    function multiplicar (n1,n2){
        return n1*n2;
    }
    console.log("   ");
    console.log ( `O resultado da multiplicação é: ${multiplicar(13,2)}`);
    console.log ((isPar(multiplicar(13,2)))?"é par":"É impar");
    console.log("   ");
    console.log("=================================================");
// las variables son una caracteristica de cuaquier lenguaje de programacion 

// var , let y const son palabras reservadas

var producto = 'monitor de 24 pulgadas ';
console.log(producto);

//  las variables se pueden reasignar

producto = 'monitor de 19 pulgadas';
console.log(producto);

// Java Script es un lenguaje de tipo dinamico, no se especifica tipo de dato

producto = 20;
console.log(producto);

// se pueden inicializar sin valor y asignarlo despues
var disponible;
// aqui estoy inicializando la variable pero no le estoy dando un valor
disponible = true;
console.log(disponible);

// inicializar multiples variables
var categoria = 'portatil',
    marca = 'famosas',
    año = 2023;

    // Importante las variables tambien tienen sus reglas:

    // -una variable puede contener letras, guiones bajo (_) o numeros pero las variables No pueden inicializar con numeros
    // -existen diferentes estilos para nombrar las variables con mas de un palabra ejemplo

// camelcase
    var nombreProducto;

   // snakecase
    var nombre_producto_categoria;

      //pascalcase
      var Producto;  
      
      // *** las mas utilizada es camelcase usa esta ya ques es recomendada por JS

      //ahora crearemos varibles con la palabra reservada let

      let formas = 'circulo';

      // te permite reasignar el valor 

      formas = 'cuadrado';
      console.log(formas);

      formas = 777;
      console.log(formas);

 // crear variables con const
 // esta variable tiene una diferencia que su valor no es reasignable ya que da eror .

 // las varibles con const siempre deben inicilizarse con un valor 

 const precio = 650;
 console.log(precio);










 











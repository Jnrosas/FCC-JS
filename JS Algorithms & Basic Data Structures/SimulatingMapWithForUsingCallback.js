// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Cambia solo el código debajo de esta línea
  // Reemplazamos el metodo .map() con un for y una funcion callback
  
  for (let i=0; i<s.length; i++) {
    newArray.push(callback(s[i]));
  }
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);
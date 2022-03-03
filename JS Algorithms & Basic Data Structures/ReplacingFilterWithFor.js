// La variable global
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Cambia solo el código debajo de esta línea
  const newArray = [];
  for (let i=0; i<s.length; i++) {
    if (callback(s[i])) {
      newArray.push(s[i]);
    }
  };
  // Cambia solo el código encima de esta línea
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s);
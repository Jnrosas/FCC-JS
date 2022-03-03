function alphabeticalOrder(arr) {
    // Only change code below this line
    // al comparar, si da <0 a va primero, si da >0 b va primero, si =0 sin cambios
    return arr.sort((a, b) => a === b? 0 : a < b? -1 : 1)
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
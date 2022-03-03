function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
       
    }
    return newArr;
  }
  //Dividir el arr en subarr de tamanio size.
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
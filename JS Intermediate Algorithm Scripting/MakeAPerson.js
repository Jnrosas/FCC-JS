const Person = function(firstAndLast) {
    let fullName = firstAndLast; 
   
    this.getFirstName = function() {return fullName.split(" ")[0]};
    this.getLastName = function() {return fullName.split(" ")[1]};
    this.getFullName = function() {return fullName};
    this.setFirstName = function(value) {
      fullName = value + " " + fullName.split(" ")[1]};
    this.setLastName = function(value) {
      fullName = fullName.split(" ")[0] + " " + value};
    this.setFullName = function(value) {fullName = value};
    
    return firstAndLast;
  };
  const bob = new Person('Bob Ross');
  bob.setFullName("Haskell Curry");
  console.log(bob.getFullName());
  
  
  
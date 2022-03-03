// Transform a random string to spinal tap case (lower case split by a dash).

function spinalCase(str) {
    return str.split(/\s+|_|(?=[A-Z])/).join("-").toLowerCase();
   }
   
   console.log(spinalCase("thisIsSpinalTap"));
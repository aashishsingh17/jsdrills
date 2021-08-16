
//multiping 2 on every elements of array
function map(element, cb) {
          for (let i = 0; i < element.length; i++) { 
              cb(element[i]);
          }
      }
      function cb(element) {
          console.log(2*element); 
      }
      export{map,cb};
     
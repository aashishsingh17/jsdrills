function reduce(element,cb,startingValue) {
          var var1=0;
          for (let i = startingValue; i < element.length; i++) { 
                   
              cb(var1=var1+element[i]);
              //console.log(var1);
          }
          return var1;
      }
  function cb(){}
      export{reduce,cb};
     
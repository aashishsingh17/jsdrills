function each(element, cb) {
      for (let i = 0; i < element.length; i++) { 
          cb(element[i]);
      }
  }
  function cb(element) {
      console.log(element); 
  }
  export{each,cb};
 
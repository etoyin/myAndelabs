
var dataTypes = function (x){
  
  y = null; z = (typeof x);
  //if argument is null or undefined return 'no value'
  if (x == y || z === 'undefined'){
    return 'no value';
  }
  // if true return true, if false return false 
  if (z === 'boolean'){
    return x;
  }
  // an if...else if statement nested in an if statement
  if (z === 'number'){
  
  if (x < 100){
    return 'less than 100';
  }
    else if (x > 100){
      return 'more than 100';
    }
    else{
      return 'equal to 100';
    }
  }
  //return the 3rd index 4 an array or undefined if it doesn't exist.
  if (z === 'object'){
    if (x.length > 2){
      return x[2];
    } else {
      return undefined;
    }
    
  }
   
  if (z === 'string'){
    
    return x.length;
    }
  if (z === 'function'){
  return 'called callback';
  }
    };
    
    
  

  

/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/
function destroyer(arr) {
  for (var i=1; i<arguments.length; i++){
    var pos = arguments[0].indexOf(arguments[i]);
    while ( pos != -1 ){
      arguments[0].splice(pos, 1);
      pos = arguments[0].indexOf(arguments[i]);
    }
  }
  return arguments[0];
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

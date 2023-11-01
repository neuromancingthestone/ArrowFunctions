function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
/* Write an ES2015 Version */
let dbl = [1,2,4,5,6,7];
dbl.map((num) => num * 2);
/////////////////////////////

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  function squareAndFindEvens2(numbers){
    var squares = numbers.map((num) => num ** 2);
    var evens = squares.filter((square) => square % 2 === 0);
 
    return evens;
  }

[1,2,5,8,15].map(num => num ** 2).filter(sq => sq % 2 === 0);


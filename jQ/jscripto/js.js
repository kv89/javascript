var x = 10;
var x1 = '10';
var x2 = '10s';
var x3 = '10'; //  divide by 0

console.log( x % 0 );
console.log( x / 0 );

var a = 10 + 2 + 'Result';
var b = 'Result' + 10 + 2;

console.log( a );
console.log( b );

console.log( typeof 'a' );
console.log( typeof '' );
console.log( typeof 10 );
console.log( typeof true );
console.log( typeof undefined );

console.log( typeof null );
console.log( typeof {} );

console.log( null == {} );
console.log( null === {} );

console.log( null == undefined );
console.log( null === undefined );

// console.log( null.a );// errors
console.log( {a : 'as'}.a ); 
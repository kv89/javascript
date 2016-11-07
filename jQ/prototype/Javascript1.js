var a = function (){a: 2};

console.log('a ', a);

var b = Object.create( a ); 

console.log('b.a', b);

a.prototype.parent = 'super parent'

console.log('Prototype of \'a\' : ', Object.getPrototypeOf( a ).parent);
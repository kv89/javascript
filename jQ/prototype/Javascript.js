var obj1 = {
    id: 1,
    name: 'Vishal'
};

// console.log('Obj 1 : \n\t', obj1);

// var obj2 = obj1;

// console.log('\nObj 2 no change : \n\t', obj2);

// obj2.id = 2;

// console.log('\nObj 1 : change obj2 : \n\t', obj1);
// console.log('\nObj 2 : change obj2 : \n\t', obj2);

// obj2 = {};

// console.log('\nObj 2 : change obj2 {} : \n\t', obj2);
// console.log('\nObj 1 : change obj2 {} : \n\t', obj1);
// ----------------------------

var obj3 =  Object.create( obj1 );
console.log( 'obj3 ', obj3);
console.log( 'obj3.id ', obj3.id );
console.log( 'obj1.id : ', obj1.id );
obj3.id = 2;
console.log( '\n\nobj3.id : ', obj3.id );
console.log( 'obj1.id : ', obj1.id );
//

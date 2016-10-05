'use strict';
var funs = [];
// using var:
for(var i=0; i<10; i++){// var does hoisting:
    funs.push(function(){
        console.log( i );
    });
}
// -------------------------------------------------------

var funsJ = [];
// fix for var 
for(var j = 0; j < 10; j++){
    funsJ.push(function( num ){
        return function(){
            console.log( num );
        };
    }( j ));
}

// -------------------------------------------------------
var funsL = [];
// now using let:
for(let i=0; i<10; i++){// let doesn't gets hoisted:
    funsL.push(function(){
        console.log( i );
    });
}

// -------------------------------------------------------
console.log('using \'var\': ');
funs.forEach(function( f ){
    f();
})

// -------------------------------------------------------
console.log('using \'var - fixed\':');
funsJ.forEach(function( f ){
    f();
});

// -------------------------------------------------------
console.log('using \'let\': ');
funsL.forEach(function( f ){
    f();
})
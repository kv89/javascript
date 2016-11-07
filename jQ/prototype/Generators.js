function* fun_1(){
    console.log('fun_1: just got up :', new Date());
}

function* func_2(){ 
    console.log('-------->>>>>  fun_2: just got up :', new Date());
}

function run( b ){
        console.log('b - ', b);
}

for(var i = 0; i < 1000; i++){
    setTimeout(function( cnt ){
        return function(){
            console.log('cnt ---> ', cnt, ' -- ', new Date());
        }
    }( i ), 1000* i);
}
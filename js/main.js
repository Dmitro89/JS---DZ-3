
function kvad (arrg, numb){
    var mass = [];
        for (var i=0; i<numb.length; ++i){
            mass.push (square (numb[i]));
        }      
    return mass
}
 
function square(x) { return x * x; }
document.write (kvad (square, [1,2,3,4,5,6,7,8,9,10]));

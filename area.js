//by passing parameter
//function myFunc( x=2){
  //  console.log("the radius is:",x);
    //let area = 0;
   // area = 2 * 3.14 * x;
    //console.log("area of triangle is:",area);
//}

//parameter and return value

function myFunc(){
x = parseInt(prompt("enter the breadth:"));
console.log("The breadth is:",x);
y = parseInt(prompt("enter the height:"));
console.log("The height is:",y);

res = area1(x , y);
console.log("The area is:",res);
}
function area1(x , y)
{
    let area = (1/2) * x * y;
    return area;
}



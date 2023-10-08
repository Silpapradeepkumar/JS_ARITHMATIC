
function myFunction() {
    let num1 = prompt('Enter the first  number:');
    let x = parseInt(num1);
    let num2 = prompt('Enter the second  number:');
    let y = parseInt(num2);
    let num3 = prompt('Enter the third  number:');
    let z = parseInt(num3);
    
    if(x > y && x > z){
        console.log('no1 is greater')
    }
        else if (y > x && y > z){
            console.log('no2 is greater')
        }
        else {
            console.log('no3 is greater')
        }
    }



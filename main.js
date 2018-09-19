/* initial variables */
let num1, num2;
let i, j, arr;
let arr1, arr2;
let vect1, vect2;
let fin1, fin2, sum, add, extra, rest, tens;
let btn = document.getElementsByClassName("submit")[0];
let res = document.getElementsByClassName("result")[0];

/* action happening here */
btn.addEventListener("click", onSubmit);

/* define utility functions here */
function onSubmit() {
    num1 = getValue('number1');
    num2 = getValue('number2');
    console.log('numbers', num1, num2);

    multiply(num1, num2);
}


function getValue(item) {
  return document.getElementsByClassName(item)[0].value;
}

function setArr(number) {
  arr = [];

  for(i = 0; i < number.length; i++) {
    arr[i] = number.charAt(i);
  }

  return arr;
}

function multiply(number1, number2) {

  vect1 = [];
  extra = 0;
  sum = 0;
  arr1 = setArr(num1);
  arr2 = setArr(num2);

  for(i = arr2.length - 1; i > -1; i--) {
    vect2 = [];

    for(j = arr1.length - 1; j > -1; j--) {

      if (extra !== 0) {
        add = arr2[i] * arr1[j] + extra;
        extra = 0;
      }  else {
        add = arr2[i] * arr1[j];
      }
      console.log('add', add);

      if ( add < 10) {
        vect2.push(add);
      } else {

        if ( j == 0) {
          vect2.push(add);
        } else  {
          rest = add % 10;
          vect2.push(rest);
  
          tens = parseInt( add / 10 );
          extra = tens;
        }

      }
      console.log('vect2', vect2)
    }


    vect1[i] = vect2;
  }

  console.log(vect1);

  for( i = vect1.length - 1; i > -1; i--) {
    fin1 = parseInt( vect1[i].reverse().join().replace(/,/g,'') );
    if ( i < vect1.length - 1 ) {
      fin1 = fin1 * Math.pow(10, vect1.length - i - 1);
    }
    console.log('fin1', fin1);
    sum += fin1;
    console.log('final', sum);
  }
 



  res.innerHTML =  sum;
}
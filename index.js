/* function fibonacci(number) {
    if (number <= 2) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(8)); */

/*  function addCount (index) {
    index++;
    console.log('index', index);

    if(index >= 5){
        return;
    }

    return addCount(index)
}

console.log(addCount(0));  */

/* function reverseArray(arr){
    if(arr.length === 0) return [];
    return [arr.pop()].concat(reverseArray(arr));
}

console.log(reverseArray([1,2,3,4,5])); */

/* function outerFunction(message) {
    let localVariable = message;
    return function(){
        console.log(localVariable);
    }
}

const some = outerFunction('hello');
some();
 */ // * замыкающая функция;

/*  function createCounter(number) {
    let count = number;
    return{
        increment: function(){
            count++
        },
        getCount: function(){
            return count;
        }
    }
 }

 let counter = createCounter(10);
 counter.increment();
 console.log(counter.getCount()); */
 // * замыкающая функция 2

 const inputElement = document.querySelector('#display');

 function addValue(value) {
    inputElement.value += value;
 }

 function calculate () {
    inputElement.value = eval(inputElement.value);
 }

 function clearCalc(){
    inputElement.value = '';
}
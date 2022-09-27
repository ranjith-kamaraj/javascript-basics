let car = {
    color: 'red',
    wheel: 4,
    name: 'Tata',
    engine: {
        model: 2012
    }
};

//Shallow Copy  - A shallow copy means that certain (sub-)values are still connected to the original variable. 
//let copyCar = car;
// let copyCar = {...car};
// let copyCar = Object.assign({}, car);


//Deep Copy - A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
//Below logic won't work for nested values we can refer the lodash for the same

let copyCar = JSON.parse(JSON.stringify(car));

copyCar.engine.model = '2022';
console.log('Car Model: ' + car.engine.model);
console.log('Copy Car Model: ' + copyCar.engine.model);

//Variable will work differ
let name = 'Ranjith';
let rename = name;

name = 'Joe';
console.log('Name: '+name);
console.log('Rename:'+ rename);

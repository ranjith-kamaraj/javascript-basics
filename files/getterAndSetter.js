//https://www.programiz.com/javascript/getter-setter

/*Data Property 

Here's an example of data property that we have been using in the previous tutorials
*/

const student = {

    // data property
    firstName: 'Monica'
};

/*
Accessor Property: 

In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
get - to define a getter method to get the property value
set - to define a setter method to set the property value
*/

let car = {
    name: 'Tata',
    
    get getName(){
        return this.name;
    },
    
    set setName(newName){
        this.name = newName;
    }
};

console.log('Get Name: ' + car.getName);

car.setName = 'Mahindra';
console.log('Set Name: ' + car.getName);
console.log('Obj Name: ' + car.name);
console.log('Obj: ' + JSON.stringify(car));




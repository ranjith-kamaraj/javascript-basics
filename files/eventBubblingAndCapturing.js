/*
Event bubbling and capturing are two ways of event propagation in the HTML DOM API, 
when an event occurs in an element inside another element, and both elements have 
registered a handle for that event. The event propagation mode determines in which 
order the elements receive the event.

With bubbling, the event is first captured and handled by the innermost element 
and then propagated to outer elements.

With capturing, the event is first captured by the outermost element and 
propagated to the inner elements. */

//Capturing to Bubbling

document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log('Grand Parent Clicked!')
    }, true); //Use Capture (Trickling) --> Capturing

document.querySelector('#parent')
    .addEventListener('click', () => {
        console.log('Parent Clicked!')
    }, false);//Bubbling

document.querySelector("#child")
    .addEventListener('click', () => {
        console.log('Child Clicked!')
    }, false);//Bubbling


/* Stop Propagation  - where stop propagation for others*/
document.querySelector("#child")
    .addEventListener('click', (e) => {
        console.log('Child Clicked!')
        e.stopPropagation();
    }, false);//Bubbling










/*<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>JavaScript Basics</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'> -->
    <!-- <script src='index.js'></script> -->
    <style>
       div {
           min-width: 200px;
           min-height: 200px;
           padding: 40px;
           border: 2px solid red;
       }
    </style>
</head>
<body>
    <h1>JavaScript Basics</h1>
    <div id="grandparent">
        <div id="parent">
            <div id="child"></div>
        </div>
    </div>
    <script src='index.js'></script>
</body>
</html></ht>*/
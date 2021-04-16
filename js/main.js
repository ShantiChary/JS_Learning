// console.log('heyo');
// console.error('error');
// console.warn('warning');

//var-global, let, const
// let age=30;
// age=50;
// console.log(age);

//Data types: String, Number, Boolean, Null, Undefined, Symbol
// const fName='Shanti';
// const age=49;
// const isMe =true;
// const rating=4.5;
// const x= null;
// const y=undefined;
// let z;

// console.log(typeof(z));

//Concatenation
//Template Strings - back ticks
// const hello=(`I am ${fName} and I am ${age} years old.`);
// console.log(hello);

//length property
// const s='dog, cat, pig';
// console.log(s.length);
// console.log(s.toUpperCase());
// // console.log(s.substring(2,6));
// console.log(s.split(','));

//Arrays
// const numbers= new Array(1,2,3,4,5);
// const animals=['dog', 'cat', 'pig'];
// console.log(animals);
// console.log(animals[1]);
// animals.push('lion');

// animals.pop();
// animals.unshift('lion');
// console.log(animals);
// console.log(Array.isArray(animals));
// console.log(animals.indexOf('pig'));

//Object literals

// const person={
//     fName:"Shanti",
//     lName:"Chary",
//     age:50,
//     hobbies:['music','dance','art'],
//     address:{
//         street:'xyz',
//         city:'LA',
//         state:'CA'
//     }
// }

// let tempIndex=person.hobbies.indexOf('dance');
// console.log(person.address.city, person.hobbies[tempIndex]);

// person.country='USA';
// console.log(person.country);

// const todos = [
//     {
//         id:1,
//         text:'chore 1',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'chore 2',
//         isCompleted:false
//     },
//     {
//         id:3,
//         text:'chore 3',
//         isCompleted:true
//     }
// ];

// console.log(todos[1].text);

// const JSONString=JSON.stringify(todos);
// console.log(JSONString);

// for (i=0; i<todos.length; i++) {
//     console.log(todos[i].text);
// }

// for (item of todos) {
//     console.log(item.text);
// }

//looping through an array

// todos.forEach(element => console.log(element.id));

// todos.forEach(function(todo){
//     console.log(todo.id);
// })

//map vs forEach

// todonew=[];

// todos.forEach(function(item){
//     todonew.push(item.text);
// })
// console.log(todonew);

// const todonew = todos.map(function(todo){
//     return(todo);
// }).filter(function(todo){
//     return todo.id;
// })


// console.log(todonew);

//functions
// function addNums(num1=2, num2=3) {
//     return(num1+num2);
// }

// let x=addNums(13,12);
// console.log(x);

function changeHeaderColor(colorX) {
    document.getElementById('main-header').innerHTML="Yes";
    document.getElementById('main-header').style.color=colorX;
}

function hideHeaderH1() {
    document.getElementById('main-header').style.visibility="hidden";
}

function showHeaderH1() {
    document.getElementById('main-header').style.visibility="visible";
}

// $(document).ready(function() {
//     $('#main-header').css("color","orange");
// });

// $(document).ready(function() {
//     prompt('whats up?');
// });

// $(function() {
//     alert('hey');
// });

// $(document).ready(function(){

//     $('#addPText').click(function() {
//         $('p').text('I am Shanti');
//         $('p').css("color", "white");
//         $('#addPText').text('Added');
//     })

//     $('#hideHeaderButton').click(function(){
//         if($('#hideHeaderButton').text("Hide Header")) {
//             $('#main-header').css("display", "none");
//             $('#hideHeaderButton').text("Header gone");
//         }          
//     });

//     // $('#hideHeaderButton').click(function(){
//     //     if($('#hideHeaderButton').text("Header gone")) {
//     //         $('#main-header').css("display", "block");
//     //         $('#hideHeaderButton').text("Hide Header");  
//     //     }
//     // }

//     $('#headerButton').click(function() {
//         $('body').css("background-color", "purple");
//         $('#main-header').css("color", "yellow");
//         $(this).text("Color changed");
//     })
// });

// $(function() {
//     alert('hello');
// })

$(document).ready(function() {
    $('#addPText').click(function() {
        $('p').text('Yoohoo');
        $('#addPText').text('Text added');
    })

    // $('p').click(function() {
    //     $(this).slideUp();
    // })

    $('p').dblclick(function() {
        $(this).css("display", "none");
    })

    // $('#headerButton').hover(function() {
    //     $(this).css("background", "red");
    //     $(this).css("color", "white");
    // })

    // $('#headerButton').hover(function() {
    //     $(this).addClass("highlight");
    // })

    $('#headerButton').mouseenter(function() {
        $(this).css("background", "red");
        $(this).css("color", "white");
    })

    $('#headerButton').mouseleave(function() {
        $(this).css("background", "green");
        $(this).css("color", "yellow");
    })

    $('#toggleButton').click(function() {
        $('p').toggle();
    })
});


//To clear input feild the moment we click on it
// function clearInput() {
//     let getValue = document.getElementById("principal");
//     if (getValue.value != "") {
//         getValue.value = "";
//     }
// }

// Can use also 'change' for EventListener

const range = document.querySelector('#rate');
range.addEventListener('input', (event) => {
    const update = document.getElementById('rate_val');
    update.innerText = `${event.target.value}%`
})



function compute() {
    let principal = document.querySelector('#principal').value;
    let rate = document.querySelector('#rate').value;

    // problems with defining new 'year' variable, used 'years' instead---output full year
    let years = document.querySelector('#years').value;
    years = new Date().getFullYear() + parseInt(years);

    //Input value conditional, focus on input and reset function
    let form = document.querySelector('#principal')
    if (form.value <= 0) {
    alert('Please enter a positive number!'); 
    form.focus();
    return resetInput()
    
        }
        else {
    
    
    // Interest rate calculation
    let interest = (principal * years * rate) / 100;

    let button = document.querySelector('button');
    button.addEventListener('click', function () {
        let result = document.querySelector("#result");

    });

    //line break in template literal didn`t work, find better way to write this code

    return document.getElementById("result").innerHTML = "If you deposit <mark> " + principal + " </mark>,\<br\>at an interest rate of <mark>" + rate + "%</mark>\<br\>You will receive an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + years + "</mark>\<br\>"

    }
  }

// Separate function to reset input feild to be empty again
let resetInput = () =>{
   return principal.value=""
}

//  return result.textContent=
//     `If you deposit ${principal},
//     at an interest rate of ${rate}%,
//     you will receive an amount of ${interest}, 
//     in the year of ${years}`
    
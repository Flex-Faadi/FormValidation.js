let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let car = document.getElementById('car');
let address = document.getElementById('address');
let carPickup = document.getElementById('carPickup');
let carDropoff = document.getElementById('carDropoff');
let comments = document.getElementById('comments');
let validUser=false;
let validPhone=false;
let validEmail=false;


name.addEventListener("blur", () => {
    let reg = /^([a-zA-Z])([0-9a-zA-Z]){3,10}$/
    let a = name.value;
    if (reg.test(a)) {
        console.log("matched")
        name.classList.add('is-valid')
        name.classList.remove('is-invalid')
        validUser=true;
    }
    else {
        console.log("Does not match")
        name.classList.add('is-invalid')
        validUser=false;
    }


})
email.addEventListener("blur", () => {
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){1,5}$/
    let a = email.value;
    if (reg.test(a)) {
        console.log("matched")
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
        validEmail=true;
    }
    else {
        console.log("Does not match")
        email.classList.add('is-invalid')
        validEmail=false;
    }
})
phone.addEventListener("blur", () => {
    let reg = /^([0-9]){11}$/
    let a = phone.value;
    if (reg.test(a)) {
        console.log("matched")
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
        validPhone=true;
    }
    else {
        console.log("Does not match")
        phone.classList.add('is-invalid')
        validPhone=false;
    }
})


let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click",(e)=>{
    console.log("click on submitted")
    e.preventDefault();

    if(validEmail && validPhone && validUser){
        console.log("Successfully submitted")
        let success=document.getElementById('success')
        success.classList.add('show')
        success.style.display='block'
        failure.style.display='none'
    }else{
        console.log("not submitted")
        let failure=document.getElementById('failure')
        failure.classList.add('show')
        success.style.display='none'
        failure.style.display='block'
    }
    let obj={
        Name:name.value,
        Email:email.value,
        Comment:comments.value,
        Car:car.value,
        Address:address.value,
        Car_Pickup:carPickup.value,
        Car_Dropoff:carDropoff.value,
        Phone:JSON.parse(JSON.stringify(phone.value))
    }
    console.log(obj)
})

const form = document.getElementById("form")
const fullName = document.getElementById("fullname")
const email = document.getElementById("email")
const phone  = document.getElementById("phonenumber")
const error = document.getElementsByClassName('error')

form.addEventListener("submit",(e)=>{
     
    e.preventDefault()

    engine(fullName, 0, 'fullname cannot be blank')
    engine(email, 1, 'email cannot be blank')
    engine(phone, 2, ' phone number cannot be blank')

})

const engine = (id, serial, message)=>{
    
     if(id.value.trim()===""){
         
        error[serial].innerHTML = message
        id.style.border = '2px solid red'
     }
     else{
         error[serial].innerHTML = ''
         id.style.border = '2px solid green'
     }
}
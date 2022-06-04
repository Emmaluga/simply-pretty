 // nav 
  
const nav = document.getElementById('nav')
const brand= document.getElementById('brand')
const navlink = document.getElementById('navlink')
const navlink1 = document.getElementById('navlink1')
const navlink2 = document.getElementById('navlink2')
const navlink3 = document.getElementById('navlink3')
const navlink4 = document.getElementById('navlink4')
const navlink5 = document.getElementById('navlink5')
const dropdown1 = document.getElementById('dropdown1')
const dropdown2 = document.getElementById('dropdown2')
const dropdown3 = document.getElementById('dropdown3')
const dropdown4 = document.getElementById('dropdown4')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')


const star1 = document.getElementById('star1')
const star2 = document.getElementById('star2')
const star3 = document.getElementById('star3')
//  const star4 = document.getElementById('star4')
//  const star5 = document.getElementById('star5')
//  const star6 = document.getElementById('star6')



window.addEventListener('scroll',()=>{

   if(window.pageYOffset>100){

       nav.style.background = 'white'
       brand.style.color = 'purple'
       navlink.style.color = 'purple'
       navlink1.style.color = 'purple'
       navlink2.style.color = 'purple'
       navlink3.style.color = 'purple'
       navlink4.style.color = 'purple'
       navlink5.style.color = 'purple'
       dropdown1.style.color = 'purple'
       dropdown2.style.color = 'purple'
       dropdown3.style.color = 'purple'
       dropdown4.style.color = 'purple'
       button1.style.background = 'purple'
       button2.style.background = 'purple'
       button3.style.background = 'purple'

       star1.style.color = 'purple'
       star2.style.color = 'purple'
       star3.style.color = 'purple'
       // star4.style.color = 'purple'
       // star5.style.color = 'purple'
       // star6.style.color = 'purple'
     

   }

   else{
       nav.style.background = 'transparent'
       brand.style.color = 'black'
       navlink.style.color = 'black'
       navlink1.style.color = 'black'
       navlink2.style.color = 'black'
       navlink3.style.color = 'black'
       navlink4.style.color = 'black'
       navlink5.style.color = 'black'
       dropdown1.style.color = 'black'
       dropdown2.style.color = 'black'
       dropdown3.style.color = 'black'
       dropdown4.style.color = 'black'
       button1.style.background = 'black'
       button2.style.background = 'black'
       button3.style.background = 'black'
      
      
    
     
     
   
       star1.style.color = 'black'
       star2.style.color = 'black'
       star3.style.color = 'black'
       // star4.style.color = 'black'
       // star5.style.color = 'black'
       // star6.style.color = 'black'

      
       }

    });

  
  
  //  sign-up.html      
const form = document.getElementById('form')
  const firstname = document.getElementById('firstname')
  const lastname = document.getElementById('lastname')
  const email = document.getElementById('email')
  const password1 = document.getElementById('password1')
  const password2 = document.getElementById('password2')
  const error = document.getElementsByClassName('error')

  form.addEventListener('submit',(e)=>{
      e.preventDefault()
  
     
      engine(firstname , 0, 'Firstname Cannot Be Blank')
      engine(lastname , 1, 'lastname Cannot Be Blank')
      engine(email ,   2,    'Email Cannot Be Blank')
      engine(password1 , 3, 'Password Cannot Be Blank')
      engine(password2 , 4, 'please confirm your password')
  
     
  
  });
   //create variable engine to print error message
   let engine = (id, serial , message)=>{

      if(id.value.trim()===''){
       
          error[serial].innerHTML=message
           id.style.border='2px solid red'
      }
         
       else{
          error[serial].innerHTML=''
          id.style.border='2px solid green'
         
       }
    

}
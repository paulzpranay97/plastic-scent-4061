  
 // signup///////////////////////////////////////////

//  let nameup = document.getElementById("nameup");
//  let mobileno=document.getElementById("mobileno");
//  let emailup = document.getElementById("emailup");
//  let passwordup = document.getElementById("passwordup");
//  let age = document.getElementById("age");
//  let city = document.getElementById("city");


 document.getElementById("up").addEventListener("submit", (e) => {
     e.preventDefault();
     let name=document.getElementById("nameup").value
     let mobileno=document.getElementById("mobileno").value
     let email=document.getElementById("emailup").value
     let password=document.getElementById("passwordup").value
     let age=document.getElementById("age").value
     let city=document.getElementById("city").value
 
 
 
     let obj={
         name:name,
         mobileno:mobileno,
         email:email,
         password:password,
         age:age,
         city:city
         
     }
     console.log(obj)
    
 
 fetch("http://localhost:5511/users/register",{
     method:'POST',
     headers:{
         "Content-type":"application/json"
     },
     body:JSON.stringify(obj)
 })
 .then((res)=>{
 
     return res.json();
 })
 .then((data)=>{
     console.log(data);
     alert("Registration done !")
     window.location.href = "./index.html";
 
 })
 .catch((err)=>{
    
 console.log(err);
 })
 
 })
 


document.getElementById("in").addEventListener("submit", (e) => {
    e.preventDefault();
    let email=document.getElementById("emailin").value
    let password=document.getElementById("passwordin").value
   
    let obj={
        email:email,
        password:password
        
    }
    console.log(obj)
   

fetch("http://localhost:5511/users/login",{
    method:'POST',
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify(obj)
})
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    
    localStorage.setItem("token",res.token);
    window.location.href = "./admin.html";
       $('.signup, .signin, #pop').hide();

    

})
.catch((err)=>{
    document.getElementById("alertinh").innerText=`Wrong Credential !`;
    document.getElementById("alertinp").innerText=`Please provide correct user details.`;

    
console.log(err);
})
})

function displaydata(res){
    res.forEach((el) => {
        
        document.getElementById("login").innerText=`Hello Mr. ${el.Name}`;
    });
}
//        $('.signup, .signin, #pop').hide();
// // let storeddata=[];
// logindata();
//  function logindata(){
//     fetch("localhost:5511/users/login")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data);
//         // storeddata=data;
//         check(data);
//     })
//  }
  
// function check(data){
// //  let storeddata=JSON.parse(localStorage.getItem("account-data"))||[];
//  document.getElementById("in").addEventListener("submit",(e)=>{
//    e.preventDefault();
//    let flag=false;
//     data.forEach((el)=>{
//      if(emailin.value===el.EmailId  && passwordin.value ==el.Password){
       
//     //    alert("Login Sucessfull")
    
       
//        document.getElementById("login").innerText=`Hello Mr. ${el.Name}`;
//        $('.signup, .signin, #pop').hide();
//        flag=true;

//     //    window.location.href= "homepage.html"
//      }
//      else if(emailin.value==="xyz@admin.com" && passwordin.value==="admin@1234"){
//     //   alert("Redirecting to Admin Page")
//     flag=true;
//       window.location.href= "admin.html"
//      }

//     })
//     if(flag==false)
//     {
//         alert("Wrong Credentials");
//     }
//    })

//  }
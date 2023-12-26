
var emailInput= document.querySelector("#emailInput");
 var passwordInput= document.querySelector("#passwordInput");
 var loginBtn= document.querySelector("#loginBtn");
 var errorData= document.querySelector(".myInfo");







function isEmpty() {

    if (emailInput.value == 0 && passwordInput.value == 0) {
        errorData.classList.remove('d-none');
        errorData.classList.add('d-block');
        document.querySelector(".myInfo").innerHTML = '<p class="text-danger m-3">enter all inputs</p>'
    }

};

var allUsers=[];
  
if(localStorage.getItem("allUsers") !== null){
    allUsers= JSON.parse(localStorage.getItem("allUsers")) 
   
 };

function addUser(){
 //console.log('added'); 
     if(allUsers!=null){
        var user={
            
            
            email: emailInput.value,
            password:passwordInput.value,
        };
        allUsers.push(user);
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
       
       
       
      
       return true
        
     }
     else if( emailInput == null && passwordInput== null ){
        errorData.classList.add('d-none');
        
        return false
     }

     
        
      
     

    };
  
    loginBtn.addEventListener( 'click', isEmpty);
loginBtn.addEventListener( 'click', addUser);


// var userName=document.getElementById("mymessage");





// var userName = localStorage.getItem('sessionUsername')
// if (userName== nameInput.value){

// }
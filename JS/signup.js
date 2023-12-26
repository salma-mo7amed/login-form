//i want to take the values to create the sign up
// so i will select the inputs globally first

 var nameInput= document.querySelector("#nameInput");
 var emailInput= document.querySelector("#emailInput");
 var passwordInput= document.querySelector("#passwordInput");
 var loginBtn= document.querySelector("#loginBtn");
 var errorData= document.querySelector(".myInfo");

 // then I will use a function and its calling to do my task
// first i will select the values of the sites locally in this function.
// then put their desc in an object:
// before that i will put a shelf to have all sites through an array:
var allUsers=[];

  
if(localStorage.getItem("allUsers") != null){
    allUsers= JSON.parse(localStorage.getItem("allUsers")) 
   
 };

 function isEmailExist() {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == emailInput.value.toLowerCase()) {
            return false
        }
    }
}

function addUser(){
 //console.log('added');
 if (allUsers.length == 0) {
    allUsers.push(user)
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
    document.querySelector(".myInfo").innerHTML = '<p class="text-success m-3">Success</p>'
    return true
}
if (isEmailExist() == false) {
    document.querySelector(".myInfo").innerHTML = '<p class="text-danger m-3">enter all inputs</p>'

} else {
    allUsers.push(user)
    localStorage.setItem("allUsers", JSON.stringify(allUsers))
    document.querySelector(".myInfo").innerHTML = '<p class="text-success m-3">Success</p>'

} 
     
        var user={
            
            name: nameInput.value,
            email: emailInput.value,
            password:passwordInput.value,
        };


    };

     
function isEmpty() {

    if ( nameInput.value== 0 && emailInput.value == 0 && passwordInput.value == 0) {
        
        errorData.classList.remove("d-none");
        errorData.classList.remove("d-none");
        

    }
    

};

        
  
          
   
loginBtn.addEventListener( 'click', addUser);
loginBtn.addEventListener( 'click', isEmpty);




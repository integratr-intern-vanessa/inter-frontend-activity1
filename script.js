function Validation(){
    var first_name = document.getElementById("first_name").value;
    var lastname = document.getElementById("last_name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
if (first_name == ""){
        alert("Error: The First name field is required."); 
}else if(lastname == ""){
        alert("Error: The Last name field is required.");
}else if(username == ""){
        alert("Error: The User name field is required.");
}else if(password == ""){
        alert("Error: The Password field is required.");
}else if(password.length < 10){
        alert("Error: The Password should be at least 10 characters long. Use a combination of letters (A-z), numbers(O-9), and symbols.");

}else if (password != confirmPassword) {
        alert("Error: Password should be the same");
}else{
        alert("Your registration was successful!");
    }
}
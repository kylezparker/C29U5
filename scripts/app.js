// constructor
function User(email,password,fname,lname,age){
this.email=email;
this.password=password;
this.firstName=fname;
this.lastName=lname;
this.age=age;
}
//register function
function register(){
    let userName= $("#txtEmail").val();
    let userPass= $("#txtPassword").val();
    let userFirstName= $("#txtFirstName").val();
    let userLastName= $("#txtLastName").val();
    let userAge= $("#txtAge").val();

    console.log(userName,userPass,userFirstName,userLastName);
    // creating the object
    let newUser=new User(userName,userPass,userFirstName,userLastName,userAge);
    $('input').val("");
    console.log(newUser);
}







function init(){
console.log("reg");
//hook events
$("#btnRegister").click(register);

}
window.onload=init;
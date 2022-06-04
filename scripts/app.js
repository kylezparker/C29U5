// constructor
function User(email,password,fname,lname,age,address,phone,payment,color){
    this.email=email;
    this.password=password;
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.address=address;
    this.phone=phone;
    this.payment=payment;
    this.color=color;
    }
    // let users=[];

    //register function
    function register(){
        let userName= $("#txtEmail").val();
        let userPass= $("#txtPassword").val();
        let userFirstName= $("#txtFirstName").val();
        let userLastName= $("#txtLastName").val();
        let userAge= $("#txtAge").val();
        let userAddress= $("#txtAddress").val();
        let userPhone= $("#txtPhone").val();
        let userPayment= $("#txtPayment").val();
        let userColor= $("#txtColor").val();
    
        // email,password,first name,last name,age,address,phone,payment,color
    
        console.log(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,userPayment,userColor);
        // creating the object
        let newUser=new User(userName,userPass,userFirstName,userLastName,userAge,userAddress,userPhone,userPayment,userColor);
        $('input').val("");
        console.log(newUser);
    }
    
    
    
    
    
    
    
    function init(){
    console.log("reg");
    //hook events
    $("#btnRegister").click(register);
    
    }
    window.onload=init;


    // // practice. register function without jquery, must also clear form with jquery.
    // function register2(){
    //     let userName=document.getElementById("txtEmail").value;
    //     // repeat ^ then 
    //     let user1=new User(userName,1,1,1,1,1,1,1,1);
    //     users.push(user1);
    //     console.log(users);
    //     clearForm();
    // }
    // function clearForm(){
    //     document.getElementById("txtEmail").value=``;
    //     // repeat

    // }





    // // email,password,first name,last name,age,address,phone,payment,color
    // function register3(){
    //     let userName=$(`#txtEmail`).val();
    //     let userFirstName=$(`#txtFirstName`).val();
    //     let userLastName=$(`#txtLastName`).val();
    //     let user1=new User(userName,1,userFirstName,userLastName,1,1,1,1,1);
    //     console.log(user1);
    //     $(`input`).val(``);

        
    // }
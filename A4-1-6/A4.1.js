function validate(){
    var usern = document.getElementById('txtUn').value;
    var pas = document.getElementById('txtPass').value;
    var p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[,./-_@#$*%^])$/;
    var u = /^(?=.*[A-Z])[a-z0-9]{4,8}$/;
    if(u.test(usern) && p.test(pas)){
        window.alert('Registered Successfully!');
    }
    else{
        window.alert('Please make sure Username contains atleast 1 Uppercase and Password contains atleast 1 Uppercase,Number,Lowercase');
    }
}
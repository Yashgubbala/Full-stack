function validate(){
    var fname = document.getElementById('txtFn').value;
    var lname = document.getElementById('txtLn').value;
    var dob = document.getElementById('dateob').value;
    var add = document.getElementById('add').value;
    var course = document.getElementById('txtcourse').value;
    var email= document.getElementById('email').value;
    var phone = document.getElementById('pn').value;
    var em= /^[a-zA-z.-_0-9]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var m = /^[6-9][0-9]{9}$|^[0][6-9][0-9]{9}$|^[+][9][1][-][6-9][0-9]{9}$/;
    if(phone=='' || fname==''||lname==""||email==''||dob==''||add==''||course==''){
        window.alert('Please fill all the details');
    }
    else{
        if(m.test(phone) && em.test(email)){
            window.alert('Registered!');
        }
        else{
            window.alert('Invalid Details');
        }
    }

}
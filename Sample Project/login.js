function validate(){
    var roll=document.getElementById('txtroll').value;
    var pass= document.getElementById('txtPass').value;
    var code="@123";
    var p=roll+code;
    
    if(roll==''||pass==''){
        window.alert('Fill all details');
    }
    else
    {
        
        if(p==pass){
        
            window.alert('Login Success');
        }
        else{
            window.alert('Password Wrong');
        }
    }
    
}
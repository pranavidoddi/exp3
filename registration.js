function validate()
{
    var fn=frm.fname.value;
    for(X in fn)
    {
        ch=fn.charCodeAt(x);
        if(ch<65||ch>90&&ch<97||ch>122)
        {
            alert("invalid firstname");
            return false;
        }
 

    }
    
}
var ln=frm.lname.value;
    for(y in fn)
    {
        ch=fn.charCodeAt(y);
        if(ch<65||ch>90&&ch<97||ch>122)
        {
            alert("invalid lastname");
            return false;
        }
 

    }
    var phn=frm.phone.value;
    var lenp=phn.length;
    {
        if(lenp!=10)
        {
            alert("phone number should be exactly 10 digits");
            return false;
        }
    }
    var pwd1=frm.password.value;
    var pwd2=pwd1.length;
    if(pwd2%2==1)
    {
        alert("password should contain even number of characters");
        return false;
    }
    if(pwd2>8)
    {
        alert("password should not exceed 8 digits");
        return false;
    }
    var reg=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    var mail=frm.mailid.value;
    if(reg.test(mail))
    {
        alert("Registration sucessfull!");

    }
    else{
        alert("invalid email");
        return false;
    }
    return true;
}





document.getElementById('btn').addEventListener('click', function () {
    let uname = document.getElementById('uname');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');

    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');

    if (uname.value == "") {
        error.innerHTML = '* Please Enter Your Name';
        error.style.color = 'red';


        uname.focus();
    }
    else {
        error.innerHTML = "";
    }


    if (lastName.value == "") {
        error2.innerHTML = '* Please Enter Your Last Name';
        error2.style.color = 'red';
        lastName.focus();
    }
    else {
        error2.innerHTML = "";
    }

    if (email.value == "") {
        error3.innerHTML = '* Please Enter Your Email';
        error3.style.color = 'red';
        email.focus();
    }
    else {
        error3.innerHTML = "";
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    }
    error3.innerHTML = "*You have entered an invalid email address!"
    error3.style.color = 'red';
    /*  alert("You have entered an invalid email address!") */
    return (false)
});



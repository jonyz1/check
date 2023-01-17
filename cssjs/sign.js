function signIn(){
    let email = document.getElementById('em').value;
    let password = document.getElementById('passw').value;

    if (email == 'user@gmail.com' && password == 'password'){
        alert('You have succesfully signed in');
        // location.assign('../homepage.html');
        open('optionpage.html')
    }else{
        alert('try again')
    }
}
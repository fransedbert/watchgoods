//hamburger
let menu = document.querySelector('#hamburger');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'left'});

//start
function emailval(emailerror) {

    var ag = emailerror.indexOf("@");
    var dot = emailerror.indexOf(".");
    var spasi = emailerror.indexOf(" ");

    if((ag != -1) &&
        (ag != 0) &&
        (dot != -1) &&
        (dot != 0) &&
        (dot > ag + 1) &&
        (emailerror.length > dot + 1) &&
        (spasi == -1)) {
        return true;
    } else {
        return false;
    }

}

function form() {

    let name = document.getElementById("name")
    let country = document.getElementById("country")
    let email = document.getElementById("email")
    let mobile = document.getElementById("mobile")
    // let message = document.getElementById("message")
    let copy = document.getElementById("copy")

    if(name.value.length == 0) 
    {
        alert("Please fill the box your Full name!")
    } 
    // else if(document.getElementById("message").value == "") 
    // {
    //     alert("Please fill the message box!")
    // } 
    else if(country.value.length == 0) 
    {
        alert("Please fill in your country!")
    } 
    else if(mobile.value.length != 11)
    {
        alert("Mobile phone must have 11 digits only!")
    } 
    else if(isNaN(mobile.value))
    {
        alert("Mobile box must be fill with numbers only!")
    } 
    else if(email.value.length == 0) 
    {
        alert("Please fill the box with your e-mail!")
    } 
    else if(!emailval(email.value))
    {
        alert("Input a valid e-mail address!")
    } 
    else if(document.getElementById("message").value == "") 
    {
        alert("Please fill the message box!")
    } 
    console.log(document.getElementById("message").value)
}

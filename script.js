var form = document.querySelector('form');
var Name = document.getElementById("name").value;
var Email = document.getElementById("gmail").value;
var PhoneNumber = document.getElementById("number").value;
var subject = document.getElementById("sub").value;
var YourMessage = document.getElementById("mess").value;
function sendEmail(){
    var bodyMessage = 'Name: ' + Name + '<br/> Email: ' + Email + '<br/> Phone Number: '+ PhoneNumber + '<br/> Message: '+ YourMessage;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "preetchoudhary6717@gmail.com",
        Password : "90AA10911E03E3561EA25AAD7CEBEC6E4B10",
        To : 'preetchoudhary6717@gmail.com',
        From : "preetchoudhary6717@gmail.com",
        Subject : subject,
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent!",
                icon: "success"
            });
        }
      }
    );
}

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    sendEmail();
});
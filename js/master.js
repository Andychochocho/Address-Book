
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Contact.prototype.fullName = function() {
  return this.firstName + this.lastName;
}


var andyContact = new Contact("Andrew ", "Cho");


$(document).ready(function(){
  $("#buttonSubmit").click(function(){
    // event.preventDefault;
    var firstNameForm = $("#firstName").val();
    var lastNameForm = $("#lastName").val();
    var newContact = new Contact(firstNameForm, lastNameForm);

    $("#contacts").append("<li>" + newContact.fullName() + "</li>")

    $("#contacts > * ").click(function(){
      $(".show-contacts h3").text(newContact.fullName());
      $("#contact-list").text(newContact.firstName);
      $("#contact-list").text(newContact.lastName);
    });


  });
});

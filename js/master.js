
function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Contact.prototype.fullName = function() {
  return this.firstName + this.lastName;
}


var andyContact = new Contact("Andrew ", "Cho");

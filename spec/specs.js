



describe('Contact', function(){
  it('will pass true if string is entered', function(){
    var andyContact = new Contact("Andrew", "Cho");
    expect(andyContact.firstName).to.equal("Andrew");
    expect(andyContact.lastName).to.equal("Cho");
  });
});

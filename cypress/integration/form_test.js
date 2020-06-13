




describe("Test our inputs and submit our form", function() {
    beforeEach(function () {
        cy.visit("http://localhost:3000/")
    })

    it("Add test to inputs and submit form", function(){
        cy.get("input[name='name']")
          .type("Prakash")
          .should("have.value", "Prakash")
                // above is Assertions which describe the desired state of your elements, your objects, and your application.
                // After clicking on this <button>, I expect its class to eventually be active.
        cy.get("input[name='email']")
          .type("prakash@prakash.com")
          .should("have.value", "prakash@prakash.com")
    })
  
})


it("Exepect command",()=>{
    cy.visit("cypress/index.html")
    cy.get("#welcome")
    .invoke("text")
    .then((returnedText)=>{
        // expext must used in .then command
        expect(returnedText).to.eql("Welcome to Cypress Tutorials")

      // expect("").to.have.attr
    })
})
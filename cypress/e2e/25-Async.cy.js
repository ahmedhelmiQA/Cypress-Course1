/// <reference types="cypress" />


it("async behavior",()=>{

    let message = "Hello"
    cy.visit("cypress/index.html")
    cy.get("#welcome").invoke("text")
    .then(text=>{
     message = text
    
     expect(message).to.eql("Welcome to Cypress Tutorials")

     cy.log(message)
    })
    
    
})
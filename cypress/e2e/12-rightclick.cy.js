/// <reference types="cypress" />

it("rightclick command",()=>{
    cy.visit("cypress/index.html")
    cy.get('[value="Click me"]').rightclick()
})


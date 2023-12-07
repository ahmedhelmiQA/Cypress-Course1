/// <reference types="cypress" />

it.only("check command",()=>{
 cy.visit("cypress/index.html")
cy.get("#Nuts").check()
cy.get("#Nuts").uncheck()
cy.get("#Developer").check()
cy.get("#Manager").uncheck
})

it("check command/radios",()=>{
    cy.visit("cypress/index.html")
    cy.get("#Developer").uncheck()
})

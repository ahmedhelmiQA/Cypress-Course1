/// <reference types="cypress" />

it("should by visible command",()=>{
    cy.visit("cypress/index.html")
    cy.get('#courses').should("be.visible")
    //cy.get('#courses').should("not.be.visible")

})



it("should have text command",()=>{
    cy.visit("cypress/index.html")
    cy.get('#welcome').should("have.text","Welcome to Cypress Tutorials")
})


it("should contains command",()=>{
    cy.visit("cypress/index.html")
    cy.get("#welcome").should("contain","Welcome to Cypres")
})


it("should have class",()=>{
    cy.visit("cypress/index.html")
    cy.contains("react").should("have.class","web")
}
)


it("should have css command",()=>{
    cy.visit("cypress/index.html")
    cy.get(".focus").focus().should("have.css","background-color","rgb(255, 0, 0)")

})



it("should have attr command",()=>{
    cy.visit("cypress/index.html")
    cy.get(".invoice-button").first().should("have.attr","type","button")

})
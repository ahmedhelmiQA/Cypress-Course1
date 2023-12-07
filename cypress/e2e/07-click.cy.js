/// <reference types="cypress" />

it("click command",()=>{
    cy.visit("cypress/index.html");
    cy.get(".invoice-button").last().click("bottom")
    cy.get(".invoice-button").click({multiple:true});
    cy.get(".hidden-button").click({force:true})

    // we can click on an element using the click command
    // we can only click on one element.
    // we can click on multiple elements if we add {multiple: true}
    // we can click on hidden, or coverd elements if we add {force:true}
})


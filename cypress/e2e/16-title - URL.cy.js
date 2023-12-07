//const { contains } = require("cypress/types/jquery")



it("get URL",()=>{
    cy.visit("cypress/index.html")
    cy.url().should("contain", "cypress/index.html")
    cy.title().should("contain","Cypress Tutorials")
   })


   

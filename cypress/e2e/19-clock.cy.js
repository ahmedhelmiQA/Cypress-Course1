
/// <reference types="cypress" />

// const { times } = require("cypress/types/lodash")


it("clock command",()=>{
// must create object
    let now = new Date("2008 05 01")
    cy.clock(now)   
     cy.visit("cypress/index.html")
})



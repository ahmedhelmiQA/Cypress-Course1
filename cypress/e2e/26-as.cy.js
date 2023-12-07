// const { get } = require("cypress/types/lodash")
/*

it("Aliases in Cypress",()=>{
    cy.visit("cypress/index.html")
    cy.url( ).as("url")
    cy.get("#welcome").should("be.visible")

    cy.get("@url").should("contain","index.html")
})
*/

// each test case Especially by herself
/*
it("Aliases in Cypress",()=>{
    cy.visit("cypress/index.html")
    cy.url().as("url")
cy.get("#welcome").should("be.visible")

cy.get("@url").should("contain","index.html")
})
*/

//// beforeEach()///
describe("aliese",()=>{

    beforeEach(()=>{
cy.visit("cypress/index.html")
    cy.url( ).as("url")
    })

it("Aliases in Cypress",()=>{
     cy.get("@url").should("contain","index.html")
})

it("Aliases in Cypress",()=>{
 cy.get("@url").should("contain","index.html")
})

})

///// aliese from another file such as "e2e.js"

describe("aliese",()=>{

it("Aliases in Cypress",()=>{
     cy.get("@url").should("contain","index.html")
})

it("Aliases in Cypress",()=>{
 cy.get("@url").should("contain","index.html")
})

})
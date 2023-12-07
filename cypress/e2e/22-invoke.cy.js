/// <reference types="cypress" />


it("invoke command",()=>{
    const student= {
        name : "ahmed" ,
        family: "helmi",
        isQA: true,
        isWatching:function(){
            return "hello " + this.name
        }
    }
    cy.visit("cypress/index.html")
    cy.wrap(student).invoke("isWatching").should("contain","ahmed")
})
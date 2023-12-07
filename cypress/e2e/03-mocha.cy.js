/// <reference types="Cypress" />

// describe --> suite our test cases
//context --> same as describe
context("login functionality",()=>{

    // it will execute only one time before all the test cases.
    // if we have 3 test cases, the before hook will execute only one time 
    before(()=>{
        cy.log("i am inside the before hook")
    })
    
    // it will execute before all and every test case.
    // if we have 3 test case, the before each will execute 3 times.
    beforeEach(()=>{
        cy.log("i am inside the each before hook")
     })

     // it will execute only one time after all the test cases.
     // if we have 3 test cases, the after hook will execute only one time.
     after(function(){
        cy.log("i am inside the after hook")
     })

     // it will execute after all and every test case.
     // if we have 3 test cases, the after each will execute3 times
     afterEach(function(){
        cy.log("i am inside the aftereach hook")
     })
    it('should login with valid email and correctly password', function()  {
        cy.log("should login with valid email and correctly password");
    });

it("should not login if the user name is wrong", ()=>{
    cy.log("i am inside test case 2")

})
it("should be able to rest password",()=>{
    cy.log("i am inside test case 2")
})

})
     
    

describe("order functionalty",()=>{
    it("should be able to order a new food",()=>{
        cy.log("i am inside test case 4")
    })
})


it("test case number 5",()=>{
    cy.log("i am inside test case 5")
})
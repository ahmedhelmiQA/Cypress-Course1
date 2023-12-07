

it("select command",()=>{
    cy.visit("cypress/index.html")
    cy.get('#courses').select("selenium")
    cy.get('#courses').select(2)
    

    // we can type on any input using the select command
})
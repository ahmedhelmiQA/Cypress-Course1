


it("blur command",()=>{
    cy.visit("cypress/index.html")
    cy.get('.focus').focus()
        cy.get('.focus').blur()
})
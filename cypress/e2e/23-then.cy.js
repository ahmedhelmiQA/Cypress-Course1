

it("Then command",()=>{
    cy.visit("cypress/index.html")
    //cy.get('#welcome').invoke("text").should("eql","Welcome to Cypress Tutorials")
    // cy.get("#welcome").invoke("text").then((text)=> {
    //     cy.log(text);
    // })

    cy.get("#welcome").then((text)=>{
        cy.log(text)
    })
})
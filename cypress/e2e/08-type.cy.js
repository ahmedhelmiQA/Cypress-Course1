

it("type command",()=>{
    cy.visit("cypress/index.html")
    cy.get("#inputEmail").type("test@gmail.com{enter}")
    cy.get("#inputPassword").type("inputPassword")

    // we can type on any input using the type command
})

it("type command",()=>{
    cy.visit("cypress/index.html")
    cy.get("#coverdInput").type("test@gmail.com",{force: true,delay:10,})
})

it.only("am9",()=>{
    cy.visit("https://am9.dexef.com/#/AdminSignIn")
    cy.get('flt-glass-pane').type("01022621160")
})
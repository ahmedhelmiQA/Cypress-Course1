

it("go command",()=>{
    cy.visit("cypress/index.html")
    cy.get(".about").click()  
    cy.go("back") 
    cy.go("forward")
   })

//    it("index",()=>{
//     cy.visit("cypress/index.html")
//    })
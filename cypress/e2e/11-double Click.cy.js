

it("doubleclick command",()=>{
   cy.visit("cypress/index.html")
   cy.get('.container > input.btn').dblclick()
   })



it("Its command",()=>{
    const student ={
        name: "ahmed",
        family: "helmi",
        isQA: true,
        isWatching: function(){
            console.log("he is watching")
        }
     }
    cy.visit("cypress/index.html")
    cy.wrap(student).its("name").should("eql","ahmed")
}
)
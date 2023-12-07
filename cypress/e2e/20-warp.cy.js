

it("wrap command",()=>{
    const student ={
        name: "hatem",
        family: "hatamleh",
        isQA: true,
        isWatching: function (){
            console.log("He is watching")
        }
    }
    const message = "Welcome to Qacart"
    cy.visit("cypress/index.html")
    //cy.wrap(student)
    cy.wrap(student).should("have.a.property","name","hatem")
    cy.wrap(message).should("eql","Welcome to Qacart")

})
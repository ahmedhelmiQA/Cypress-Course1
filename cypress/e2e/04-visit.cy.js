
it("should visit the website correctly",()=>{
    // with visit commend we can go to a normal website, or localhost or any HTML file in the system
    // cyoress recomends to set the baseURL in cypress.json file
cy.visit("/search",{
    qs : {
        q: "cypress",
        hatem:"qacart",
    }
});}
);





it("should be able to open a website in differnet views",()=>{

    // we can use cy viewport to set the width and height of the test runner
    // userfully to test our application in the different viewport.
   
   cy.viewport("macbook-11") // cy.viewport(550,750)
    cy.visit("cypress/index.html");
});

// to see all the options in cypress.json file add the following in your vscode json file 
// "json.schemas": [
//     {
//         "fileMatch": [
//             "/myfile"
//         ],
//         "url": "schemaURL"
//     }
// ]

["ipad-mini", "macbook-11", "iphone-8"] .forEach(
    (viewport)=>{

it("should be able to open a website in differnet views",()=>{

   // run one test case in more that one viewport  
   cy.viewport(viewport); 
   
    cy.visit("cypress/index.html");
})
}
);
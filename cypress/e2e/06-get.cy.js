
// we use the get commend to find an element or elemnts.


// /////// Tag Name  ////////////////

it("find element by tag name",()=>{
    cy.visit("cypress/index.html");

    // we put the tag name inside the get commend
    // HTML tag
    // the get commend will return all the elements that matches the tag name
    
    //cy.get("h1")
    cy.get("button")
});

it("find element by tag name",()=>{
    cy.visit("cypress/index.html")
    cy.get("h2")
})


//////////////// ID ///////////////////////
it("find element by id",()=>{
    cy.visit("cypress/index.html");

    cy.get("#courses")
});

it("find element by id",()=>{
    cy.visit("cypress/index.html");
    // to find any element by ID we use the #    
    cy.get("#welcome")
});


//////////// class /////////////////
it("find element by Class",()=>{
    cy.visit("cypress/index.html");

       // to find eny element by Class we use the (.)
    cy.get(".country-list")
});

it("find element by Class",()=>{
    cy.visit("cypress/index.html");
    // to find eny element by Class we use the (.)
    cy.get(".course-list")
});


///////////// attribute //////////////
it("fin element by attribute",()=>{
    cy.visit("cypress/index.html");
    //
    cy.get('[name="Manager"]');
});

it("find element by attribute",()=>{
cy.visit("cypress/index.html");
//
cy.get('[name="Banana"]');
});


/////// find the first element //////
it("find the first element from a list elements",()=>{
    cy.visit("cypress/index.html");
    // to find the first element from a list of elements we use the first() command
    cy.get("h1").first();
});

/////// find the last element //////
it("find the last element from a list elements",()=>{
    cy.visit("cypress/index.html");
     // to find the last element from a list of elements we use the last() command
    cy.get("h2").last();
});


/////// find the element by index //////
it("find an element from a list by index 2",()=>{
cy.visit("cypress/index.html")
// to find the element from a list of elements by index we use the .eq(index)
// elements are saved in an array , zero index
cy.get("h1").eq(2);
});

it("find an element from a list by index 3",()=>{
    cy.visit("cypress/index.html");
    // to find the element from a list of elements by index we use the .eq(index)
// elements are saved in an array , zero index
    cy.get("h2").eq(3);
})

/////// find the element by filter //////
it("find an element from a list by filter",()=>{
    cy.visit("cypress/index.html");

// to filter some elements from a list of elements we use the filter command
// we use css selectors inside the filter command
    cy.get("li").filter(".mobile")

    cy.get("li").filter(".web")
});

/////// find the element by children command //////

it("find the elements using the children command",()=>{
    cy.visit("cypress/index.html");
  // to find elements using the parent we use the children command
  //we can se the children coommand without any arguments and in that case it will return all the children 
  cy.get(".course-list").children;

    // we can add some css selectors to filter our some of the children
    cy.get(".course-list").children(".web");
    cy.get(".course-list").children().first()
    cy.get(".course-list").children().last()
    cy.get(".course-list").children().eq(4)
})


/////// find the element by .Find(css selector) //////

it("find the elements using the Find(css selector)",()=>{
    cy.visit("cypress/index.html");
        // we can find elements based on the parent using the find command .find(css selector)
    cy.get(".course-list").find(".web");
    })


/////// find the element by parent command //////

it("find the elements using the parent command",()=>{
        cy.visit("cypress/index.html");
        // to find elements using the children we use the parent command
        // parents command will return the all parent of the elements in an array
        cy.get(".list1.web").parent();
     })
  
     
/////// find the element by siblings (brother) command //////

it("find the elements using the siblings command",()=>{
    cy.visit("cypress/index.html");
        // to find elements using the siblings (brother) of the command 
      // silblings command will return the all siblings (brother) of the elements in an array
    cy.get(".list1.web").siblings(".web");
 })


 /////// find the element by text //////

it("find the elements text",()=>{
    cy.visit("cypress/index.html");
    // to find elements using text we can use the Contains command contains(text) 
      
    cy.contains("Selenium");
    cy.get('li').contains('Selenium');
 })


 /////// find the element using Locator Playground //////

 it("find elements using cypress runner",()=>{
   cy.visit("cypress/index.html");
  // to find elements using Locator Playground
   cy.get('.display-4')
   
   cy.get(':nth-child(2) > :nth-child(3) > .btn')
 })


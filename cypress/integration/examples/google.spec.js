///<reference types="cypress" />
describe("Google Test",()=>{
it("Open website",()=>{
    cy.visit("https://www.flipkart.com/");
    cy.get('.LM6RPg').click();
    cy.get('.LM6RPg').type('IPhones');
    cy.get('.vh79eN > svg').click();
})

it("Assertion in Cypress",()=>{
    cy.visit("http://www.executeautomation.com/site/");
    cy.get("[aria-label='jump to slide 2']",{timeout:'60000'}).should('have.class','ls-nav-active');

  cy.get("[aria-label='jump to slide 2']",{timeout:'60000'}).should(($x)=>{
     expect($x).to.have.class('ls-nav-active');
  })
  cy.get(':nth-child(3) > .smallimg > span').click();
  
})
})
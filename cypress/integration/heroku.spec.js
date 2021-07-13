/// <reference types="Cypress" />

describe("Heroku app", ()=> {

beforeEach(()=>{

    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.get('h3').invoke('text').as('headingText');
})


    it ("Checkbox title", function () {
 
        
         //cy.get('h3').should("have.text", "Checkboxes");
       //this.headingText.should('equal', "Checkboxes") - ne radi, jer headingTxt je string a should ///ne moze manipulisati stringovima
expect(this.headingText).to.be.equal('Checkboxes');


       ;

    })


})
/// <reference types="cypress"/>


describe("Admin panel", ()=>{

beforeEach(()=>{

    cy.visit("https://automationintesting.online/#/admin");
    cy.fixture('login-details').as('data');

})


    it("Admin login", function(){
   
    cy.login(this.data.validCredentials.username, this.data.validCredentials.password);
    cy.get('#frontPageLink').should('be.visible');
   
   })
   
   
   it ("admin invalid login", function(){
   
        cy.login(this.data.invalidCredentials.username, this.data.invalidCredentials.password);
        cy.get('#frontPageLink').should('not.exist');
       
   })
   
   })

   
/// <reference types="cypress" />


describe("Admin panel", ()=>{
 it("Admin login", ()=>{

cy.visit("https://automationintesting.online/#/admin");

cy.fixture('login-details').then(data => {
    cy.get('#username').type(data.validCredentials.username);
    cy.get('#password').type(data.validCredentials.password);


})

cy.get('#doLogin').click();
cy.get('#frontPageLink').should('be.visible');

})


it ("admin invalid login", () => {


    cy.visit("https://automationintesting.online/#/admin");

    cy.fixture('login-details').then(data => {
        cy.get('#username').type(data.invalidCredentials.username);
        cy.get('#password').type(data.invalidCredentials.password);
    
    
    })
    cy.get('#doLogin').click();
    cy.get('#frontPageLink').should('not.be.visible');
    
})

})
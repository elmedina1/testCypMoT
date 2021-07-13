// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password)=>{


    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#doLogin').click();



})


Cypress.Commands.add('addEnquiry', (name,email, phone,subject,description) =>{


    cy.get("#name").type(name);
    cy.get("#email").type(email);
    cy.get("#phone").type(phone);
    cy.get("#subject").type(subject);
    cy.get("#description").type(description);
    cy.get("#submitContact").click();


})
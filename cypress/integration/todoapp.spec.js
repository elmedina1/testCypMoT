/// <reference types = "Cypress" />


describe("Todo application", () => {

 it("should add new todo item", () =>{

  cy.visit('https://todomvc.com/examples/react/#/');

  cy.get('.new-todo').type('new zadatak{enter}');
  cy.get('.todo-list li').should('have.length',1).and('have.text','new zadatak')
 });


});
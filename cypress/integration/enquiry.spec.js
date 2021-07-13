/// <reference types="cypress"/>

describe ("Make enquiru test suide", ()=> {

before(()=>{

    
    cy.fixture("enquiry-details").as('enq');
    cy.fixture('login-details').as('data');
    cy.visit('/');
})

it ("Make enquiry, login as admin and delete enquiry" , function(){
    cy.addEnquiry(this.enq.name,this.enq.email, this.enq.phone,this.enq.subject,this.enq.description);
    cy.contains('h2',"Thanks for getting in touch");
    cy.visit('/admin');
    cy.login(this.data.validCredentials.username,this.data.validCredentials.password);
    cy.get('#frontPageLink').should('be.visible');
    cy.get('[href="#/admin/messages"]').click();

})

after(function() {

        cy.get('div[class="col-sm-9"] > p').contains(this.enq.subject);
        cy.get('.roomDelete').click({multiple:true});
        
    
  })

}) 
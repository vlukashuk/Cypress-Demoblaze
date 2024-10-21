/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Bank app', () => {
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/');
      });
  

    const username = 'DemoBlazeTest';
    const password = 'Qwerty123.';

    it('User Registration', () => {
        
        cy.get('#signin2').click();
        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(password);
        cy.contains('.btn', 'Sign up').click();

    
    })

    it('User Login', () => {
        
        cy.get('#login2').click();
        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);
        cy.contains('.btn', 'Log in').click();
        cy.wait(2000);
        

        cy.reload();
    })

    it.only('Add Samsung Galaxy S6 to Cart', () => {
        cy.contains('a','Samsung galaxy s6').click();
        cy.contains('.btn', 'Add to cart').click();
        cy.get('#cartur').click();
        cy.get('.success > :nth-child(2)').should('be.visible');
    })
})
describe('Unauthenticated User Redirect', () => {
    it('should redirect to the login page if not authenticated', () => {
 
      cy.visit('http://localhost:3000/user-panel');

      //cheking the url
      cy.url().should('include', '/login');

      //ensure the app is not allowing to acces without authentification

      cy.get('[type="email"]').should('be.visible');
      cy.get('[type="password"]').should('be.visible');

      //take the pic
      cy.screenshot('unauthenticated-redirect-to-login');
    });
  });
  
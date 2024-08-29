describe('Unauthenticated User Redirect', () => {
    it('should redirect to the login page if not authenticated', () => {
      cy.visit('http://localhost:3000/user-panel');
      cy.url().should('include', '/login');
      cy.get('[type="email"]').should('be.visible');
      cy.get('[type="password"]').should('be.visible');
      cy.screenshot('unauthenticated-redirect-to-login');
    });
  });
  
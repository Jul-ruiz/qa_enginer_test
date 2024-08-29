describe('E2E Login Flow', () => {
it('should successfully login and redirect to user dashboard', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[type="email"]').type('user_name@gamil.com');
    cy.get('[type="password"]').type('pasword');
    cy.get('button').click();
    cy.url().should('include', '/user-panel');
    cy.get('#user-panel').should('be.visible');
    cy.screenshot('user-dashboard');
});
});
  
describe('Exercise 1 Test', () => {
  it('has the correct structure', () => {
    cy.visit('http://localhost:3000/exercise-1.html');
    cy.document().should('have.property', 'doctype').and('not.be.null');
    cy.get('html').should('exist');
    cy.get('head').should('exist');
    cy.get('body').should('exist');
  });
});
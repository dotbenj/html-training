describe('Exercise 6 Test', () => {
  it('has the correct form elements', () => {
    cy.visit('http://localhost:3000/exercise-6.html');
    cy.get('form').should('exist');
    cy.get('input[type="text"]').should('exist');
    cy.get('input[type="radio"]').should('have.length.at.least', 2);
    cy.get('input[type="submit"]').should('exist');
  });
});
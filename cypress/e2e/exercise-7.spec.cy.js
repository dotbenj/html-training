describe('Exercise 7 Test', () => {
  it('has advanced form elements', () => {
    cy.visit('http://localhost:3000/exercise-7.html');
    cy.get('select').should('exist');
    cy.get('input[type="checkbox"]').should('have.length.at.least', 2);
    cy.get('textarea').should('exist');
  });
});
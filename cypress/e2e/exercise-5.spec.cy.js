describe('Exercise 5 Test', () => {
  it('has a correctly structured table', () => {
    cy.visit('http://localhost:3000/exercise-5.html');
    cy.get('table').should('exist');
    cy.get('th').should('have.length', 2);
    cy.get('tr').should('have.length.at.least', 3);
  });
});
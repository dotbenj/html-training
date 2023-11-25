describe('Exercise 4 Test', () => {
  it('has correct links and images', () => {
    cy.visit('http://localhost:3000/exercise-4.html');
    cy.get('a').should('have.length.at.least', 2);
    cy.get('img').should('have.length.at.least', 2);
  });
});
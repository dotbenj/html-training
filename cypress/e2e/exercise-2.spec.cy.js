describe('Exercise 2 Test', () => {
  it('has correct headings and paragraph', () => {
    cy.visit('http://localhost:3000/exercise-2.html');
    cy.get('h1').should('exist');
    cy.get('h2').should('exist');
    // Continue for h3, h4, h5, and h6
    cy.get('p').should('exist');
  });
});
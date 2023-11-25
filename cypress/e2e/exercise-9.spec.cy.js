describe('Exercise 9 Test', () => {
  it('uses divs and spans correctly', () => {
    cy.visit('http://localhost:3000/exercise-9.html');
    cy.get('div').should('have.length.at.least', 2);
    cy.get('span').should('have.length.at.least', 3);
  });
});
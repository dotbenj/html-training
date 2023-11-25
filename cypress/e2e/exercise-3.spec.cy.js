describe('Exercise 3 Test', () => {
  it('has correct lists', () => {
    cy.visit('http://localhost:3000/exercise-3.html');
    cy.get('ol').find('li').should('have.length', 3);
    cy.get('ul').find('li').should('have.length', 3);
  });
});
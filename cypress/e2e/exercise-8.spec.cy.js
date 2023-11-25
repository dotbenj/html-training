describe('Exercise 8 Test', () => {
  it('has multimedia elements embedded correctly', () => {
    cy.visit('http://localhost:3000/exercise-8.html');
    cy.get('video').should('exist');
    cy.get('audio').should('exist');
  });
});
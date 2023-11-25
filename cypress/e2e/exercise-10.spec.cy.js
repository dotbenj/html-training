describe('Exercise 10 Test', () => {
  it('includes all required HTML elements', () => {
    cy.visit('http://localhost:3000/exercise-10.html');
    // Add checks for each element type
    cy.get('h1, h2, h3, h4, h5, h6').should('exist');
    cy.get('p').should('exist');
    cy.get('ul, ol').find('li').should('exist');
    cy.get('a').should('exist');
    cy.get('img').should('exist');
    cy.get('table').should('exist');
    cy.get('form').should('exist');
    cy.get('video').should('exist');
    cy.get('audio').should('exist');
    cy.get('div').should('exist');
    cy.get('span').should('exist');
  });
});
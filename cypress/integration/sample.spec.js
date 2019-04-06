// eslint-disable-next-line no-undef
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:8080');
    cy.get('input[data-parameter=Genre]').click();
    cy.get('li[data-sort-parameter=rating]').click();
    cy.get('img[data-film-id=412302]').click();
    cy.get('button.search-button-default-mode').click();
    cy.get('input[type=text]').type('search');
  });
});

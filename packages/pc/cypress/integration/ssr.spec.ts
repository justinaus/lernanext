// type definitions for Cypress object "cy"

/// <reference path="../support/index.d.ts" />

describe('SSR', function () {
  beforeEach(function () {
    cy.visit('/ssr');
  });

  it('진입 | 페이지가 정상 노출된다', () => {
    cy.findByText(
      'title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    ).should('exist');
  });
});

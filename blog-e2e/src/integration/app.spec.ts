import { getGreeting } from '../support/app.po';

describe('morteza-jamali-blog-blog', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome morteza-jamali-blog-blog');
  });
});

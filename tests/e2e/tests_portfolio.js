describe('Testing if I can access directly to the pages', () => {
	it('Testing direct access to the frontpage', () => {
		cy.visit('http://localhost:8080/');
		cy.contains('Fork me on GitHub !');
		cy.contains('justal.kevin@gmail.com');
		cy.contains('justal kevin');
	})

	it('Testing direct access to the portfolio', () => {
		cy.visit('http://localhost:8080/portfolio');
	})

	it('Testing direct access to a project', () => {
		cy.visit('http://localhost:8080/portfolio/portfolio');
	})
})

describe('Testing if necessary informations show in pages', () => {
	it('Personal informations on home page', () => {
		cy.visit('http://localhost:8080/');
		cy.contains('Fork me on GitHub !');
		cy.contains('justal.kevin@gmail.com');
		cy.contains('justal kevin');
	})

	it('Testing direct access to the portfolio', () => {
		cy.visit('http://localhost:8080/portfolio');
		cy.contains('Fork me on GitHub !');
		cy.contains('justal.kevin@gmail.com');
	})

	it('Testing direct access to a project', () => {
		cy.visit('http://localhost:8080/portfolio/portfolio');
		cy.contains('Fork me on GitHub !');
		cy.contains('justal.kevin@gmail.com');
	})
})

describe('Testing if the back button work on every pages', () => {
	it('Try coming back from portfolio to home page', () => {
		cy.visit('http://localhost:8080/portfolio/portfolio');
		cy.get('.back a').click();
		cy.url().should('eq', 'http://localhost:8080/portfolio');
		cy.get('.back a').click();
		cy.url().should('eq', 'http://localhost:8080/');
	})

	it('Testing direct access to the portfolio', () => {
		cy.visit('http://localhost:8080/portfolio');
		cy.get('.back a').click();
		cy.url().should('eq', 'http://localhost:8080/');
	})
})

describe('Testing if I can move from a page to another', () => {
	it('Try going from home to portfolio', () => {
		cy.visit('http://localhost:8080');
		cy.get('.links-open-door.left').click();
		cy.url().should('eq', 'http://localhost:8080/portfolio');
	})

	it('Try going from portfolio to a project', () => {
		cy.visit('http://localhost:8080/portfolio');
		cy.get('#PROJECTS li:nth-child(1) a').click();
		cy.url().should('eq', 'http://localhost:8080/portfolio/atlantic-grains');
	})
})

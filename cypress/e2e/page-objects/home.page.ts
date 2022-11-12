class HomePage {
	get getStarted() {
		return cy.get('#get-started');
	}

	get headerText() {
		return cy.get('h1.elementor-heading-title');
	}

	get menu() {
		return cy.get('#primary-menu');
	}

	open() {
		cy.visit('/');
	}

	checkUrlContains(urlContains: RegExp) {
		cy.url().should('match', urlContains);
	}

	checkHeaderTextIs(txt: string) {
		this.headerText.invoke('text').then((txt: string) => {
			expect(txt).to.eq(txt);
		});
	}

	checkMenuItemExists(menu_item: string) {
		this.menu.contains('li', menu_item).should('be.visible');
	}
}

export default new HomePage();

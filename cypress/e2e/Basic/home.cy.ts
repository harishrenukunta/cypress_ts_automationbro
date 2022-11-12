///<reference types='cypress'/>

context('Validate home page details', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	xit('Verify home page title and url', () => {
		cy.url().should('include', 'automationbro');

		cy.title().should('eq', 'Practice E-Commerce Site – Automation Bro');
	});

	xit('Verify Get Started page url', () => {
		cy.get('#get-started').click();

		cy.url().should('match', /get-started$/);
	});

	xit('Verify home page header', () => {
		//First method
		/*
		cy.get('h1.elementor-heading-title').should(
			'have.text',
			'Think different. Make different.'
		);
        */

		//Second method
		/*
		cy.get('h1.elementor-heading-title').should(($el) => {
			expect($el.text()).to.eql('Think different. Make different.');
		});
        */
		//Third method
		cy.get('h1.elementor-heading-title')
			.invoke('text')
			.then((txt: string) => {
				expect(txt).to.eq('Think different. Make different.');
			});
	});

	xit('Check menu item exists', () => {
		const menu_item_to_search = 'Contact';
		cy.get('#primary-menu')
			.contains('li', menu_item_to_search)
			.should('have.text', menu_item_to_search);
	});

	xit('Check menu items and the order of there appearance', () => {
		const menu_items = [
			'Home',
			'About',
			'Shop',
			'Blog',
			'Contact',
			'My Account',
			'download',
		];
		cy.get('#primary-menu')
			.find('li')
			.each((item, indx, list) => {
				expect(item.text().toLowerCase()).to.eql(
					menu_items[indx].toLowerCase()
				);
			});
	});

	xit('Fill support form and verify submission is successful', () => {
		cy.visit('/support-form');

		cy.get('#evf-680-field_lVizlNhYus-1').type('Harish');
		cy.get('#evf-680-field_XYnMdkQDKM-3').type('harish@harish.com');
		cy.get('#evf-680-field_xJivsqAS2c-2').type('My laptop is not booting');

		cy.get('#evf-680-field_82kaAPhrnW-6').select('Sales Team');

		cy.get('[type=checkbox]').check(['Hardware Issue', 'Software Issue']);

		//Date picker
		cy.get('#evf-680-field_s1KysSbUW6-8').click();
		cy.get(".dayContainer span[aria-label='November 11, 2022']").click();

		cy.get('#evf-680-field_YalaPcQ0DO-4').type(
			'I have got an urgent release to cater to. Please fix my issue at the earliest'
		);

		cy.get("button[type='submit']").click();

		cy.get("div[role='alert']").should(
			'contain.text',
			'Thanks for contacting us! We will be in touch with you shortly.'
		);
	});

	it('Capture header text in a variable', () => {
		cy.get('h1.elementor-heading-title')
			.invoke('text')
			.then((txt: string) => {
				console.log(`header txt: ${txt}`);
			});
	});

	it('Handling new tab', () => {
		cy.get('#contact-us').then(($el) => {
			$el.removeAttr('target');
			cy.wrap($el).click();
		});

		cy.contains('h1', 'Contact').should('be.visible');
	});
});

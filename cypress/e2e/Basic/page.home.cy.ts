///<reference types='cypress'/>

import homePage from '../page-objects/home.page';

context('Illustrate how to use page objects', () => {
	it('Verify get Started page', () => {
		homePage.open();
		homePage.getStarted.click();
		homePage.checkUrlContains(/get-started$/);
	});

	it('Verify home page header text', () => {
		homePage.checkHeaderTextIs('Think different. Make different.');
	});

	it('Check "Contact" menu item is in main menu', () => {
		homePage.checkMenuItemExists('Contact');
	});
});

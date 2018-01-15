var util = require('util')
var browser = require("protractor").protractor.browser;

describe('register function and login check', function() {
	var ptor;

	it('should add a Name as Sandeep', function() {
		browser.get('http://localhost:3000/#!/register');
		element(by.model('vm.user.firstName')).sendKeys('Sandeep');
		element(by.model('vm.user.lastName')).sendKeys('Sandeep');
		element(by.model('vm.user.username')).sendKeys('Sandeep');
		element(by.model('vm.user.password')).sendKeys('Sandeep');
		var registerbutton = element(by.xpath('html/body/div[1]/div/div/div/div/form/div[5]/button'));
		registerbutton.click()
	}, 10000);


	it('should add a Name as Sandeep', function() {
		browser.get('http://localhost:3000/#!/register');
		element(by.model('vm.user.firstName')).sendKeys('Sandeep');
		element(by.model('vm.user.lastName')).sendKeys('Sandeep');
		element(by.model('vm.user.username')).sendKeys('Sandeep');
		element(by.model('vm.user.password')).sendKeys('Sandeep');
		var registerbutton = element(by.xpath('html/body/div[1]/div/div/div/div/form/div[5]/button'));
		registerbutton.click().then(function () {
			
			element(by.model('vm.username')).sendKeys('Sandeep');
			element(by.model('vm.password')).sendKeys('Sandeep');
			var loginbutton = element(by.xpath('html/body/div[1]/div/div/div/div/form/div[3]/button'));
			loginbutton.click();
			var guru= element(by.xpath('html/body/div[1]/div/div/div/h1'));
			expect(guru.getText()).toEqual('Hi Sandeep!');

		});
	}, 10000);

	it('should logout', function() {
		
		browser.get('http://localhost:3000/#!/');
		var loginbutton = element(by.xpath('html/body/div[1]/div/div/div/p/a'));
		loginbutton.click();
		expect(browser.getCurrentUrl('http://127.0.0.1:8887/#!/login'))

	}, 10000);

	it('should login as Sandeep', function() {		

		browser.get('http://localhost:3000/#!/login');
		element(by.model('vm.username')).sendKeys('Sandeep');
		element(by.model('vm.password')).sendKeys('Sandeep');
		var loginbutton = element(by.xpath('html/body/div[1]/div/div/div/div/form/div[3]/button'));
		loginbutton.click();
		var guru= element(by.xpath('html/body/div[1]/div/div/div/h1'));
		expect(guru.getText()).toEqual('Hi Sandeep!');

	}, 10000);

	it('should login as Sirodia', function() {		

		browser.get('http://localhost:3000/#!/login');
		element(by.model('vm.username')).sendKeys('Sirodia');
		element(by.model('vm.password')).sendKeys('Sirodia');
		var loginbutton = element(by.xpath('html/body/div[1]/div/div/div/div/form/div[3]/button'));
		loginbutton.click();

		var elem = element(by.css('[ng-if="flash"]'));
		expect(elem.isPresent())
		expect(element(by.binding('flash.message')))

	}, 10000);
	
});

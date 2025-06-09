import BasePage from './base.page.js';

class HomePage extends BasePage {
  get acceptCookiesButton() {
    return $('#onetrust-accept-btn-handler');
  }

  get findYourCruiseButton() {
    return $('button[data-automation-id="en-find-cruise-desktop"]')
  }

  get searchButton() {
    return $('button[data-automation-id="en-Search"]')
  }

  async openHomePage(brandUrl) {
    await this.open(brandUrl);
    await this.maximize();
  }

  async acceptCookies() {
    await this.acceptCookiesButton.waitForClickable();
    await this.acceptCookiesButton.click();
  }

  async clickFindYourCruiseButton() {
    await this.performScroll(0, 200);
    await this.findYourCruiseButton.scrollIntoView();
    await this.findYourCruiseButton.click();
  }

  async clickSearchButton() {
    await this.searchButton.scrollIntoView();
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }

  async isHollandAmericaHomePageLoaded() {
    await this.waitPageLoad();
    await this.performScroll(0, 200);
    return this.findYourCruiseButton.isDisplayed();
  }

  async isSeabournHomePageLoaded() {
    await this.waitPageLoad();
    return this.searchButton.isDisplayed();
  }
}

export default new HomePage();

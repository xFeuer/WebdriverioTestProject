import BasePage from './base.page.js';

class SearchPage extends BasePage {
  get searchFilters() {
    return $('div[aria-label="cruise search filters"]');
  }

  async isSearchPageLoaded() {
    await this.waitPageLoad();
    return this.searchFilters.isDisplayed();
  }
}

export default new SearchPage();

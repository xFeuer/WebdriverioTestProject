export default class BasePage {
  async open(path) {
    await browser.url(path);
  }

  async getTitle() {
    return browser.getTitle();
  }

  async getUrl() {
    return browser.getUrl();
  }

  async maximize() {
    return browser.maximizeWindow();
  }

  async waitPageLoad() {
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Message on failure'
      }
    );
  }

  async performScroll(x, y) {
    await browser.scroll(x, y);
  }
}

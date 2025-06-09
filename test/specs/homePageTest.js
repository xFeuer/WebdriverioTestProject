import homePage from '../pageobjects/home.page.js';
import findACruisePage from '../pageobjects/search.page.js';

const brands = [
  {name: 'Holland America', url: 'https://www.hollandamerica.com'},
  {name: 'Seabourn', url: 'https://www.seabourn.com'},
];

brands.forEach(brand => {
  describe(`${brand.name} Search Cruise Test`, () => {

    it('should land on the Home Page', async () => {
      await homePage.openHomePage(brand.url);
    });

    it('should validate you are on the Home Page', async () => {
      switch (brand.name) {
        case 'Holland America':
          expect(await homePage.isHollandAmericaHomePageLoaded()).toBe(true);
          break;
        case 'Seabourn':
          expect(await homePage.isSeabournHomePageLoaded()).toBe(true);
          break;
      }
      const title = await homePage.getTitle();
      console.log(`Home Page Title: ${title}`);
    });

    it('should accept cookies', async () => {
      await homePage.acceptCookies();
    });

    switch (brand.name) {
      case 'Holland America':
        it('should click Find Your Cruise button', async () => {
          await homePage.clickFindYourCruiseButton();
        });
        break;
      case 'Seabourn':
        it('should click SEARCH button', async () => {
          await homePage.clickSearchButton();
        });
        break;
    }

    it('should land on the Cruise Search Page', async () => {
      const result = await findACruisePage.isSearchPageLoaded();
      expect(result).toBe(true);
      const url = await findACruisePage.getUrl();
      console.log(`Landed on: ${url}`);
    });
  });
});

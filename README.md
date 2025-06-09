# 📘 WebdriverIO UI Test Project

This project automates basic UI tests using [WebdriverIO](https://webdriver.io/) to validate navigation and interaction on cruise brand websites, as part of a technical assessment for a QA position.

## 🧾 Project Structure

```
root/
├── test/
│   ├── pageobjects/
│   │   ├── base.page.js
│   │   ├── home.page.js
│   │   └── search.page.js
│   └── specs/
│       └── homePageTest.js
├── package.json
├── wdio.conf.js
└── README.md
```

## 🧪 Test Cases

Implemented in `homePageTest.js` with Mocha and WebdriverIO, the test suite performs:

- ✅ Open the homepage (e.g., [seabourn.com](https://www.seabourn.com))
- ✅ Assert that the page loads and key element is displayed
- ✅ Interact with a UI element (e.g., click “Find Your Cruise”)
- ✅ Validate redirection to the next page
- ✅ Check content on the new page (e.g., search filters)

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) >= 18
- Firefox (used with Geckodriver in this setup)

### Setup

```bash
git clone <repo-url>
cd WebdriverioTestProject
npm install
npm run wdio
```

## 🧾 Reports

This project uses the **Allure Reporter**. To view reports:

```bash
npx allure open allure-report
```

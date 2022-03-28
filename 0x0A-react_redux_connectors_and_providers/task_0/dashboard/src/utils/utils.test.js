import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"
import { StyleSheetTestUtils } from 'aphrodite';

describe("getFullYear", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });
    it("returns correct year", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });

    it("When passed true", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("When passed false", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLatestNotification", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
      });
      afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
      });

    it("getting string back", () => {
        expect(getLatestNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
    });
});

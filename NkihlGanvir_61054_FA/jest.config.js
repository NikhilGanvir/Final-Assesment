const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
    ...jestConfig,
    moduleNameMapper: {
        // Adjust path name accordingly
        '^lightning/uiRelatedListApi$': '<rootDir>/force-app/test/jest-mocks/lightning/uiRelatedListApi'},
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver']
};

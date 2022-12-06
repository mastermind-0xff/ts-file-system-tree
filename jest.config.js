/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: {
    "\\.tsx?$": "ts-jest",
  },
  roots: [
    "<rootDir>/__tests__"
  ],
};
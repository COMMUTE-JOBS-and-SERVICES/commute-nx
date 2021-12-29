module.exports = {
  displayName: "api-utility",
  preset: "../../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  testEnvironment: "node",
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/api/utility",
  setupFilesAfterEnv: ["<rootDir>/../test/src/lib/setup-files-after-env/setupFilesAfterEnv.ts"],
  globalSetup: "<rootDir>/../test/src/lib/global-setup/globalSetup.ts",
};

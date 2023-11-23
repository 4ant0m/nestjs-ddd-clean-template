// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    "setupFiles": ["./test/setEnvVars.js"],
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: ".",
    maxWorkers: 1,
    testEnvironment: "node",
    testRegex: ".e2e-spec.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    moduleNameMapper: {
        "^@app(.*)$": "<rootDir>/src/app/$1",
        "^@auth(.*)$": "<rootDir>/src/app/auth/$1",
        "^@domain(.*)$": "<rootDir>/src/app/domain/$1",
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.e2e.json",
        },
    },
};
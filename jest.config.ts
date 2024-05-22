export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      "^.+\\.tsx?$": "ts-jest" 
      // procesar archivos `*.tsx` con `ts-jest`
    },
    setupFilesAfterEnv: [
      './setupTests.ts'
    ]
  };
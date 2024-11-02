###### jest
```
npm init -y
npm init jest
// tests under __tests__

"@jest/globals": "^29.7.0",
    "jest": "^29.7.0",
    "ts-jest": "^29.2.5"
npm i --save-dev jest ts-jest @jest/globals ts-node

jest.config.ts
    preset: 'ts-jest'
```

assert vs matchers
- assert statements - used to assert using matchers
expect(obj).toBetruthy()
- assert functions - 
    assert.strictEqual(sum(2, 4), 6)

- matchers
    matches the given value with the ret value

cast to any[obj as any]

###### doubles in JEst
mocking
- test db
- mock db queries
- pretend objects used in the place of real objects
    - dummy objects
    - Fakes
    - Stubs
    - Spies
    - Mocks
    mocks and spies have in common



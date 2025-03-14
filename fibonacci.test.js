import { fibonacci } from './fibonacci.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fibonacci av 1 er 1', () => {
    assert.strictEqual(fibonacci(1), 1);
})
test('fibonacci av 2 er 1', () => {
    assert.strictEqual(fibonacci(2), 1);
})
test('fibonacci av 3 er 2', () => {
    assert.strictEqual(fibonacci(3), 2);
})
test('fibonacci av 5 er 5', () => {
    assert.strictEqual(fibonacci(5), 5);
})

test('fibonacci av 10 er 55', () => {
    assert.strictEqual(fibonacci(10), 55);
})


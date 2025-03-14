import { fakultet } from './fakultet.js';
import test from 'node:test';
import * as assert from "node:assert";

test('fakultet av 5 er 120', () => {
    assert.strictEqual(fakultet(5), 120);
})
test('fakultet av negative tall er NAN', () => {
    assert.strictEqual(fakultet(-5), NaN);
})
test('fakultet av 0 er NAN', () => {
    assert.strictEqual(fakultet(0), NaN);
})
test('fakultet av 1 er 1', () => {
    assert.strictEqual(fakultet(1), 1);
})
test('fakultet av 2 er 2', () => {
    assert.strictEqual(fakultet(2), 2);
})
test('fakultet av 3 er 6', () => {
    assert.strictEqual(fakultet(3), 6);
})


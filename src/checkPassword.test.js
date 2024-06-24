'use strict';

describe(`Function 'checkPassword':`, () => {
  const checkPassword = require('./checkPassword');

  it(`should be declared`, () => {
    expect(checkPassword).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = checkPassword('Password1!');

    expect(typeof result).toBe('boolean');
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass1!aa')).toBe(true);
  });

  it(`should return 'true' for the valid password with 8 characters`, () => {
    expect(checkPassword('Pass1!aa')).toBe(true);
  });

  it(`should return 'true' for the valid password with 16 characters`, () => {
    expect(checkPassword('Password1!AaBbCc')).toBe(true);
  });

  it('should return false for a password shorter than 8 characters', () => {
    expect(checkPassword('Pass1!a')).toBe(false);
  });

  it('should return false for a password longer than 16 characters', () => {
    expect(checkPassword('Password1!AaBbCcD')).toBe(false);
  });

  it('should return false for a password without a digit', () => {
    expect(checkPassword('Password!')).toBe(false);
  });

  it('should return false for a password without an uppercase letter', () => {
    expect(checkPassword('password1!')).toBe(false);
  });

  it('should return false for a password without a lowercase letter', () => {
    expect(checkPassword('PASSWORD1!')).toBe(false);
  });

  it('should return false for a password without a special character', () => {
    expect(checkPassword('Password1')).toBe(false);
  });

  it('should return false for a password containing a space', () => {
    expect(checkPassword('Password 1!')).toBe(false);
  });

  it('should return false for a password'
    + 'containing Cyrillic characters', () => {
    expect(checkPassword('Password1!А')).toBe(false);
  });
});

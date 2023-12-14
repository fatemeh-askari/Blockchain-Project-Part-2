const Wallet = require('./index')

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  it('hav a balance', () => {
    expect(wallet).toHaveBeenCalled(balance)
  });

  it('hav a publicKey', () => {
    expect(wallet).toHaveBeenCalled(publicKey)
  });
});
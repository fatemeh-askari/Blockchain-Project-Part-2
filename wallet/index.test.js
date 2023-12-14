const Wallet = require('./index')

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  it('hav a balance', () => {
    expect(wallet).toHaveProperty('balance')
  });

  it('hav a publicKey', () => {
    console.log(wallet.publicKey);
    expect(wallet).toHaveProperty('publicKey')
  });
});
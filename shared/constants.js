const { BN } = require('./utils');

const ACCOUNT_ACCESS_TYPES = {
  none: new BN(0),
  owner: new BN(1),
  delegate: new BN(2),
  invalid: new BN(3),
};

const ACCOUNT_SALT_MSG_PREFIX = '0x01';
const ACCOUNT_SALT_MSG_PREFIX_UNSAFE = '0x02';

const ZERO_ADDRESS = `0x${'0'.repeat(40)}`;

module.exports = {
  ACCOUNT_ACCESS_TYPES,
  ACCOUNT_SALT_MSG_PREFIX,
  ACCOUNT_SALT_MSG_PREFIX_UNSAFE,
  ZERO_ADDRESS,
};

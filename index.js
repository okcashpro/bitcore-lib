'use strict';

var okcore = module.exports;

// module information
okcore.version = 'v' + require('./package.json').version;
okcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of okcore-lib found. ' +
      'Please make sure to require okcore-lib and check that submodules do' +
      ' not also include their own okcore-lib dependency.';
    throw new Error(message);
  }
};
okcore.versionGuard(global._okcore);
global._okcore = okcore.version;

// crypto
okcore.crypto = {};
okcore.crypto.BN = require('./lib/crypto/bn');
okcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
okcore.crypto.Hash = require('./lib/crypto/hash');
okcore.crypto.Random = require('./lib/crypto/random');
okcore.crypto.Point = require('./lib/crypto/point');
okcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
okcore.encoding = {};
okcore.encoding.Base58 = require('./lib/encoding/base58');
okcore.encoding.Base58Check = require('./lib/encoding/base58check');
okcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
okcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
okcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
okcore.util = {};
okcore.util.buffer = require('./lib/util/buffer');
okcore.util.js = require('./lib/util/js');
okcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
okcore.errors = require('./lib/errors');

// main bitcoin library
okcore.Address = require('./lib/address');
okcore.Block = require('./lib/block');
okcore.MerkleBlock = require('./lib/block/merkleblock');
okcore.BlockHeader = require('./lib/block/blockheader');
okcore.HDPrivateKey = require('./lib/hdprivatekey.js');
okcore.HDPublicKey = require('./lib/hdpublickey.js');
okcore.Networks = require('./lib/networks');
okcore.Opcode = require('./lib/opcode');
okcore.PrivateKey = require('./lib/privatekey');
okcore.PublicKey = require('./lib/publickey');
okcore.Script = require('./lib/script');
okcore.Transaction = require('./lib/transaction');
okcore.URI = require('./lib/uri');
okcore.Unit = require('./lib/unit');

// dependencies, subject to change
okcore.deps = {};
okcore.deps.bnjs = require('bn.js');
okcore.deps.bs58 = require('bs58');
okcore.deps.Buffer = Buffer;
okcore.deps.elliptic = require('elliptic');
// okcore.deps.scryptsy = require('scryptsy');
okcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
okcore._HDKeyCache = require('./lib/hdkeycache');
okcore.Transaction.sighash = require('./lib/transaction/sighash');

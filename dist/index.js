/* eslint-disable */

module.exports = {
  "Account": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "devices",
        "outputs": [
          {
            "name": "isOwner",
            "type": "bool"
          },
          {
            "name": "exists",
            "type": "bool"
          },
          {
            "name": "existed",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xe7b4cac6"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "device",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "isOwner",
            "type": "bool"
          }
        ],
        "name": "DeviceAdded",
        "type": "event",
        "signature": "0x3525178f8d4a5c0dc1e61a0ede8d6a7a9ea67a23ec515983bbb940be4b419650"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "device",
            "type": "address"
          }
        ],
        "name": "DeviceRemoved",
        "type": "event",
        "signature": "0x15c62ec158a6c18af42b447791266b9b0764ba2a6df610890d4da85c3d4185db"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "recipient",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "name": "response",
            "type": "bytes"
          }
        ],
        "name": "TransactionExecuted",
        "type": "event",
        "signature": "0x012ae8711b8dc37e405d8e422569d1ee78d52d76bc8fe2a9ea81ffe17569e51a"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_device",
            "type": "address"
          },
          {
            "name": "_isOwner",
            "type": "bool"
          }
        ],
        "name": "addDevice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x811d54dc"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_device",
            "type": "address"
          }
        ],
        "name": "removeDevice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x1f7b6324"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_recipient",
            "type": "address"
          },
          {
            "name": "_value",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "executeTransaction",
        "outputs": [
          {
            "name": "_response",
            "type": "bytes"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x3f579f42"
      }
    ],
    "byteCodeHash": "0xc8446c8040e8f89949f2fb2a86739d570187f4d4fb30b220d83f62928ee177f4",
    "addresses": {}
  },
  "AccountProvider": {
    "abi": [
      {
        "constant": false,
        "inputs": [
          {
            "name": "_rootNode",
            "type": "bytes32"
          }
        ],
        "name": "verifyEnsRootNode",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x04aa74cb"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_node",
            "type": "bytes32"
          }
        ],
        "name": "addr",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x3b3b57de"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_rootNode",
            "type": "bytes32"
          }
        ],
        "name": "addEnsRootNode",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x416ae7ff"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "guardian",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x452a9320"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "ensRootNodes",
        "outputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "verified",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x7ff4dfd0"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_rootNode",
            "type": "bytes32"
          }
        ],
        "name": "releaseEnsRootNode",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xbb223ce4"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_node",
            "type": "bytes32"
          },
          {
            "name": "_addr",
            "type": "address"
          }
        ],
        "name": "setAddr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xd5fa2b00"
      },
      {
        "inputs": [
          {
            "name": "_guardian",
            "type": "address"
          },
          {
            "name": "_accountContractCode",
            "type": "bytes"
          },
          {
            "name": "_accountProxy",
            "type": "address"
          },
          {
            "name": "_ens",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "AccountCreated",
        "type": "event",
        "signature": "0x805996f252884581e2f74cf3d2b03564d5ec26ccc90850ae12653dc1b72d1fa2"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "rootNode",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "EnsRootNodeAdded",
        "type": "event",
        "signature": "0x44a96c3928a5c6ba670970f10868d09235a6b7a5770c2ebbf244e2228e546f5c"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "rootNode",
            "type": "bytes32"
          }
        ],
        "name": "EnsRootNodeVerified",
        "type": "event",
        "signature": "0x3c1e12021a68eb78df268e4fed874721bb38a7b278d9029db9a7b2056592baf2"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "rootNode",
            "type": "bytes32"
          }
        ],
        "name": "EnsRootNodeReleased",
        "type": "event",
        "signature": "0xc98be4d6a6f25550c39fb4e66d7ecd9ed01b3a569eff063b00e6608270d31f3d"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "node",
            "type": "bytes32"
          },
          {
            "indexed": false,
            "name": "addr",
            "type": "address"
          }
        ],
        "name": "AddrChanged",
        "type": "event",
        "signature": "0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_ensLabel",
            "type": "bytes32"
          },
          {
            "name": "_ensNode",
            "type": "bytes32"
          },
          {
            "name": "_refundAmount",
            "type": "uint256"
          },
          {
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "createAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xc6147fc8"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_accountId",
            "type": "uint256"
          },
          {
            "name": "_device",
            "type": "address"
          },
          {
            "name": "_ensLabel",
            "type": "bytes32"
          },
          {
            "name": "_ensNode",
            "type": "bytes32"
          },
          {
            "name": "_refundAmount",
            "type": "uint256"
          }
        ],
        "name": "unsafeCreateAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x188b954f"
      }
    ],
    "byteCodeHash": null,
    "addresses": {
      "4081": "0xdF8bfD1aa88223230cBfc1a98F3b3B1457442cA1"
    }
  },
  "AccountProxy": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "accounts",
        "outputs": [
          {
            "name": "nonce",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x5e5c06e2"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "account",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "nonce",
            "type": "uint256"
          }
        ],
        "name": "NewAccountOwnerCall",
        "type": "event",
        "signature": "0xabdd351df118af9f4fddc77805d3855fc9b508fd37b13ed9bda0027c30d7aafb"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_account",
            "type": "address"
          },
          {
            "name": "_nonce",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          },
          {
            "name": "_fixedGas",
            "type": "uint256"
          },
          {
            "name": "_signature",
            "type": "bytes"
          }
        ],
        "name": "forwardAccountOwnerCall",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x09403cb6"
      }
    ],
    "byteCodeHash": null,
    "addresses": {
      "4081": "0xF2c00e3ddF389CCd216ddBfA791b092D00EFB54e"
    }
  },
  "VirtualPaymentManager": {
    "abi": [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "bytes32"
          }
        ],
        "name": "payments",
        "outputs": [
          {
            "name": "value",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x0716326d"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "guardian",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x452a9320"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "depositWithdrawalLockPeriod",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0x525fb194"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "deposits",
        "outputs": [
          {
            "name": "value",
            "type": "uint256"
          },
          {
            "name": "withdrawalUnlockedAt",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function",
        "signature": "0xfc7e286d"
      },
      {
        "inputs": [
          {
            "name": "_guardian",
            "type": "address"
          },
          {
            "name": "_depositWithdrawalLockPeriod",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "NewDeposit",
        "type": "event",
        "signature": "0x2cb77763bc1e8490c1a904905c4d74b4269919aca114464f4bb4d911e60de364"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "receiver",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "NewWithdrawal",
        "type": "event",
        "signature": "0x6e2e05fb6a732995d6952d9158ca6b75f11cc6bf5a4af943aa1eb475a249440b"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "receiver",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "unlockedAt",
            "type": "uint256"
          }
        ],
        "name": "NewWithdrawalRequest",
        "type": "event",
        "signature": "0x4c9080ec1aaa52271e38e548e49fca5ee3a853d5a59759393034ac00ca2ea7d7"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "sender",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "receiver",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "NewPayment",
        "type": "event",
        "signature": "0xf62e438cfa75c1fc743ada55b6e1437d24c0e0f83ddf8a7b62ef765e65285e86"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          },
          {
            "name": "_receiver",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          },
          {
            "name": "_senderSignature",
            "type": "bytes"
          },
          {
            "name": "_guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "depositPayment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x2438f435"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_sender",
            "type": "address"
          },
          {
            "name": "_receiver",
            "type": "address"
          },
          {
            "name": "_id",
            "type": "uint256"
          },
          {
            "name": "_value",
            "type": "uint256"
          },
          {
            "name": "_senderSignature",
            "type": "bytes"
          },
          {
            "name": "_guardianSignature",
            "type": "bytes"
          }
        ],
        "name": "withdrawPayment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0xa26ee3ae"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "withdrawDeposit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x117df088"
      }
    ],
    "byteCodeHash": null,
    "addresses": {
      "4081": "0x8ddC60e705bADD3b3018e19fcc063462c2460224"
    }
  }
};

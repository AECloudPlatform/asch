module.exports = {
  table: 'accounts',
  tableFields: [
    { name: 'address', type: 'String', length: 50, primary_key: true, not_null: true },
    { name: 'name', type: 'String', length: 50, index: true },
    { name: 'xas', type: 'BigInt', default: 0 },
    { name: 'publicKey', type: 'String', length: 64 },
    { name: 'secondPublicKey', type: 'String', length: 64 },
    { name: 'isLocked', type: 'Number', default: 0 },
    { name: 'isAgent', type: 'Number', default: 0 },
    { name: 'isDelegate', type: 'Number', default: 0 },
    { name: 'role', type: 'Number', default: 0 },
    { name: 'lockHeight', type: 'BigInt', default: 0 },
    { name: 'agent', type: 'String', length: 50 },
    { name: 'weight', type: 'BigInt', default: 0 },
    { name: 'agentWeight', type: 'BigInt', default: 0 },
    // { name: 'str1', type: 'String', length: 256, index: true },
    // { name: 'str2', type: 'String', length: 256 },
    // { name: 'str3', type: 'String', length: 256 },
    // { name: 'str4', type: 'String', length: 256 },
    // { name: 'str5', type: 'String', length: 256 },
    // { name: 'num1', type: 'Number', },
    // { name: 'num2', type: 'Number' },
    // { name: 'num3', type: 'Number' },
    // { name: 'num4', type: 'Number' },
    // { name: 'num5', type: 'Number' },
    // { name: 'bigint1', type: 'BigInt' },
    // { name: 'bigint2', type: 'BigInt' },
    // { name: 'bigint3', type: 'BigInt' },
    // { name: 'bigint4', type: 'BigInt' },
    // { name: 'bigint5', type: 'BigInt' },
    // { name: 'text1', type: 'Text', },
    // { name: 'text2', type: 'Text' },
    // { name: 'text3', type: 'Text' },
    // { name: 'text4', type: 'Text' },
    // { name: 'text5', type: 'Text' }
  ]
}
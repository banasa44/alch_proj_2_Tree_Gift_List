const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

let i = Math.floor(Math.random()*niceList.length)
let name=niceList[i]
const index = niceList.findIndex(n => n === name);

const merkleTree = new MerkleTree(niceList);
const proof = merkleTree.getProof(index);

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 


  try {
    const { data: gift } = await axios.post(`${serverUrl}/gift`, { name:name, proof:proof });
    console.log({ gift });
  } catch (error) {
    console.log(error.response.data);
  }
}

main();
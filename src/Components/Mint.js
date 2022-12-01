import React from 'react'
import {ethers} from 'ethers';
import { Reddio } from '@reddio.com/js';

import '../CSS/DeployContract.css'

function Mint() {


    const mintTicket = async () => {
    
        let m = await fetch('https://api-dev.reddio.com/v1/mints', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'X-API-Key': 'rk-0037101b-606a-43e5-a98a-9703e0e179bc'
          },
          // body: '{ "contract_address":"0x175a48b997C85696d3FA8EFa8D17F3AA4C79A9D5", "stark_key":"0x102112ef1ee5cf579429ee723fedc367cde3189715000e99611dc2d6fb5dfb7", "amount":"1"}',
          body: JSON.stringify({
              'contract_address': '0x57539844eb3B3b19Cc46193119f9f6f2173432b1',
              'stark_key': '0x102112ef1ee5cf579429ee723fedc367cde3189715000e99611dc2d6fb5dfb7',
              'amount': '5'
          })
      });
          console.log("m- ", m)
          
          window.alert("NFT minted successfully!")
    
      };

      const generateKey = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', [])
        generateKey2()
        
      }
    
      const generateKey2 = async () => {
        return await Reddio.keypair.generateFromEthSignature();
      };


  return (
    <div>
        <h1>Mint your NFT ticket with L2</h1>
        <button onClick={generateKey}>Generate Key</button>
        <br />
        <br />
        <br />
        <button onClick={mintTicket}>Mint NFT Ticket</button>

    </div>
  )
}

export default Mint
import { AddressZero } from '@ethersproject/constants';
import sdk from './1-initialize-sdk.js';

(async() => {
  try {
    // Deploy a standard ERC-20 contract
    // An ERC20 token contract keeps track of fungible tokens: any one token is exactly equal to any other token; no tokens have special rights or behavior associated with them
    const tokenAddress = await sdk.deployer.deployToken({
      name: "SnowDAO Governance Token",
      symbol:"Snow",
      // Snow doesn't cost anything so we set the value to 0
      primary_sale_recipient: AddressZero,
    });
    console.log("Successfully deployed token module, address:", tokenAddress)
  } catch (error) {
    console.error("Failed to deploy token module", error);
  }
})();
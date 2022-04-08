import sdk from './1-initialize-sdk.js';
import { MaxUint256 } from '@ethersproject/constants';

const editionDrop = sdk.getEditionDrop("0x51581489ec63fB7578D5570958CfA25D45245DBD");

(async () => {
  try {
    // define the claim conditions
    const claimConditions = [{
      // when people can start claiming NFTs(now)
      startTime: new Date(),
      maxQuantity: 50_000,
      price: 0,
      quantityLimitPerTransaction: 1,
      // This makes it so that people are only able to claim once
      waitInSeconds: MaxUint256,
    }]

    await editionDrop.claimConditions.set("0", claimConditions);
    console.log("Successfully set claim condition!")
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
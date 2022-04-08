import sdk from "./1-initialize-sdk.js";
import { readFileSync } from 'fs';

const editionDrop = sdk.getEditionDrop("0x895B7C28B027d4d135CD52afc6e3d44a51434Aa2");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Snow Ribbon",
        description: "This NFT will give you access to the SnowDAO!",
        image: readFileSync("scripts/ribbon.png"),
      },
    ]);
    console.log("Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create a new NFT", error);
  }
})();
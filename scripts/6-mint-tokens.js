import sdk from "./1-initialize-sdk.js";

// Add ERC-20 contract address 
const token = sdk.getToken("0x405431970c71AdF0121fEBdCD1bd0bA78285bb2A");

(async () => {
  try {
    // max # of tokens that will be issued might be automatically set to 1,000,000

    // Price of token
    const amount = 10;
    
    // Interact with the deployed ERC-20 contract and mint the tokens
    await token.mint(amount);
    const totalSupply = await token.totalSupply();
    console.log("There are:", totalSupply.displayValue, "Snow tokens in circulation");
  } catch (error) {
    console.log("Failed to issue token", error);
  }
})();
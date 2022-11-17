import { ethers } from "ethers"
import "dotenv/config"

const ADDRESS = "0x353a5BF1e513EDA2A1d85FBB18ab1F565BAba679"
const ABI =
  '[{"inputs":[{"internalType":"address","name":"priceFeedAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"FundMe__NotOwner","type":"error"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MINIMUM_USD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cheaperWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fund","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"funder","type":"address"}],"name":"getAddressToAmountFunded","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getFunder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceFeed","outputs":[{"internalType":"contract AggregatorV3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"s_funders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
  const contract = new ethers.Contract(ADDRESS, ABI, provider)

  // 1. 读取WETH合约信息
  console.log()

  // 1. 读取合约的链上信息
  console.log(`合约地址: ${ADDRESS}`)
  const MINIMUM_USD = await contract.MINIMUM_USD()
  console.log("MINIMUM_USD: ", MINIMUM_USD)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

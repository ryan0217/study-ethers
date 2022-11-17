import { ethers } from "ethers"
import "dotenv/config"

const main = async () => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

  // 1. 查询 vitalik 在Goerli测试网的ETH余额
  const balance = await provider.getBalance("vitalik.eth")
  console.log(
    `Goerli ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`
  )

  // 2. 查询provider连接到了哪条链
  const network = await provider.getNetwork()
  console.log("Network", network)

  // 3. 查询区块高度
  const blockNumber = await provider.getBlockNumber()
  console.log("BlockNumber", blockNumber)

  // 4. 查询当前gas price
  const gasPrice = await provider.getGasPrice()
  console.log("GasPrice", gasPrice)

  // 5. 查询当前建议的gas设置
  const feeData = await provider.getFeeData()
  console.log("FeeData", feeData)

  // 6. 查询区块信息
  const block = await provider.getBlock(0)
  console.log("Block", block)

  // 7. 给定合约地址查询合约bytecode
  const code = await provider.getCode(
    "0x353a5BF1e513EDA2A1d85FBB18ab1F565BAba679"
  )
  console.log("Code", code)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

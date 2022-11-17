import { ethers } from "ethers"

const main = async () => {
  const provider = ethers.getDefaultProvider()
  const balance = await provider.getBalance("vitalik.eth")
  console.log(
    `\nEth balance of vitalik: \n${ethers.utils.formatEther(balance)}`
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

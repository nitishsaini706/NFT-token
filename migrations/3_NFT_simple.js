const NFTSimple = artifacts.require('NFTSimple.sol')

module.exports = deployer => {
  deployer.deploy(NFTSimple)
}

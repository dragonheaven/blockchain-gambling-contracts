var CreditManager = artifacts.require("./CreditManager.sol");
var SlotGame = artifacts.require("./SlotGame.sol");
var RouletteGame = artifacts.require("./RouletteGame.sol");
var SportGameEuropeanBetting = artifacts.require("./SportGameEuropeanBetting.sol");
var SportGameAsianBetting = artifacts.require("./SportGameAsianBetting.sol");
var SportGameOverUnderBetting = artifacts.require("./SportGameOverUnderBetting.sol");
var SportGameP2PBetting = artifacts.require("./SportGameP2PBetting.sol");

var CreditManagerAddress = "";

module.exports = function (deployer, network, accounts) {

  if (CreditManagerAddress == "") {
    deployer.deploy(CreditManager).then(function (instance) {

      deployer.deploy(SlotGame, CreditManager.address).then(function (instance) {
        CreditManager.deployed().then(function (instance) {
          instance.addFriend(SlotGame.address);
        })
      });

      deployer.deploy(RouletteGame, CreditManager.address).then(function (instance) {
        CreditManager.deployed().then(function (instance) {
          instance.addFriend(RouletteGame.address);
        })
      });

      deployer.deploy(SportGameEuropeanBetting, CreditManager.address).then(function (instance) {
        CreditManager.deployed().then(function (instance) {
          instance.addFriend(SportGameEuropeanBetting.address);
        })
      });

      deployer.deploy(SportGameAsianBetting, CreditManager.address).then(function (instance) {
        CreditManager.deployed().then(function (instance) {
          instance.addFriend(SportGameAsianBetting.address);
        })
      });

      deployer.deploy(SportGameOverUnderBetting, CreditManager.address).then(function (instance) {
        CreditManager.deployed().then(function (instance) {
          instance.addFriend(SportGameOverUnderBetting.address);
        })
      });

    });
  } else {

    deployer.deploy(SlotGame, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(SlotGame.address);
    });
    deployer.deploy(RouletteGame, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(RouletteGame.address);
    });

    deployer.deploy(SportGameEuropeanBetting, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(SportGameEuropeanBetting.address);
    });

    deployer.deploy(SportGameAsianBetting, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(SportGameAsianBetting.address);
    });

    deployer.deploy(SportGameOverUnderBetting, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(SportGameOverUnderBetting.address);
    });

    deployer.deploy(SportGameP2PBetting, CreditManagerAddress).then(function (instance) {
      CreditManager.at(CreditManagerAddress).addFriend(SportGameP2PBetting.address);
    });

  }

};
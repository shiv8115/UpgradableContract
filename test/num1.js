const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("NUM1 Contract Upgradeability", () => {
  let num1, num2;

  before(async () => {
    // Deploy NUM1 contract
    const NUM1 = await ethers.getContractFactory("NUM1");
    num1 = await upgrades.deployProxy(NUM1, [10], {
      initializer: "update",
    });
    await num1.deployed();

    // Upgrade NUM1 to NUM2
    const NUM2 = await ethers.getContractFactory("NUM2");
    await upgrades.upgradeProxy(num1.address, NUM2);
    num2 = await ethers.getContractAt("NUM2", num1.address);
  });

  it("should initialize num with the correct value", async () => {
    const expectedNum = 10;
    const actualNum = (await num1.get()).toNumber();

    expect(actualNum).to.equal(expectedNum);
  });

  it("should update num with the correct value", async () => {
    const newNum = 20;
    await num1.update(newNum);

    const expectedNum = 20;
    const actualNum = (await num1.get()).toNumber();

    expect(actualNum).to.equal(expectedNum);
  });

  it("should upgrade to NUM2 successfully", async () => {
    const expectedNum = 20;
    const actualNum = (await num2.get()).toNumber();

    expect(actualNum).to.equal(expectedNum);
  });

  it("should increment num correctly in NUM2", async () => {
    await num2.increment();

    const expectedNum = 21;
    const actualNum = (await num2.get()).toNumber();

    expect(actualNum).to.equal(expectedNum);
  });
});

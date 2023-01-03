import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function deploy() {
  const HW = await ethers.getContractFactory("HelloWorld");
  const hello = await HW.deploy();
  await hello.deployed();

  return hello;
}

async function sayHello(hello: any) {
  console.log("Say hello: ", await hello.hello());
}

deploy().then(sayHello);

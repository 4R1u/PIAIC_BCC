pragma solidity ^0.5.0;
contract Address{
uint total=0;
address payable private myAddress = 0xaD335c3c503aBd738Af9a7690FB41f9fadcBE91A;
function setAddress(address payable add) public {
myAddress = add;
}
function getBalance() public view returns(uint){
return myAddress.balance;
}
function getAddress() public view returns(address){
return myAddress;
}
function pay() public payable{
myAddress.transfer(msg.value);
}
function BSDegree(bool degree) public returns(bool){
return degree;
}
function enrol() public{
total =total+1;
pay();
}
function getTotal() public returns(uint){
return total;
}
}

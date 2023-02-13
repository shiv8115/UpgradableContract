// SPDX-License-Identifier: MIT
pragma solidity =0.8.17;


 /// @title Counter Contract
 /// @dev This contract stores and retrieves a single unsigned integer value.
 /// @notice update function allows the caller to update the stored value with a new one.
 /// @notice get function allows the caller to retrieve the current stored value.
 /// @author Shivam Singh

contract NUM1{
    uint256 private num;
    //Update function takes one input and update the num variable.
    function update(uint256 _num) public{
        num= _num;
    }

    // this function is used to retrive the value of num variable
    function get() public view returns(uint256){
        return num;
    }
}
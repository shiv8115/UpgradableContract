// SPDX-License-Identifier: MIT
pragma solidity =0.8.17;

/// @title Counter Contract
/// @dev This contract stores and retrieves a single unsigned integer value.
/// @author Shivam Singh

contract NUM2{
    uint256 private num;

    /// @dev This function updates the value of the `num` variable with the input `_num`.
    /// @param _num The new value to be assigned to `num`.
    function update(uint256 _num) public{
        num= _num;
    }

    /// @dev This function retrieves the current value of the `num` variable.
    /// @return The current value of `num`.
    function get() public view returns(uint256){
        return num;
    }

    /// @dev This function increments the value of the `num` variable by 1.
    function increment() public{
        num++;
    }
}
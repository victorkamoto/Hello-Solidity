//SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.7.3;

contract HelloSolidity {
    //events
    //states
    //functions

    event messageChanged(string oldMsg, string newMsg);

    string public message;

    constructor(string memory firstMessage) {
        message = firstMessage;
    }

    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;

        emit messageChanged(oldMsg, newMessage);
    }
}

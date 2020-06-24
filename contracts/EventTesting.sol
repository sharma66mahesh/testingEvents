pragma solidity >=0.4.22 <0.7.0;

contract EventTesting {
    string fName;
    uint age;
    
    event InstructorCreated (
        string name,
        uint age
    );
    
    function setInstructor(string memory _fName, uint _age) public {
        fName = _fName;
        age = _age;
        emit InstructorCreated(fName, age);
    }
    
    function getInstructor() public view returns (string memory, uint) {
        return (fName, age);
    }
}
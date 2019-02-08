// Example 1 : Count the number of o's
let countZeros = (str) => {
    let count = 0;
    for(let i = 0; i<=str.length-1; i++){
        let ch = str.charAt(i);
        if(ch === 'o'){
            count++;
        }
    }
    return count;
};

// Example 2 : Reverse String
let reverseStr = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};


// Example 3 : isPalindrome
let isPalindrome = (str) => {
    return str === reverseStr(str);
};

// Example 4 : convert to Palindrome
// AB -> ABA
// ABC -> ABCBA
// BAD -> BADAB
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i= str.length-2; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Example 5 : TriangleOne String
let triangleOne = (str) => {
     let tempStr = '';
     for(let i = 1; i<= str.length; i++){
         tempStr += `${str.substr(0,i)} \n`;
     }
     return tempStr;
};

// Example 5 : TriangleTwo String
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=0 ; i<number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};

// Example 5 : TriangleThree String
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};

// Example 6 : TriangleFour String
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1;i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};



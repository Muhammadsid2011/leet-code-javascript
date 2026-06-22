// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
function reverse(x = 123){
    let ans;
    let strNum = x.toString();
    let arrNum = strNum.split("").reverse();
    if(x < 0){
        arrNum.pop()
        ans = arrNum.join("");
        ans = parseInt(ans)
        ans = ans - ans - ans;
    }
    else{
        ans = arrNum.join("");
        ans = parseInt(ans);
    }
    if(ans < -2147483648 || ans > 2147483647){
        return 0;
    }
    return ans;
}
console.log(reverse(123))
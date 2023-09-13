//There are two methods I like using here
//The first is using sets because a set is a collection of unique values.
//each value can only occur once and hold any data type
var containsDuplicate = function(nums) {
    const s = new Set(nums); 
    return s.size !== nums.length
};

//The second method using the sorting method
//This is nice because by default the sort method arranges 
//the elements in an array from smallest to largest value
//If there is a duplicate value, it'd be adjacent.
var containsDuplicate = function(nums) {
    nums.sort();
     for (let i = 0; i < nums.length - 1; i++) {
         if (nums[i] === nums[i + 1]) {
             return true;
         }
     }
     
     return false;
 };
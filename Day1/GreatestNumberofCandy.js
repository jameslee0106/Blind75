//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies);
  for(i = 0; i < candies.length; i++) {
      if((candies[i] + extraCandies >= max)) {
          candies[i] = true;
      }
      else{
          candies[i] = false;
      }
  }
  return candies;
};

//alternatively:
// var kidsWithCandies = function(candies, extraCandies) {

//   let max = 0;

//   for(i = 0; i < candies.length; i++) {
//     if(max < candies[i]) {
//       max = candies[i];
//     }
//   }

//   for(i = 0; i < candies.length; i++) {
//       if((candies[i] + extraCandies >= max)) {
//           candies[i] = true;
//           console.log(max);
//       }
//       else{
//           candies[i] = false;
//       }
//   }
//   return candies;
// };

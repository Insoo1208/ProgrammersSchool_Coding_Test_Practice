function solution(clothes) {
  let hash = {};
  let answer = 1;

  for (const parts of clothes) {
    hash[parts[1]] = hash[parts[1]] ? hash[parts[1]] + 1 : 2;
  };

  for (const key in hash) {
    answer *= hash[key];
  };
  return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
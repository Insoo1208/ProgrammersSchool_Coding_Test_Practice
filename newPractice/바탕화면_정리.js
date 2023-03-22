function solution(wallpaper) {
  const answer = wallpaper.reduce((acc, str, idx) => {
    const lutarget = [...str].indexOf('#');
    const rdtarget = [...str].lastIndexOf('#');
    if (lutarget === -1) return acc;
    
    acc[0] = idx < acc[0] ? idx : acc[0];
    acc[1] = lutarget < acc[1] ? lutarget : acc[1];
    
    acc[2] = idx + 1 > acc[2] ? idx + 1 : acc[2];
    acc[3] = rdtarget + 1 > acc[3] ? rdtarget + 1 : acc[3];
    
    return acc;
  }, [50, 50, 0, 0]);
  return answer;
}

console.log(solution([".#...", "..#..", "...#."]));
console.log(solution(["..........", ".....#....", "......##..", "...##.....", "....#....."]));
console.log(solution([".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]));
console.log(solution(["..", "#."]));
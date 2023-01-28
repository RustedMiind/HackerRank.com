function climbingLeaderboard(ranked, player) {
  // Write your code here
  const rankInDense = (array, score) => {
    let leaderboard = [...array];
    leaderboard.push(score);
    console.log(leaderboard);
    let noRepeatRanking = [];
    for (let i in leaderboard) {
      // console.log(leaderboard.includes(leaderboard[i]));
      if (!noRepeatRanking.includes(leaderboard[i])) {
        noRepeatRanking.push(leaderboard[i]);
      }
    }
    noRepeatRanking.sort(function (a, b) {
      return b - a;
    });
    return noRepeatRanking.indexOf(score) + 1;
  };
  return player.map((score) => {
    // console.log(score, rankInDense(ranked, score));
    return rankInDense(ranked, score);
  });
}
console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);

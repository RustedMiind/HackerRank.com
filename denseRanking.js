function climbingLeaderboard(ranked, player) {
  return player.map((playerScore) => {
    let leaderboard = [...ranked, playerScore];
    return (
      leaderboard
        .filter((item, index) => leaderboard.indexOf(item) === index)
        .sort(function (a, b) {
          return b - a;
        })
        .indexOf(playerScore) + 1
    );
  });
}
console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);

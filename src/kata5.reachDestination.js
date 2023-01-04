const reachDestination = (distance, speed) => {
  var time = distance / speed;
  var timeRoundedUp = Math.ceil(time * 2) / 2;
  return "I should be there in " + timeRoundedUp + " hours.";
};
module.exports = reachDestination;

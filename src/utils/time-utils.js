/**
 * A function to get the human time
 * @param {Time} time the current time
 * @param {int} split_afternoon the afternoon cutoff
 * @param {int} split_evening the eventing cutoff
 */
export function getHumanTime(time, split_afternoon = 12, split_evening = 17) {
  let greeting = null; //return g

  const currentHour = parseFloat(time.getHours());

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    greeting = 'Afternoon';
  } else if (currentHour >= split_evening) {
    greeting = 'Evening';
  } else {
    greeting = 'Morning';
  }

  return greeting;
}

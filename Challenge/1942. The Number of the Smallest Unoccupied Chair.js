function smallestChair(times, targetFriend) {
  const n = times.length;
  let chairs = [];
  let occupied = []; // priority queue to track when chairs are free

  // Populate chairs heap with all potential chair numbers

  for (let i = 0; i < n; i++) {
    chairs.push(i);
  }
  console.log(chairs);

  // Create a list of events where friends either arrive or leave
  let events = [];
  for (let i = 0; i < times.length; i++) {
    events.push([times[i][0], "arrive", i]); // Arrival event
    events.push([times[i][1], "leave", i]); // Leaving event
  }

  // Sort events by time, and in case of tie:
  //   - process leaving before arriving
  events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] === "leave" ? -1 : 1;
    return a[0] - b[0];
  });

  let assignedChairs = new Array(n); // To track which friend got which chair

  for (let [time, eventType, friendId] of events) {
    if (eventType === "leave") {
      // When a friend leaves, free up their chair
      chairs.push(assignedChairs[friendId]);
      chairs.sort((a, b) => a - b); // Keep it a min-heap
    } else if (eventType === "arrive") {
      // When a friend arrives, assign them the smallest available chair
      const smallestAvailableChair = chairs.shift(); // Remove the smallest available chair
      assignedChairs[friendId] = smallestAvailableChair; // Assign this chair to the friend

      // If this is the friend we care about (targetFriend), return the chair number
      if (friendId === targetFriend) {
        return smallestAvailableChair;
      }
    }
  }
}

const times = [
  [1, 4],
  [2, 3],
  [4, 6],
];
const targetFriend = 1;
console.log(smallestChair(times, targetFriend));

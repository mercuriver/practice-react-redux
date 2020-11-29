const friends = [
  { name: "Friend-1", age: 15 },
  { name: "Friend-2", age: 20 },
  { name: "Friend-3", age: 25 },
  { name: "Friend-4", age: 30 },
  { name: "Friend-5", age: 35 },
  { name: "Friend-6", age: 40 },
  { name: "Friend-7", age: 45 },
  { name: "Friend-8", age: 50 },
  { name: "Friend-9", age: 55 },
  { name: "Friend-10", age: 60 },
  { name: "Friend-11", age: 65 },
  { name: "Friend-12", age: 70 },
  { name: "Friend-13", age: 75 },
];

const timelines = [
  { desc: "Timeline-1", likes: 15 },
  { desc: "Timeline-2", likes: 20 },
  { desc: "Timeline-3", likes: 25 },
  { desc: "Timeline-4", likes: 30 },
  { desc: "Timeline-5", likes: 35 },
  { desc: "Timeline-6", likes: 40 },
  { desc: "Timeline-7", likes: 45 },
  { desc: "Timeline-8", likes: 50 },
  { desc: "Timeline-9", likes: 55 },
  { desc: "Timeline-10", likes: 60 },
  { desc: "Timeline-11", likes: 65 },
  { desc: "Timeline-12", likes: 70 },
  { desc: "Timeline-13", likes: 75 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);

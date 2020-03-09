// Code your solutions in this file
function writeCards(names, eventname) {
  let messages = [];
  for (let i = 0; i < names.length; i++){
  messages.push(`Thank you ${names[i]} for the wonderful birthday gift!`);
  }
  return messages;
}

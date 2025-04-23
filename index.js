// Code your solutions in this file
function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  function writeCards(names, event) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Welcome, ${names[i]}, to this  ${event} home!`);
    }
  
    return messages;
  }
  
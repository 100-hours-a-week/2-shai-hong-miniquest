function messageMaker(startmessage) {
  return {
    makeMessag: (additionalMessage) => {
      return `${startmessage} ${additionalMessage}`;
    },
  };
}

const message = messageMaker('hi');
console.log(message.makeMessag('shai'));

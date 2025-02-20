const helper = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello, Async/Await!');
    }, 1000);
  });
};

const waitForMessage = async () => {
  const result = await helper();
  return console.log(result);
};

waitForMessage();

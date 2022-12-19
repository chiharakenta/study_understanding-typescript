const button = document.querySelector('button');

const clickHandler = (message: string) => {
  console.log('Clicked!' + message);
};

button?.addEventListener('click', clickHandler.bind(null, 'You are welcome!'));

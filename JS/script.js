'use strict';

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0]; //この[0]って何？
    target.textContent = word;
    location = 0;
  }

  const words = [
    'red', 'green', 'blue', 'purple', 'black', 'white'
  ]
  let word;
  let location = 0;
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');


  document.addEventListener('click', () => {
    if(isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  // 引数(e)の扱い方？？意味？？
  document.addEventListener('keydown',(e) => {
    if(e.key !== word[location]){
      return;
    }
    if(e.key === word[location]){
      location++;
      target.textContent = '_'.repeat(location) + word.substring(location);
    }

    if (location === word.length) {
      if(words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `finished ${elapsedTime} seconds`;
        return;
      }
      setWord();
    }
  });
}
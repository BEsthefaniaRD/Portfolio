let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75
});
 
typewriter
  .pauseFor(2000)
  .typeString('DESARROLLO SITIOS WEB')
  .deleteChars(21)

  .typeString('HTML')
  .pauseFor(500)
  .deleteChars(4)
  
  .typeString('CSS')
  .pauseFor(500)
  .deleteChars(3)

  .typeString('JAVASCRIPT')
  .pauseFor(200)
  .deleteChars(10)

  .typeString('BOOTSTRAP')
  .pauseFor(200)
  .deleteChars(9)
  .pauseFor(2000)

  .start();

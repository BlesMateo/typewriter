let typeWriter = function() {
  const sentence = "I really want a beef taco with cilantro today";
  let timer = 0;
  let count = 0;
  for (const char of sentence) {
    count = count + 1; //increment value of count by 1
    timer = timer + 50; // timer increments by 50 ms
    setTimeout(() => {
    process.stdout.write(char);
    }, timer);
  }
}

typeWriter();
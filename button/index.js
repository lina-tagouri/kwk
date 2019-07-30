 var button = $('.button');
 var message = $('.message');

 var choiceArray = ["netflix", "hulu", "youtube"];

button.on("click", choices);

function choices() {
  console.log("Hello");
  var random = choiceArray[Math.floor(Math.random() * choiceArray.length)];
  message.text(random);
}

  // var random = Math.random() * choiceArray.length;
  // var rounded = Math.floor(random);
  // var choiceArray2 = choiceArray[rounded];

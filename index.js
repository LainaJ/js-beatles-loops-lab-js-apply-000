// add solution here//
//1) Beatles Loops returns an array of strings containing what instruments each musician plays

function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

//2)
function johnLennonFacts(array) {
  var i = 0
  const factsArray = ["He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ]
while (i < factsArray.length) {
  factsArray [i] + "!!!";
}
return factsArray;
}

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
function johnLennonFacts() {
  var i = 0
  var factsArray = ["He was the last Beatle to learn to drive"
      +  "He was never a vegetarian"
      +  "He was a choir boy and boy scout"
      +  "He hated the sound of his own voice"];
while (i < 4) {
  factsArray [i] += "!!!"; i++;
}
return factsArray;
}

// add solution here//
//1) Beatles Loops returns an array of strings containing what instruments each musician plays

function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) {
      emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return emptyArray;
}

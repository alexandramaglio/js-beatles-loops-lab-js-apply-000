// add solution here

theBeatlesPlay = function(musicians, instruments) {
  var beatles = [];
  for(var n=0; n< musicians.length; n++) {
    beatles[n] = musicians[n] + " plays " + instruments[n];
  }
  return beatles;
}


johnLennonFacts = function(factarray) {
  var n = 0;
  var excitedfacts = [];
  while (n < factarray.length) {
    excitedfacts[n] = factarray[n] + "!!!";
    n++;
  }
  return excitedfacts;
}
function findLongestWord(str) {
  
  var words = str.split(' ');
  var maxL = 0;
  
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxL) {
      maxL = words[i].length;      
    }
  }

  return maxL;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
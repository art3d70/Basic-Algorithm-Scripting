function reverseString(str) {
  
  var array = str.split('');
  array.reverse();
  array = array.join('');
  return array;
}

reverseString("hello");
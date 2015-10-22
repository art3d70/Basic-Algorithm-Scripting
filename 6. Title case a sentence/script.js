function titleCase(str) {

	var newStr = str.toLowerCase().split(" ");
	
	for(var i = 0; i < newStr.length; i++){

		var u = newStr[i].charAt(0).toUpperCase();
		newStr[i] = newStr[i].replace(newStr[i].charAt(0),u);


  }
  
  return newStr.join(" ");
}

titleCase("I'm a little tea pot");
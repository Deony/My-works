//Repeat a string repeat a string
		function repeatStringNumTimes(str, num) {
		  var i, newStr='';
		  for (i=1; i<=num; i+=1) {
		    newStr+= str;        
		  }

		  return newStr;
		}

		console.log(repeatStringNumTimes("*", 3));



//Truncate a string
		function truncateString(str, num) {
		  var newStr,
		      dot = '...',
		      sizeStr = str.length-1,
		      sizeDot = dot.length;
		  
		  if ( num <= 3 ) {    
		    newStr = str.slice(0, num) + dot;
		  }
		  else if ( sizeStr > num ) {
		    newStr = str.slice(0, num - sizeDot) + dot;
		  }
		  
		  else {
		    newStr = str.slice(0, num);    
		  }
		    
		  return newStr;
		}

		console.log(truncateString("Absolutely Longer", 2));
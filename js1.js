//Repeat a string repeat a string
		function repeatStringNumTimes(str, num) {
		  var i, newStr='';
		  for (i=1; i<=num; i+=1) {
		    newStr+= str;        
		  }

		  return newStr;
		}

		console.log(repeatStringNumTimes("*", 3));

// //or
		function repeatStringNumTimes(str, num) {  
 		 return (num>0) ? str.repeat(num) : str='';
		}

		console.log(repeatStringNumTimes("abc", -2));



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



//task 1
	function createEl(){
		var arr = [1, 2, 3, 4, 5, 6],
			myUl = document.createElement('ul'),
			myLi,
			i,
			size=arr.length;

			for ( i = 0; i < size; i+=1 ) {
				myLi = document.createElement('li');	
				myUl.appendChild(myLi);
				myLi.innerHTML = arr[i];
			}

			document.body.appendChild(myUl);
	}


//task 2
	function clone(){
		var input=document.getElementById('INPUT');
		var cl=input.cloneNode();
		document.body.appendChild(cl);
	}

//task 3
	function checkingPositiveNum(arr){

		function pos(arr) {
			return arr < 0;
		}

		return arr.some(pos);		
	}

	console.log(checkingPositiveNum([1, -2, 3, 2, -4, 5]));
//Reverse a string
		// function revString(str){
		// 	var strSplit=str.split('');
		// 	var strRev=strSplit.reverse();
		// 	var strJoin=strRev.join('');
		// 	return strJoin;
		// }
		// console.log(revString('Hello!'));

		// //or
		// function rev2String(str){
		// 	return str.split('').reverse().join('');
		// }
		// console.log(rev2String('HowAreYou'));



//Factorialize a number
		// function factorialize(num){
		// 	if(num===1){
		// 		return 1;
		// 	}
		// 	else{
		// 		return num*factorialize(num-1);
		// 	}
		// }
		// console.log('Factorial is equal to '+factorialize(5));



//Find the longest word in a string
		// function findLongestWord(str){
		// 	var newStr=str.split(' ',lengthNewStr),
		// 		lengthNewStr=newStr.length,
		// 		i,
		// 		maxStr=0;
				
		// 	for(i=0;i<lengthNewStr;i+=1){
		// 		if(newStr[i].length>maxStr){
		// 			maxStr=newStr[i].length;
		// 		}

		// 	}
		// 	return maxStr;
		// }

		// console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));


//Title case a sentence
		// function titleCase(str){
		// 	str=str.toLowerCase();
		// 	var newStr2=str.split(' ',lengthNewStr2),
		// 		lengthNewStr2=newStr2.length,
		// 		j;

		// 	for(j=0;j<lengthNewStr2;j+=1){
		// 		newStr2[j]=newStr2[j].charAt(0).toUpperCase()+newStr2[j].slice(1);
		// 	}

		// 	return newStr2.join(' ');
		// }

		// console.log(titleCase(" HERE IS MY HANDLE HERE IS MY SPOUT"));



//Mean value
		// function mean(arr){
		// 	var sum=0, i;

		// 	for(i=0;i<arr.length;i+=1){
		// 		sum+=arr[i];
		// 	}

		// 	return sum/arr.length;
		// }

		// console.log(mean([1, 4, 5, 9, 7, 7]))


//Positive numbers. Square root.
		// function positive(arr){
		// 	var i, b=0;
		// 	for(i=0;i<arr.length-b;i+=1){
		// 		if(arr[i]>0){
		// 			arr[i]=Math.sqrt(arr[i]);
		// 		}
		// 		else{
		// 			arr.splice(i,1);
		// 		}
		// 	}

		// 	return arr;
		// }

		// console.log(positive([9, -3, 4, -9, 100]))




//Return largest numbers in arrays
		function largestNumbers(arr){
			var i, j, maxNumber = 0, newArr = [];

			for (i = 0; i<arr.length; i+=1){

				for (j=0; j<arr[i].length; j+=1) {

					if (arr[i][j] > maxNumber) {
						maxNumber = arr[i][j];
					}
					
				}
				newArr.push(maxNumber);
				maxNumber=0;
			}

			return newArr;
		}

		console.log(largestNumbers([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


//Confirm the ending
		function confirmEnding (str, target) {
			return str.substr(str.length - target.length, target.length) === target;
		}

		confirmEnding("Open sesame", "same");


//Функция, которая считает и выводит количество своих вызовов
function count () {
	var counts = 1;

	return function() {
		return counts++;
	}
}

var makeCounter = count();

console.log(makeCounter());
console.log(makeCounter());
console.log(makeCounter());


//Fibonacci
function fibonacci(n){
	var i = 1,
		a = 1,
		b = 2,
		c,
		arr = [];

	if ( i<=n ) {
		arr.push(0);
		i++;
	}

	for ( ; i <= 3; i+= 1 ) {		
		arr.push(c = a);
	}

	if ( i<=4 ) {
		arr.push(c + a);
	}

	for ( ; i <= n; i+= 1 ) {
		c = a + b;
		arr.push(c);
		a = b;
		b = c;

		if ( i===n ) {
			break;
		}

	}
	console.log('Itteration is equal to ' + ++i);
	return arr;
}
console.log( fibonacci(10) );
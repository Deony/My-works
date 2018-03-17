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
		function findLongestWord(str){
			var newStr=str.split(' ',lengthNewStr),
				lengthNewStr=newStr.length,
				i,
				maxStr;
				
			if(newStr[0].length>newStr[1].length){
				maxStr=newStr[0].length;
			}
			else{
				maxStr=newStr[1].length;
			}

			for(i=2;i<lengthNewStr;i+=1){
				if(maxStr>=newStr[i].length){
					//maxStr;
				}
				else{
					maxStr=newStr[i].length;
				}
			}
			return maxStr;
		}

		console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));


//Title case a sentence
		function titleCase(str){
			str=str.toLowerCase();
			var newStr2=str.split(' ',lengthNewStr2),
				lengthNewStr2=newStr2.length,
				j, n;

			for(j=0;j<lengthNewStr2;j+=1){
				newStr2[j]=newStr2[j].charAt(0).toUpperCase()+newStr2[j].slice(1);
			}

			return newStr2.join(' ');
		}

		console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
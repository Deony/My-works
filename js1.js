//3. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul)
// var myButton = document.getElementById('myButton'),
// 	myUl = document.getElementById('myUl'),
// 	newList, tar;

// myButton.addEventListener('click', Adding, false);
// myUl.addEventListener('click', AddLi, false);

// function Adding() {
// 	newList = document.createElement('li');
// 	newList.textContent = 'item';
// 	myUl.appendChild(newList);
// }


// function AddLi(event) {
// 		event.target.textContent += '!';
// }


//4. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
// function checking(arr) {
// 	var i, size = arr.length - 1;

// 	for(i = 0; i < size; i+=1) {
// 		var n = (arr[i]==arr[i+1] ? true : false);

// 		if(n) {
// 			break;
// 		}

// 	}

// 	return n;
// }

// console.log(checking([1,2,5,7,9,10,5]));



//or
// var arr = [1, 5, 10, 6, 6, 8, 20], result;

//     result = 'no';
//     for(i = 0; i < arr.length; i+=1) {
//       if(i > 0 && arr[i] === arr[i - 1]){
//       result = 'yes';
//       break;
//     } 
//   }
//   console.log(result);



// //5. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(digit) {
// 	var string = digit.toString(),
// 		a = string.split(""),
// 		i,
// 		sum = 0,
// 		size = string.length;


// 	for(i = 0; i < size; i+= 1) {
// 		sum+= Number(a[i]);
// 	}

// 	return sum;
// }

// console.log(getDigitsSum(115));


//or
// function getDigitsSum(num){
//  var strNum = String(num),
//  	i,
//  	sum = 0,
//  	size = strNum.length;

//  for(i = 0; i < size; i+=1){
//   sum += +strNum[i];
//  }
//  return sum;
// }

// getDigitsSum(52);



//Mutations
function mutation(arr) {
  var str1 = arr[0].toLowerCase(),
        str2 = arr[1].toLowerCase(),
        i,
        length2 = str2.length,
        result;
  
   for(i = 0; i < length2; i+=1){
      result = str1.indexOf(str2[i]);
      console.log('result='+result+' i='+i+' str1='+str1+' str2='+str2);
      if (result === -1){
        return false;
      }
    }

  return true;  
}

console.log(mutation(["hello", "neo"]));



//Falsy Bouncer
function bouncer(arr) {
	var val = arr.filter(function(num) {
		return num!==null && num!==false && num!=='' && num!==undefined && num!==0 && (!isNaN(num) || typeof(num)=='string');
	});

	return val;
}

bouncer([7, "ate", "", false, 9]);



//Everything Be True
function truthCheck(collection, pre) {
	for(i=0; i<collection.length;i+=1){
		console.log(collection[i][pre]);
		if(pre in collection[i] === false || collection[i][pre] === 0 || collection[i][pre] === null || collection[i][pre] === '' || collection[i][pre] === undefined) {
			return false;
		}		
	}
	return true;

}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
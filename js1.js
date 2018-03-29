//1. Chunky Monkey
function chunkArrayInGroups(arr, size) {
  
  var k=0, i, j, newArr=[[]],
      arrSize = arr.length,
      row = Math.ceil(arr.length/size);

	if(k < arrSize) {

	    for (i = 0; i < row; i+=1){
	    	newArr[i]=[];

			for (j = 0; j < size; j+=1) {
				if(arr[k] == null){
					break;
				}
				console.log(i,j);
				newArr[i][j]=arr[k];
				++k;
			}			

		}
	}
  

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);




//2. Slasher Flick
function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  

  return newArr;
}

slasher(["burgers", "fries", "shake"], 1);


//3. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul)
var myButton = document.getElementById('myButton'),
	myUl = document.getElementById('myUl'),
	newList, tar;

myButton.addEventListener('click', Adding, false);

function Adding() {
	newList = document.createElement('li');
	newList.textContent = 'item';
	myUl.appendChild(newList);
}


myUl.onclick = function(event) {
		tar = event.target;
		tar.textContent += '!';
}


//4. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'
function checking(arr) {
	var i, size = arr.length - 1;

	for(i = 0; i < size; i+=1) {
		var n = (arr[i]==arr[i+1] ? true : false);

		if(n) {
			break;
		}

	}

	return n;
}

console.log(checking([1,2,5,7,9,10,5]));



//5. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(digit) {
	var string = digit.toString(),
		a = string.split(""),
		i, sum = 0,
		size = string.length;


	for(i = 0; i < size; i+= 1) {
		sum+= Number(a[i]);
	}

	return sum;
}

console.log(getDigitsSum(115));
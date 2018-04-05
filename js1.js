// Seek and Destroy
//----------------------------------------------------------------------
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
	var size = arguments.length,
		res, result, i = 1, arg = [];

	arg = Array.from(arguments).splice(1);

	res = arr.filter(function(num) {
		result = arg.indexOf(num);

		if (result === -1){
			return num;
		}

	});

	return res;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Where do I belong
// --------------------------------------------------------------------
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {

arr.sort(function(a, b) {
	return a - b;
});

	var i,
		size = arr.length,
		min, max,
		result;

	for(i = 0; i < size; i += 1) {
		if(arr[i] < num && arr.indexOf(arr[i] === size-1)) {
			result = arr.indexOf(arr[i]) + 1;
		}
		else if(arr[i] < num) {
			result = size + 1;
		}
		else if(arr[i] === num) {
			result = arr.indexOf(arr[i]);
			break;
		}
		else if(arr[i] > num) {
			result = arr.indexOf(arr[i]);
			break;
		}
	}

	return result;

}

console.log(getIndexToIns([2, 5, 10], 15));


// Sum All Numbers in a Range
// -------------------------------------------------------------------
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
	var min = Math.min(arr[0], arr[1]),
		max = Math.max(arr[0], arr[1]),
		result;

	for(i = min+1; i < max; i += 1) {
		arr.push(i);
	}

	result = arr.reduce(function(sum, num) {
		return sum + num;
	});
	console.log(arr);
	return result;
}

console.log(sumAll([5, 10]));
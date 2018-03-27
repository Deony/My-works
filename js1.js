//Chunky Monkey
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




//Slasher Flick
function slasher(arr, howMany) {
  var newArr = arr.slice(howMany);
  

  return newArr;
}

slasher(["burgers", "fries", "shake"], 1);
function countDown(mins){
		var sec=60,
			counter=document.getElementById('counter');
			mins--;

	var clc=setInterval(function(){
		if(sec>=0){
			counter.innerHTML=mins.toString()+':'+sec.toString();
			if(sec<10){
				counter.innerHTML=mins.toString()+':0'+sec.toString();
			}
		}

		else{
			if(mins>=1){
				mins--;
				sec=60;
			}
			else{
				clearInterval(clc);
				alert('FINISHED');
			}
		}
		
		sec--;

	}, 1000);


}
countDown(2);

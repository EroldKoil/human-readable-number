module.exports = function toReadable (number) {
	let request = '';
	
  if(number == undefined || number == null ){
	  return null;
  }
  
  if(number == 0){
	  return 'zero';
  }
  
  let n100 = Math.floor(number/100);
  let n10 = Math.floor((number - n100*100)/10)
  let n1 = number - n100*100 - n10*10;
  
  if(n100 > 0){
	  request += getNumber0_9(n100) + ' hundred';
	  if(n1 > 0 || n10 > 0){
		  request +=' ';
	  }
  }
  
  if(n10 == 1){
	request += getNumber10_19(n1);
  }
  else {
	  if(n10 > 1){
		  request += getNumber20_90(n10);
		  if(n1 > 0){
			  request +=' ';
		  }
	  } 
	 if(n1 > 0){
		  request += getNumber0_9(n1);
	  }
  }
  
  return request;
}

function getNumber0_9(n){
	switch(n){
		case 1: 
			return 'one';
		case 2: 
			return 'two';  
		case 3: 
			return 'three';  
		case 4: 
			return 'four';  
		case 5: 
			return 'five';  
		case 6: 
			return 'six';  
		case 7: 
			return 'seven';  
		case 8: 
			return 'eight';  
		case 9: 
			return 'nine';  
 }
}

function getNumber10_19(n){
	switch(n){
		case 0: 
			return 'ten';
		case 1: 
			return 'eleven';
		case 2: 
			return 'twelve';  
		case 3: 
			return 'thirteen'; 
		case 4: 
			return 'fourteen';  
		case 5: 
			return 'fifteen';  
		case 6: 
			return 'sixteen';  
		case 7: 
			return 'seventeen';  
		case 8: 
			return 'eighteen';  
		case 9: 
			return 'nineteen';  
 }
}

function getNumber20_90(n){
	switch(n){
		case 2: 
			return 'twenty';  
		case 3: 
			return 'thirty';  
		case 4: 
			return 'forty';  
		case 5: 
			return 'fifty';  
		case 6: 
			return 'sixty';  
		case 7: 
			return 'seventy';  
		case 8: 
			return 'eighty';  
		case 9: 
			return 'ninety';  
 }
}
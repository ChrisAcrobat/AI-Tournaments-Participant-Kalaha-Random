'use strict'
function tock(messageEvent){
	let length = (messageEvent.data.length/2) - 2;
	let index;
	do{
		index = Math.round(Math.random()*length);
	}while(0 == messageEvent.data[index]);
	postMessage(index);
}
onmessage = messageEvent => {
	onmessage = tock;
	postMessage(null);
};

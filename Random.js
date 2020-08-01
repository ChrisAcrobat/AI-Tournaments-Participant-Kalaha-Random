'use strict'
onmessage = messageEvent => {
	let length = (messageEvent.data.gameboard.length/2) - 2;
	let index;
	do
	{
		index = Math.round(Math.random()*length);
	}while(0 == messageEvent.data.gameboard[index])); // Readded ")" to force a syntax error. Testing arena error handling.
	postMessage(index);
};

'use strict'
ParticipantHelper.onmessage = message => {
	let data = message.data;
	let length = (data.length/2) - 2;
	let index;
	do{
		index = Math.round(Math.random()*length);
	}while(0 == data[index]);
	message.respond(index);
}

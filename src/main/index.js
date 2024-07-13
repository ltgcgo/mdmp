"use strict";

let b64FromBytes = (b64Data) => {
	let dataString = atob(b64Data.replaceAll('-', '+').replaceAll('_', '/'));
	let u8Buf = new Uint8Array(dataString.length);
	for (let i = 0; i < u8Buf.length;
};

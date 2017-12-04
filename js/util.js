/* util functions */

function len(s) {
	return encodeURIComponent(s).replace(/(?:%..){3}/g, "xx").length;
}

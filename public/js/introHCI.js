'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	ga('create', UA-31415926-1', 'auto');
	ga('send', 'pageview');
	ga('send','event','like','click');
}
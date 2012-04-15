# Prevents errors in browsers where console is not available
# and also in browsers where you have to open developer tools for console object to be present
if ( typeof console === 'undefined' )
{
	window.console = {};
}
if ( typeof console.log === 'undefined' )
{
	window.console.log = function(){};
}

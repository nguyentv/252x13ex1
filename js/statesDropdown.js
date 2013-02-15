// function will run when page is loaded
window.onload = function() 
{

	// variable to get csv file 
	var statesList = new XMLHttpRequest();
	
	// opens the csv file
	statesList.open("GET", "js/states.csv", false);
	statesList.send();
	
	var states = statesList.responseText.replace(/\n/g,',').split(/,/)
	var select = document.getElementById("state");
	var i = 0;
	var j = 1;
	while (i < states.length)
	{
		select.options[j] = new Option(states[i], states[i+1]);
		i+=2;
		++j;
	}
	select.options.remove(select.options.length - 1);
}
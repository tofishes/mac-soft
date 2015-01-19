
function updateInnerHTML(id, html)
{
	var heading = document.getElementById(id); 
    heading.innerHTML = html; 
}
function removeSuggest()
{
	$('#suggest').fadeOut();
}

function dosearch(word)
{
	window.framewnd.doQuery_(word);
}

function goURL(url)
{
	window.framewnd.goURL_(url);
}

function goTab(tabname, word)
{
	window.framewnd.goTab_andWord_(tabname, word);
}

function hideSuggest()
{
	$('#suggest').hide();
}

function showSuggest()
{
	if ($('#suggest').is(":hidden"))
		$('#suggest').slideDown();
}
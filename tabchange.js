	var current_tab = 'tab1';
	var current_mode = 'day';
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
function changeTab(tab) {
	if(current_tab != tab)
	{document.getElementById(current_tab).style.display = 'none';	
	document.getElementById('link_'+current_tab).setAttribute("style","background: grey;");
    setAttributes(document.getElementById('li_'+current_tab),{"class": ""});
	current_tab = tab;
	document.getElementById(current_tab).style.display = 'block';
    document.getElementById('link_'+current_tab).setAttribute("style","background: lightgray;");
    setAttributes(document.getElementById('li_'+current_tab),{"class": "active"});
}

}

	var current_tab1 = 'taba';
	

function changeTab1(tab) {
	if(current_tab1 != tab)
	{document.getElementById(current_tab1).style.display = 'none';	
	document.getElementById('link_'+current_tab1).setAttribute("style","background: grey;");
    setAttributes(document.getElementById('li_'+current_tab1),{"class": ""});
	current_tab1 = tab;
	document.getElementById(current_tab1).style.display = 'block';
    document.getElementById('link_'+current_tab1).setAttribute("style","background: lightgray;");
    setAttributes(document.getElementById('li_'+current_tab1),{"class": "active"});
}

}

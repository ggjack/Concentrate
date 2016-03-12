var state=false;

function toggle(){
	state=!state;
	if(state){
		chrome.browserAction.setIcon({path: "concentrate_ON.png"});
	}
	else{
		chrome.browserAction.setIcon({path: "concentrate_logo.png"});

	}
}

chrome.browserAction.onClicked.addListener(toggle);
//toggle();

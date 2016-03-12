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

if(state){
console.log("sup");
chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["*://youtube.com/*"]
    },
    ["blocking"]
);
}

//toggle();

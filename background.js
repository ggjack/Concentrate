var state=false;

function toggle(){
	state=!state;
	if(state){
		chrome.browserAction.setIcon({path: "concentrate_ON.png"});
	}
	else{
		chrome.browserAction.setIcon({path: "concentrate_logo.png"});
	}
	console.log("swag");
}

chrome.browserAction.onClicked.addListener(toggle);


chrome.webRequest.onBeforeRequest.addListener(
function(e){
	if(state){return{
        redirectUrl : chrome.extension.getURL("redirect.html")
	 };}
	else{ return;
		}
	 },
   {
       urls: ["*://*/*"]
},
   ["blocking"]

);


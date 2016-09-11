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
       urls: ["*://www.facebook.com/*",
		"*://www.youtube.com/*",
                 "*://www.reddit.com/*",
                 "*://www.crunchyroll.com/*",
                 "*://www.dailymotion.com/*",
                 "*://www.amazon.com/*",
                 "*://www.amazon.ca/*",
                 "*://www.newegg.com/*",
                 "*://www.newegg.ca/*",
                 "*://www.ebay.com/*",
                 "*://www.ebay.ca/*",
                 "*://www.mangahen.com/*",
                 "*://www.myanimelist.net/*",
                 "*://www.tetrisfriends.com/*",
                 "*://www.nhl.com/*",
                 "*://www.nba.com/*",
                 "*://www.atpworldtour.com/*",
		 "*://www.lolking.net/*",
		 "*://www.twitter.com/*",
		 "*://www.twitch.tv/*",
		 "*://www.dramafever.com/*",
		 "*://www.kissanime.to/*",
		 "*://www.atpworldtour.com/*",
		 "http://www.surrenderat20.net/*",
		 "*://www.atpworldtour.com/*",
		 "*://www.leagueoflegends.com/*",
		 "http://store.steampowered.com/*",
		 "*://www.netflix.com/*"]
},
   ["blocking"]

);


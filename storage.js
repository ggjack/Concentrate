function save(){
	var url=document.getElementById("input").value;
	var myArray=[];
			chrome.storage.sync.get("myKey",function(f){
				myArray=f['myKey'];
				myArray[myArray.length]=url;
			});
			chrome.storage.sync.set({"myKey": myArray},function(){
				console.log("Added");
			});
}
function rm(){
	var myArray=[];
	var selected=ocument.getElementById("Distraction List").value;
	chrome.storage.sync.get("myKey",function(n){
		var Array=n['myKey'];
		for(i=0;i<Array.length;i++){
			if(n[i]!=selected){	
				myArray.push(Array[i]);
			}	
		}
	});
	chrome.storage.sync.set({"myKey":myArray},function(j){
		console.log("hello");
	});
}
window.onload = function () {
document.getElementById("add").onsubmit=save;
document.getElementById("subtract").onsubmit=rm;
}

window.onclick=function(){
	var myArray=[];
	var select= document.getElementById("Distraction List");
	chrome.storage.sync.get("myKey",function(e){
		myArray=e['myKey'];
	});
	for(i=0;i<myArray.length;i++){
		var opt= document.createElement('option');
		opt.appendChild( document.createTextNode(myArray[i]) );
		opt.value=myArray[i];
		sel.appendChild(opt); 
	}
}

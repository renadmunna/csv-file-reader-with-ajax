function csvReader(filePath,dataReceiver){
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function(){
		if (ajax.readyState == 4 && ajax.status == 200){
			var line=ajax.responseText.split("\r\n");
			var row=[];
			for(i=0;i<line.length;i++){
				row[i]=line[i].split(",");
			}
			var json={};
			for(i=0;i<row[0].length;i++){
				json[row[0][i]]=[];
				for(j=1;j<line.length;j++){
					if(row[j][i]!="" && row[j][i]!=undefined){
						json[row[0][i]].push(row[j][i]);
					}
				}
			}
			dataReceiver(json);
		}
	}
	ajax.open("POST", filePath, true);
	ajax.send();
}
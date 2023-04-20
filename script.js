function calculateMinCost() {
	
	    let str = document.getElementById("rope-lengths").value;
	    let arr = str.split(",");

	    for(var i = 0; i<arr.length; i++) {
		     arr[i] = Number(arr[i]);
	    }
	
	    let n = arr.length;
        var cost = 0;
		arr.sort(function (a,b) { return a-b});
	
		while(arr.length > 1) {
			let temp = arr[0] + arr[1];
		    cost += temp;
		
			arr.splice(0,2);
			arr.push(temp);
			
			arr.sort(function (a,b) { return a-b});
		}
	    document.getElementById("result").innerHTML = cost;
        return cost;
}  

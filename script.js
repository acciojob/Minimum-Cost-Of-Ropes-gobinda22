function calculateMinCost() {
	    let str = document.getElementById("rope-lengths").value;
	    let arr = str.split(",");

	    for(var i = 0; i< arr.length; i++) {
		     arr[i] = Number(arr[i]);
	    }
	
	    let n = arr.length;
        let pq = new MinHeap(n);
        for(let i = 0; i < n; i++) {
            pq.insertKey(arr[i]);
        }
        pq.MinHeapify(0);
        let res = 0;
    
        //using a loop while there is more than one element in priority queue.
        while (pq.heap_size > 1) 
        {
            //storing the first and second numbers from priority queue.
            let first = pq.extractMin();
            
            let second = pq.extractMin();
         
    
            //adding their sum in result.
            res += first + second;
            
            //pushing the sum of first and second numbers in priority queue.
            pq.insertKey(first + second);
        }
        //returning the result.
	    document.getElementById("result").innerHTML = res;
        return res;
}  

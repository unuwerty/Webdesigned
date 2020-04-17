function stairs(word) {
	    space = ' ';
	    arr=[]
	    str=word
	    arr[0]=word
	    for(let i=0;i<word.length;i++) {
	        str=space+str;
	        arr[i+1]=str;
	    }
	    for(let k=0;k<word.length;k++){
	        let _var=arr[(arr.length-1)-k].slice(k);
	        arr.push(_var);

	    }
	    arr.push(word)
	    arr.forEach(element => {
	        console.log(element)
	    });
	}

	stairs('hello');

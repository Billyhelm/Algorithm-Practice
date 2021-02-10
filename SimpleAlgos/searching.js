function naiveSearch(long, short){
    var count = 0
    for(var i=0; i<long.length; i++){
        for(var j=0; j<short.length; j++){
            if(shor[j] !== long[j+i]) break;
            if(j === short.length - 1) count++
        }
    }
    return count
}
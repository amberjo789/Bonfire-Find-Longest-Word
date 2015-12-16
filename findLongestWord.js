function findLongestWord(str) {
  var seperator = " ";
  var strArr = str.split(seperator);
  var max = " ";
  
  for(var i=0;i<strArr.length;i++){
      if(strArr[i].length>max.length){
        max = strArr[i];  
      }    
  }
  str = max;
  return str.length;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0;
    let indx= haystack.indexof(needle);
    return indx;
};

//Alternative answer is 
var strStr = function(haystack, needle) {
    if(haystack.length < needle.length) return -1;
for (let i = 0; i < haystack.length; i++){
    let count=0;
for (let j = 0; j < needle.length; j++){
  if(haystack[i+j] == needle[j])
      count++;
      
}
    if (count==needle.length) return i;
    
}
    return -1;
};
let s = 'abcabcbb'

function isUnique(s){
    let stringSet = new Set();
    for(let i=0; i<s.length;i++){
        if(stringSet.has(s[i])){
            return false;
        }
        stringSet.add(s[i]);
    }
    return true;
}

function substringRepeatCheck(s){
    let maxLength = 0;
    for(let i=0; i <s.length; i++){
        for(let j=i; j<s.length;j++){
            let subString = s.substring(i,j+1);
            if(isUnique(subString)){
                maxLength = Math.max(maxLength,subString.length);
            }
        }
    }
    return maxLength;
}
console.log(substringRepeatCheck(s));
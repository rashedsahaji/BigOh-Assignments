class StringUtils{
    constructor(str,patter,start,end){
        this.str = str;
        this.patter = patter;
        this.start = start;
        this.end = end;
    }

    static countChar(chArr){
        let lower = chArr.str.toLowerCase();

        for(let c=97; c<123;c++){
            let char = String.fromCharCode(c);
            let counter = 0;

            for(let i=0; i<lower.length;i++){
                if(char === lower.charAt(i)){
                    counter +=1;
                }
            }

            if(counter > 0){
                console.log(`${char} = ${counter}`);
            }

        }
        return 'Available charecters counts'
    }

    static subString(s){
        let subStr = '';
        for(let i=s.start; i<s.end;i++){
            subStr += s.str.charAt(i);
        }
        return subStr;
    }

    static splitString(s){
        let splitArr = [];
        let splitString = "";
        for(let i=0; i<s.str.length;i++){
            if(s.str.charAt(i)==' '){
                splitArr.push(splitString);
                splitString = "";
            }else{
                splitString+=s.str.charAt(i);
            }
        }
        splitArr.push(splitString);
        return splitArr;
    }

    static hasPattern(s){
        if(s.patter.test(s.str)){
            return true;
        }
        return false;
    }

    static allWordsContainsChar(s){
        let wordRegex = /\d/g;
        if(wordRegex.test(s.str)){
            return false;
        }
        return true;
    }

    
}
const pattern = /ed$/gi;
const result = new StringUtils('rashed12');

console.log(StringUtils.allWordsContainsChar(result));

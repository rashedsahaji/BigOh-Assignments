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

    static reverse(s){
        let sr = " "+s.str+" ";
        for(let i=sr.length-1;i>0;i--){
            let temp = sr[i];
            sr += temp;
        }
        return sr;
    }
    static vowelReverse(s){
        let temp = [];
        for(let i=0;i<s.str.length;i++){
            temp[i]=s.str.charAt(i);
        }

        let start = 0;
        let end = temp.length-1;


        while(start < end){
            if(temp[start]!='a'||temp[start]!='e'||temp[start]!='i'||temp[start]!='o'||temp[start]!='u'||
            temp[end]=='a'||temp[end]=='e'||temp[end]=='i'||temp[end]=='o'||temp[end]=='u'){
                start++;
                end = end;
            }
            if(temp[start]=='a'||temp[start]=='e'||temp[start]=='i'||temp[start]=='o'||temp[start]=='u'||
            temp[end]!='a'||temp[end]!='e'||temp[end]!='i'||temp[end]!='o'||temp[end]!='u'){
                end--;
                start=start;
            }
            if(temp[start]=='a'||temp[start]=='e'||temp[start]=='i'||temp[start]=='o'||temp[start]=='u'||
            temp[end]=='a'||temp[end]=='e'||temp[end]=='i'||temp[end]=='o'||temp[end]=='u'){
                let x = temp[start];
                temp[start]=temp[end];
                temp[end]=x;
                start++;
                end--;
            }
            return temp;
        }
    }
}
const pattern = /ed$/gi;
const result = new StringUtils('rashed',pattern,2,5);

console.log(StringUtils.vowelReverse(result));

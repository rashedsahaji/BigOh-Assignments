function isNameValid(name) {
    let upperCase = name;

    let getVowel = upperCase.match(/[aeiou]/gi);

    //checking there is any 'T' between two 'S'.
    let charArray = upperCase.split('').slice(upperCase.indexOf('S'),upperCase.lastIndexOf('S'));

    let count = getVowel === null ? 0 : getVowel.length

    if(count >=2 || charArray.includes('T')){
        return false;
    }

    return true;

}
console.log(isNameValid("gfdgSdgfTTSTe"));
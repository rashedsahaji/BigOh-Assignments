/*Write down a method boolean isNameValid(String  name).
A name is valid if following conditions are satisfied:
• It does not contain any vowel more than once.
• If the name contains two ‘S’, then there is not any ‘T’ in between them (both in capital cases).*/
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
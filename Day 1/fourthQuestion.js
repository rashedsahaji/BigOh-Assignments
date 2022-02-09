function ValidURL(str) {
    let regex = /^https?\:\/\/[www]?.\w+.\w{2,}\.\w{2,}/;
    return regex.test(str);
  }

  console.log(ValidURL("https://regex101.com/"))
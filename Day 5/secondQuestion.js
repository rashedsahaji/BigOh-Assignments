const getLettersForNum = (number) => {
    switch (number) {
      case "1": return ['Z', 'Y', 'A']
      case "2": return ['B', 'O']
      case "3": return ['U', 'P']
      case "12": return ['L']
      default: return ['']
    }
  }
  
  const getPermutations = (permutations, letters) => {
    let result = []
  
    letters.forEach(l => {
      permutations.forEach(p => {
        result.push(p + l)
      })
    })
    return result
  }
  
  let printAllCombinations = (digits) => {
    let result = [""]
  
    for (let i = 0; i < digits.length; i++) {
      result = getPermutations(result, getLettersForNum(digits[i]))
    }
  
    console.log({ result })
  }
  
  printAllCombinations('123')
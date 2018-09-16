const reverseString = (stringToBeReversed) => {
  let reversedString = '';

  if (stringToBeReversed === '') {
    return '';
  }

  for (let i = stringToBeReversed.length - 1; i > -1; i--) {
    reversedString += stringToBeReversed[i];
  }
  return reversedString;
};

export default reverseString;

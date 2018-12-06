const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const generateKey = () => {
  let randomKey = '';
  let randomIndex = 0;
  for (let i = 0; i <= 100; i++) {
    randomIndex = Math.floor(Math.random() * alphabet.length);
    randomKey += alphabet.substring(randomIndex + 0, randomIndex + 1);
  }
  return randomKey;
};

const alphabetIndex = (letter) => alphabet.indexOf(letter);

const computeShiftAsNumber = (keyLetter) => {
  return alphabetIndex(keyLetter);
};

const translateLetter = (letterToTranslate, shiftDistance) => {
  const correctedDistance = shiftDistance < 0 ? alphabet.length + shiftDistance : shiftDistance;
  const alphabetCharIndex = alphabetIndex(letterToTranslate);
  const shiftedLetterIndex = (alphabetCharIndex + correctedDistance) % alphabet.length;
  return alphabet[shiftedLetterIndex];
};

export class Cipher {

  constructor(key) {
    if (key === '') {
      throw new Error('Bad key');
    }
    if (key) {
      if (!key.match(/^[a-z]+$/)) {
        throw new Error('Bad key');
      }
      this.key = key;
    } else {
      this.key = generateKey();
    }
  }

  encode(messageToEncode) {
    let encodedMessage = '';
    let shift;
    for (let i = 0; i < messageToEncode.length; i++) {
      shift = computeShiftAsNumber(this.key[i % this.key.length]);
      encodedMessage += translateLetter(messageToEncode[i], shift);
    }
    return encodedMessage;
  }

  decode(messageToDecode) {
    let decodedMessage = '';
    let shift;
    for (let j = 0; j < messageToDecode.length; j++) {
      shift = -computeShiftAsNumber(this.key[j % this.key.length]);
      decodedMessage += translateLetter(messageToDecode[j], shift);
    }
    return decodedMessage;
  }
}

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

const computeShiftAsNumber = (keyLetter, isEncode) => {
  if (isEncode) {
    return alphabetIndex(keyLetter);
  } else {
    return alphabet.length - alphabetIndex(keyLetter);
  }
};

const translateMessage = (messageToTranslate, key, isEncode) => {
  let alphabetCharIndex;
  let shiftedLetterIndex;
  let shiftDistance;
  let translatedMessage = '';

  for (let i = 0; i < messageToTranslate.length; i++) {
    shiftDistance = computeShiftAsNumber(key[i % key.length], isEncode);
    alphabetCharIndex = alphabetIndex(messageToTranslate[i]);
    shiftedLetterIndex = (alphabetCharIndex + shiftDistance) % alphabet.length;
    translatedMessage += alphabet[shiftedLetterIndex];
  }
  return translatedMessage;
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
    return translateMessage(messageToEncode, this.key, true);
  }

  decode(messageToDecode) {
    return translateMessage(messageToDecode, this.key, false);
  }
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const aCharCode = 'a'.charCodeAt(0);


const generateKey = () => {
  let randomKey = '';
  let randomIndex = 0;
  for (let i = 0; i <= 100; i++) {
    randomIndex = Math.floor(Math.random() * alphabet.length);
    randomKey += alphabet.substring(randomIndex + 0, randomIndex + 1);
  }
  return randomKey;
};

class Cipher {

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

  computeShiftAsNumber(keyLetter) {
    return keyLetter.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  translateLetter(letterToTranslate, shiftDistance) {
    const correctedDistance = shiftDistance < 0 ? alphabet.length + shiftDistance : shiftDistance;
    const unicodeCharNumber = letterToTranslate.charCodeAt(0);
    const alphabetCharIndex = unicodeCharNumber - aCharCode;
    const returnLetter = String.fromCharCode(
      ((alphabetCharIndex + correctedDistance) % alphabet.length) + aCharCode);
    return returnLetter;
  }

  encode(messageToEncode) {
    let encodedMessage = '';
    let shift;
    for (let i = 0; i < messageToEncode.length; i++) {
      shift = this.computeShiftAsNumber(this.key[i % this.key.length]);
      encodedMessage += this.translateLetter(messageToEncode[i], shift);
    }
    return encodedMessage;
  }

  decode(messageToDecode) {
    let decodedMessage = '';
    let shift;
    for (let j = 0; j < messageToDecode.length; j++) {
      shift = -this.computeShiftAsNumber(this.key[j % this.key.length]);
      decodedMessage += this.translateLetter(messageToDecode[j], shift);
    }
    return decodedMessage;
  }
}

module.exports = Cipher;

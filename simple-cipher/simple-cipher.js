function Cipher() {
  this.key = 'abcdeabcde';
}

function Cipher(key) {
  this.key = key;
}

const encodeLetter = (letterToTranslate) => 'a';

const encode = (messageToEncode) => {
  let encodedMessage = '';
  for (let i = 0; i < messageToEncode.length; i++) {
    encodedMessage += encodeLetter(messageToEncode[i]);
  }
  return encodedMessage;
};

const decodeLetter = () => 'a';

const decode = (messageToDecode) => {
  let decodedMessage = '';
  for (let j = 0; j < messageToDecode.length; j++) {
    decodedMessage += decodeLetter(messageToDecode[i]);
  }
  return decodedMessage;
};

const classes = {
  paddingP2: 'px-12 max-md:px-6',
  textColorP2: 'text-red dark:text-pink',
  cP2: 'px-12 max-md:px-6 text-red dark:text-pink',
}

const p1 = {
  a:
    `An encryption algorithm is a set of mathematical instructions used to encode information to make it unreadable for anyone without
    the decryption key. <br> <br>`,
  b:
    'Encryption algorithms are widely used in information security to protect confidential data from unauthorized access. <br> <br>',
  c:
    'There are two main types of encryption algorithms: <br> <br>',
}

const p2 = {
  a:
    `<p class="${classes.cP2}">Symmetric Encryption</p>`,
  b:
    `<p class="${classes.paddingP2}"> Also known as secret-key cryptography, uses the same key to encrypt and decrypt information.
    This type of encryption is commonly used in file storage and communication systems where both parties share a secret key,
    such as passwords or personal data. </p> <br>`,
  c:
    `<p class="${classes.cP2}">Asymmetric Encryption</p>`,
  d:
    `<p class="${classes.paddingP2}"> Also known as public-key cryptography, uses a public key and a private key to encrypt and decrypt information.
    The public key is widely shared and used to encrypt the data, while the private key is kept secure and used to decrypt the data.
    This type of encryption is commonly used in user authentication, digital signatures, and secure online transactions. </p> <br>`,
}

function joinProperties(obj, separator = ' ') {
  return Object.keys(obj).map(key => obj[key]).join(separator);
}

const encrypt = {
  h: 'Encryption algorithms are used in a wide variety of use cases, including: <br> <br>',
  i: '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">1.User Data Protection</p>',
  j: '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">2.Secure Communications</p>',
  k: '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">3.Online Payment Systems</p>',
  l: '<p class="px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light">4.File and Disk Protection</p> <br>',

  m: 'Overall, encryption algorithms are an important part of information security today, and their use is critical to protecting privacy and confidentiality of online data.',

  textA: joinProperties(p1),
  textB: joinProperties(p2),
  //this.a + this.b + this.c,
  //textB: () => this.d + this.e + this.f + this.g,
  textC: () => this.h + this.i + this.j + this.k + this.l,
  textD: () => this.m,

  get whatIs() {
    return this.textA + this.textB + this.textC + this.textD
  }
}

export default encrypt;

import joinProperties from '@/utils/join-properties'

const classes = {
  paddingP2: 'px-12 max-md:px-6',
  textColorP2: 'text-red dark:text-pink',
  cP2: 'px-12 max-md:px-6 text-red dark:text-pink',
  cp3: 'px-14 max-md:px-2 text-center text-red-dark dark:text-pink-light'
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

const p3 = {
  a:
    `Encryption algorithms are used in a wide variety of use cases, including: <br> <br>`,
  b:
    `<p class="${classes.cp3}">1.User Data Protection</p>`,
  c:
    `<p class="${classes.cp3}">2.Secure Communications</p>`,
  d:
    `<p class="${classes.cp3}">3.Online Payment Systems</p>`,
  e:
    `<p class="${classes.cp3}">4.File and Disk Protection</p> <br>`
}

const p4 = {
  a:
    `Overall, encryption algorithms are an important part of information security today, and their use is critical to protecting
    privacy and confidentiality of online data.`
}

const defineEncrypt = {
  a: joinProperties(p1),
  b: joinProperties(p2),
  c: joinProperties(p3),
  d: joinProperties(p4),
}

const defEncrypt = joinProperties(defineEncrypt);

export default defEncrypt;

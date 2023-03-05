<template>
  <div>
    <h1 class="text-cyan">
      <pre class="grid place-content-center -mt-18 max-md:-mt-0 text-xl max-md:text-[8px] max-md:leading-[10px]"> 
███████╗███╗   ██╗ ██████╗██████╗ ██╗   ██╗██████╗ ████████╗
██╔════╝████╗  ██║██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗╚══██╔══╝
█████╗  ██╔██╗ ██║██║     ██████╔╝ ╚████╔╝ ██████╔╝   ██║   
██╔══╝  ██║╚██╗██║██║     ██╔══██╗  ╚██╔╝  ██╔═══╝    ██║   
███████╗██║ ╚████║╚██████╗██║  ██║   ██║   ██║        ██║   
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝        ╚═╝   
      </pre>    
    </h1>

    <div class="mx-10 max-md:mx-6 my-5 text-cyan text-xl max-md:text-base text-justify">
      <span class="define" />
    </div>

  </div>
</template>

<script>
  import Typed from 'typed.js'

  export default {
    data () {
      return {
        item: null,
        items: ['🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔']
      }
    },
    mounted () {
      this.item = this.items[Math.floor(Math.random()*this.items.length)]

      let a = 'An encryption algorithm is a set of mathematical instructions used to encode information to make it unreadable for anyone without the decryption key. <br> <br>'
      let b = 'Encryption algorithms are widely used in information security to protect confidential data from unauthorized access. <br> <br>'
      let c = 'There are two main types of encryption algorithms: <br> <br>'

      let d = '<p class="px-12 max-md:px-6 text-pink">Symmetric Encryption</p>'
      let e = '<p class="px-12 max-md:px-6"> Also known as secret-key cryptography, uses the same key to encrypt and decrypt information. This type of encryption is commonly used in file storage and communication systems where both parties share a secret key, such as passwords or personal data. </p> <br>'
      let f = '<p class="px-12 max-md:px-6 text-pink">Asymmetric Encryption</p>'
      let g = '<p class="px-12 max-md:px-6"> Also known as public-key cryptography, uses a public key and a private key to encrypt and decrypt information. The public key is widely shared and used to encrypt the data, while the private key is kept secure and used to decrypt the data. This type of encryption is commonly used in user authentication, digital signatures, and secure online transactions. </p> <br>'

      let h = 'Encryption algorithms are used in a wide variety of use cases, including: <br> <br>'
      let i = '<p class="px-14 max-md:px-2 text-center text-orange">1.User Data Protection</p>'
      let j = '<p class="px-14 max-md:px-2 text-center text-orange">2.Secure Communications</p>'
      let k = '<p class="px-14 max-md:px-2 text-center text-orange">3.Online Payment Systems</p>'
      let l = '<p class="px-14 max-md:px-2 text-center text-orange">4.File and Disk Protection</p> <br>'

      let m = 'Overall, encryption algorithms are an important part of information security today, and their use is critical to protecting privacy and confidentiality of online data.'

      const textA = a + b + c
      const textB = d + e + f + g
      const textC = h + i + j + k + l
      const textD = m

      new Typed('.define', {
        strings: [textA + textB + textC + textD],
        typeSpeed: 25,
        cursorChar: this.item,
        loop: false
      })
    }
  }
</script>

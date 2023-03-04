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

    <div class="mx-10 max-md:mx-6 my-5 text-cyan text-base text-justify">
      <span class="description"></span>
      <ol class="pl-8">
        <li class="list"></li>
      </ol>
    </div>

  </div>
</template>

<script>
  import Typed from 'typed.js'

  export default {
    data () {
      return {
        item: null,
        items: ['🤖','🐻','🖤','👽' ],
      }
    },
    methods: {
      cursor () {
        const cur = document.querySelector('.typed-cursor')
        if(cur)
        {cur.style.display = 'none'}
      }
    }
    ,
    mounted () {
      this.item = this.items[Math.floor(Math.random()*this.items.length)]

      let textOne = 'An encryption algorithm is a set of mathematical instructions used to encode information to make it unreadable for anyone without the decryption key. <br> <br>'
      let textTwo = 'Encryption algorithms are widely used in information security to protect confidential data from unauthorized access. <br> <br>'
      let textThree = 'There are two main types of encryption algorithms: <br> <br>'
      let textFour = '1.Symmetric Encryption: also known as secret-key cryptography, uses the same key to encrypt and decrypt information. This type of encryption is commonly used in file storage and communication systems where both parties share a secret key, such as passwords or personal data. <br> <br>'
      let textFive = '2.Asymmetric Encryption: also known as public-key cryptography, uses a public key and a private key to encrypt and decrypt information. The public key is widely shared and used to encrypt the data, while the private key is kept secure and used to decrypt the data. This type of encryption is commonly used in user authentication, digital signatures, and secure online transactions. <br>'

      let finalText = textOne + textTwo + textThree

      new Typed('.description', {
        strings: [finalText],
        typeSpeed: 40,
        cursorChar: this.item,
        onComplete: () => {

          this.cursor()

          new Typed('.list', {
            strings: [textFour + textFive],
            typeSpeed: 40,
            cursorChar: this.item
          })
          
        }
      })
    }
  }
</script>

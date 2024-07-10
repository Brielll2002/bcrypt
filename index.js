
const bcrypt = require('bcrypt')
const color = require('colors')

async function Crypt(password){
    const passwordHash = await bcrypt.hash(password, 10)//senha e nível de complexidade(0-10, eu acho)
    console.log('Senha cryptografada', color.green(`(${password})`),'->',color.yellow(passwordHash))

    const senhaDescrypt = await bcrypt.compare(password, passwordHash)
    console.log('Comparar senha', color.green(`(${password} - ${passwordHash})`), '->', senhaDescrypt)
    //Retorna TRUE se for compatível ou FALSE se não for
}

Crypt("teste")
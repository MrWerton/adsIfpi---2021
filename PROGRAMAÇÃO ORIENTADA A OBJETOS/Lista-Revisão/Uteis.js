const entrada = require('prompt-sync')({
  sigint: true
})

  const Numero = (a) => Number(entrada(a))
  const Texto = (a) => entrada(a)

module.exports = {
  Numero, Texto
}

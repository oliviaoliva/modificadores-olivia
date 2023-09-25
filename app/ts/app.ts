const pessoa= new Pessoa('Olivia', 20, new Date(2003, 3, 5));
console.log(pessoa.toString());

const pessoaFisica = new PessoaFisica('João', 25, new Date(1997, 4, 21), '123.456.789-00');
console.log(pessoaFisica.toString());

const pessoaJuridica = new PessoaJuridica('Empresa', 10, new Date(2012, 1, 5), '12.345.678/0001-00');
console.log(pessoaJuridica.toString());
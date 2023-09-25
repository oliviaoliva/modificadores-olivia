class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set nome(value) {
        this._nome = value;
    }
    setIdade(value) {
        this._idade = value;
    }
    setDataNascimento(value) {
        this._dataNascimento = value;
    }
}

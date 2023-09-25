class Pessoa {
    private _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
  
    constructor(nome: string, idade: number, dataNascimento: Date) {
      this._nome = nome;
      this._idade = idade;
      this._dataNascimento = dataNascimento;
    }
  
    get nome(): string {
      return this._nome;
    }
  
    get idade(): number {
      return this._idade;
    }
  
    get dataNascimento(): Date {
      return this._dataNascimento;
    }
  
    set nome(value: string) {
      this._nome = value;
    }
  
    setIdade(value: number) {
      this._idade = value;
    }
  
    setDataNascimento(value: Date) {
      this._dataNascimento = value;
    }

    toString(): string {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Data Nascimento ${this._dataNascimento}`
    }
}


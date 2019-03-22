import { Telefone } from './telefone';

export class Pessoa {
    public pessoaId: number;
    public nome: string;
    public idade: number;
    public sexo: SexoEnum;
    public cpf: String;
    public rg: string;
    public telefones: Array<Telefone>;

}

enum SexoEnum{
    Masculino = 1, Feminino = 2, Outros = 3
}


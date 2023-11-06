import { AbstractEntity } from "./abstract.entity";
import { Sala } from "./sala";

export class Aluno extends AbstractEntity {
    nome! : string;
    sala! : Sala;
    idade! : number;

    
    constructor() {
        super()
    }
}
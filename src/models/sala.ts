import { AbstractEntity } from "./abstract.entity";
import type { Professor } from "./professor";

export class Sala extends AbstractEntity {
    nome! : string;
    professor! : Professor;

    constructor() {
        super()
    }
}
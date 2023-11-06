import { AbstractEntity } from "./abstract.entity";

export class Professor extends AbstractEntity {
    nome! : string;

    constructor() {
        super()
    }
}
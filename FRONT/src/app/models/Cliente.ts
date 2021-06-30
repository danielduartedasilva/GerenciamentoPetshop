import { MatTableDataSource } from "@angular/material/table";
import { Animal } from "./Animal";

export class Cliente{
    _id?: string;
    nome!:string;
    cpf!: string;
    telefone!: string;
    endereco!: string;
    animal: string[] = [];
    createdAt?: Date;
    updateAt?: Date;
}
import { SelectItem } from 'primeng/api';

export class Filtro{

    public label: string;
    public filtro: string;
    public valor: string;
    public valores: SelectItem[];
    public valorSelect: any;
    constructor(label: string, filtro: string, valor: string, valores: []){
        this.label = name;
        this.filtro = filtro;
        this.valor = valor;
        this.valores = valores;
      }
    
}
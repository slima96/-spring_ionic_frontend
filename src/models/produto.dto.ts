export interface ProdutoDTO {
    id: string;
    codigo: string;
    descricao: string;
    ciclo: number;
    cavidade: number;
    preco: number;
    imageUrl? : string;
}
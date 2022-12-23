import IProjeto from "./IProjeto";

export default interface IFormTarefa{
    id: number;
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}
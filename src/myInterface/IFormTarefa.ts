import IProjeto from "./IProjeto";

export default interface IFormTarefa{
    id: string;
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}
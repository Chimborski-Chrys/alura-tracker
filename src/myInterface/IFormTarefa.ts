import IProjeto from "./IProjeto";

export default interface IFormTarefa{
    duracaoEmSegundos: number,
    descricao: string,
    projeto: IProjeto
}
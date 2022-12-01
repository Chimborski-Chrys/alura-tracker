import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipo-Mutacoes";


type Notificador = {
    notificar:(tipo, titulo, texto) => void;
}

export default () : Notificador => {
    const notificar = (tipo, titulo, texto) : void => {
        store.commit(NOTIFICAR,{
            titulo,
            texto,
            tipo
        })
    }

    return{
        notificar
    }
}
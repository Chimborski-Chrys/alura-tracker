import { store } from "@/store"
import { NOTIFICAR } from "@/store/tipo-Mutacoes"

export const notificacaoMixin = {
    methods: {
        notificar(tipo, titulo, texto) {
            store.commit(NOTIFICAR, {
                titulo,
                texto,
                tipo
          })
        }
    }
}
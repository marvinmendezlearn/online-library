import {X} from "lucide-react";

export function DeleteModal({ modal, setModal, handleModalAction }) {
    return (
        <div className={`modal ${modal ? "modal--active" : ""}`}>
            <div className="modal__content">
                <div className="modal__header">
                    <p className="modal__title">Eliminar</p>
                    <button onClick={ () => setModal(false) }>
                        <X />
                    </button>
                </div>
                <p>¿Está seguro?</p>
                <p>Esta acción no se puede deshacer.</p>

                <div className="modal__footer">
                    <button className="modal__cancel" onClick={ () => setModal(false) }>Cancelar</button>
                    <button className="modal__confirm" onClick={ handleModalAction }>Confirmar</button>
                </div>
            </div>
        </div>
    )
}
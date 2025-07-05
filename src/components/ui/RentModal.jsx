import {useContext, useState} from "react";
import {DataContext} from "../../context/DataContext.jsx";
import {toast} from "react-toastify";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export function RentModal({ book, modal, setModal }) {
    const { users, addRent } = useContext(DataContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectedUser, setSelectedUser] = useState("");

    const onSubmit = (data) => {
        if (!selectedUser) {
            toast.error("Por favor, selecciona un usuario");
            return;
        }
        addRent({ bookId: book.id, userId: +selectedUser, deliveryDate: data.deliveryDate });
        toast.success(`El libro "${book.title}" ha sido rentado.`);
        setModal(false);
        setSelectedUser("");
        reset();
    }

    if (!modal) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={() => setModal(false)}><X /></button>
                <div className="modal-grid">
                    <div className="modal-book-info">
                        <img src={book.coverImage} alt={book.title} className="modal-book-cover"/>
                        <h2>{book.title}</h2>
                        <p><strong>Autor:</strong> {book.author}</p>
                        <p><strong>Año de Publicación:</strong> {book.publicationYear}</p>
                        <p><strong>ISBN10:</strong> {book.isbn10}</p>
                        <p><strong>ISBN13:</strong> {book.isbn13}</p>
                    </div>
                    <form className="modal-rent-form" onSubmit={handleSubmit(onSubmit)}>
                        <p><strong>Categoría:</strong> {book.category}</p>
                        <p><strong>Idioma:</strong> {book.language}</p>
                        <p><strong>Sinopsis:</strong> {book.synopsis}</p>
                        <p><strong>Reseñas:</strong> {book.reviews}</p>
                        <p><strong>Descripción:</strong> {book.description}</p>
                        <h3>Seleccionar Usuario</h3>
                        <select
                            value={selectedUser}
                            onChange={(e) => setSelectedUser(e.target.value)}
                            className="form__input"
                        >
                            <option value="" disabled>-- Selecciona un usuario --</option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{user.name} {user.lastname}</option>
                            ))}
                        </select>
                        <div className="form__field">
                            <label className="form__label" htmlFor="deliveryDate">Fecha de Entrega</label>
                            <input
                                className="form__input"
                                type="date"
                                name="deliveryDate"
                                id="deliveryDate"
                                {...register("deliveryDate", { required: "La fecha de entrega es requerida" }) }
                            />
                            {errors.deliveryDate && <p className="errors__item">{errors.deliveryDate.message}</p>}
                        </div>
                        <button
                            className={`form__submit ${!selectedUser || errors.deliveryDate ? 'form__submit--disabled' : ''}`}
                            type="submit"
                            disabled={!selectedUser || errors.deliveryDate}
                        >
                            Confirmar Renta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
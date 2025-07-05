import {Link, useParams} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useContext, useMemo, useState} from "react";
import {toast} from "react-toastify";
import {DataContext} from "../../context/DataContext.jsx";

function EditRent() {
    const { id } = useParams();
    const { rents, books, users, updateRent } = useContext(DataContext);

    const currentRent = useMemo(() => {
        return rents.find(rent => rent.id === +id);
    }, [id, rents])

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentRent});
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            updateRent({...data, id: +id});
            toast.success("Alquiler actualizado correctamente...");
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className="users">
                <div className="users__title-nav">
                    <div>
                        <h2 className="users__title">Editar Alquiler</h2>
                        <p className="users__legend">Modifica el formulario para editar el alquiler...</p>
                    </div>
                    <Link className="users__link-navigate" to="/rents">
                        <ArrowLeft  />
                        Volver
                    </Link>
                </div>


                <form className="form" onSubmit={ handleSubmit(onSubmit) }>
                    <div className="form__field">
                        <label className="form__label" htmlFor="bookId">Libro</label>
                        <select
                            className="form__input"
                            id="bookId"
                            {...register("bookId", { required: "El libro es requerido" })}
                        >
                            <option value="" disabled>-- Selecciona un libro --</option>
                            {books.map(book => (
                                <option key={book.id} value={book.id}>{book.title}</option>
                            ))}
                        </select>
                        {errors.bookId && <p className="errors__item">{errors.bookId.message}</p>}
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="userId">Usuario</label>
                        <select
                            className="form__input"
                            id="userId"
                            {...register("userId", { required: "El usuario es requerido" })}
                        >
                            <option value="" disabled>-- Selecciona un usuario --</option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{user.name} {user.lastname}</option>
                            ))}
                        </select>
                        {errors.userId && <p className="errors__item">{errors.userId.message}</p>}
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="rentDate">Fecha de Renta</label>
                        <input
                            className="form__input"
                            type="date"
                            name="rentDate"
                            id="rentDate"
                            {...register("rentDate", { required: "La fecha de renta es requerida" }) }
                        />
                        {errors.rentDate && <p className="errors__item">{errors.rentDate.message}</p>}
                    </div>

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

                    <button className={`form__submit ${isLoading ? 'form__submit--disabled' : ''}`} disabled={ isLoading } type="submit">
                        <PlusIcon />
                        Actualizar Alquiler
                    </button>
                </form>
            </section>
        </>
    );
}

export default EditRent;
import {Link, useParams} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useContext, useMemo, useState} from "react";
import {toast} from "react-toastify";
import BookForm from "../../components/ui/BookForm.jsx";
import {DataContext} from "../../context/DataContext.jsx";

function EditBook() {
    const { id } = useParams();
    const { books, updateBook } = useContext(DataContext);

    const currentBook = useMemo(() => {
        return books.find(book => book.id === +id);
    }, [id, books])

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentBook});
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            updateBook({...data, id: +id});
            toast.success("Libro actualizado correctamente...");
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
                        <h2 className="users__title">Editar libro</h2>
                        <p className="users__legend">Modifica el formulario para editar el libro...</p>
                    </div>
                    <Link className="users__link-navigate" to="/books">
                        <ArrowLeft  />
                        Volver
                    </Link>
                </div>


                <form className="form" onSubmit={ handleSubmit(onSubmit) }>
                    <BookForm
                        register={ register }
                        errors={ errors }
                    />

                    <button className={`form__submit ${isLoading ? 'form__submit--disabled' : ''}`} disabled={ isLoading } type="submit">
                        <PlusIcon />
                        Actualizar libro
                    </button>
                </form>
            </section>
        </>
    );
}

export default EditBook;
import {Link} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {toast} from "react-toastify";
import BookForm from "../../components/ui/BookForm.jsx";
import {DataContext} from "../../context/DataContext.jsx";

function CreateBook() {
    const { addBook } = useContext(DataContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            addBook(data);
            toast.success("Libro creado correctamente...");
            reset();
        } catch (error) {
            toast.error(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <section className="books">
                <div className="books__title-nav">
                    <div>
                        <h2 className="books__title">Crear libro</h2>
                        <p className="books__legend">Llena el formulario de registro con datos del libro...</p>
                    </div>
                    <Link className="books__link-navigate" to="/books">
                        <ArrowLeft  />
                        Volver
                    </Link>
                </div>


                <form className="form" onSubmit={ handleSubmit(onSubmit) }>
                    <BookForm
                        register={register}
                        errors={errors}
                    />

                    <button className={`form__submit ${isLoading ? 'form__submit--disabled' : ''}`} disabled={ isLoading } type="submit">
                        <PlusIcon />
                        Registrar libro
                    </button>
                </form>
            </section>
        </>
    );
}

export default CreateBook;
import {Link} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {toast} from "react-toastify";
import UserForm from "../../components/ui/UserForm.jsx";

function Edit() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 3000));
            toast.success("Usuario creado correctamente...");
            console.log(data);
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
            <section className="users">
                <div className="users__title-nav">
                    <div>
                        <h2 className="users__title">Crear usuario</h2>
                        <p className="users__legend">Llena el formulario de registro con datos del usuario...</p>
                    </div>
                    <Link className="users__link-navigate" to="/users">
                        <ArrowLeft  />
                        Volver
                    </Link>
                </div>


                <form className="form" onSubmit={ handleSubmit(onSubmit) }>
                    <UserForm
                        register={ register }
                        errors={ errors }
                    />

                    <button className={`form__submit ${isLoading ? 'form__submit--disabled' : ''}`} disabled={ isLoading } type="submit">
                        <PlusIcon />
                        Registrar usuario
                    </button>
                </form>
            </section>
        </>
    );
}

export default Edit;
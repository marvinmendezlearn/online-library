import {Link, useParams} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useMemo, useState} from "react";
import {toast} from "react-toastify";
import UserForm from "../../components/ui/UserForm.jsx";
import {users} from "../../data/users.js";

function Edit() {
    const { id } = useParams();

    const currentUser = useMemo(() => {
        return users.find(user => user.id === +id);
    }, [id])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: currentUser});
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Usuario actualizado correctamente...");
            console.log(data);
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
                        Actualizar usuario
                    </button>
                </form>
            </section>
        </>
    );
}

export default Edit;
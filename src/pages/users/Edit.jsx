import {Link, useParams} from "react-router";
import {ArrowLeft, PlusIcon} from "lucide-react";
import {useForm} from "react-hook-form";
import {useContext, useMemo, useState} from "react";
import {toast} from "react-toastify";
import UserForm from "../../components/ui/UserForm.jsx";
import {DataContext} from "../../context/DataContext.jsx";

function EditUser() {
    const { id } = useParams();
    const { users, updateUser } = useContext(DataContext);

    const currentUser = useMemo(() => {
        return users.find(user => user.id === +id);
    }, [id, users])

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentUser});
    const [isLoading, setIsLoading] = useState(false);


    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            updateUser({...data, id: +id});
            toast.success("Usuario actualizado correctamente...");
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
                        <h2 className="users__title">Editar usuario</h2>
                        <p className="users__legend">Modifica el formulario para editar el usuario...</p>
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

export default EditUser;
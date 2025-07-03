function UserForm({ errors, register}) {
    return (
        <>
            {Object.keys(errors).length > 0 && (
                <ul className="errors">
                    {Object.keys(errors).map((key, index) => (
                        <li className="errors__item" key={index}>{errors[key].message}</li>
                    ))}
                </ul>
            )}
            <div className="form__field">
                <label className="form__label" htmlFor="name">Nombres</label>
                <input className="form__input" type="text" name="name" id="name" placeholder="Digita los nombres del usuario..."
                       {...register("name", { required: "El nombre es requerido" }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="lastname">Apellidos</label>
                <input className="form__input" type="text" name="lastname" id="lastname" placeholder="Digita los apellidos del usuario..."
                       {...register("lastname", { required: "El apellido es requerido" }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="email">Correo electrónico</label>
                <input className="form__input" type="email" name="email" id="email" placeholder="Ej. usuario@example.com"
                       {...register("email", {
                           required: "El correo electrónico es requerido", pattern: {
                               value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                               message: "Formato de correo electrónico no válido..."
                           }
                       }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="telephone">Teléfono</label>
                <input className="form__input" type="tel" name="telephone" id="telephone" placeholder="Ej. 699456321"
                       {...register("telephone", {
                           required: "Número de teléfono es requerido",
                           pattern: {
                               value: /^[6789]\d{8}$/,
                               message: "Formato de telefono no válido"
                           }
                       }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="address">Dirección</label>
                <textarea className="form__input" name="address" id="address" placeholder="Digita dirección exacta..." {...register("address", { required: "Dirección es requerida" }) }></textarea>
            </div>
        </>
    )
}

export default UserForm;
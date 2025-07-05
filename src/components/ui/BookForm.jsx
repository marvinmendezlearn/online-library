function BookForm({ errors, register}) {
    return (
        <>
            {Object.keys(errors).length > 0 && (
                <ul className="errors">
                    {Object.keys(errors).map((key) => (
                        <li className="errors__item" key={key}>{errors[key].message}</li>
                    ))}
                </ul>
            )}
            <div className="form__field">
                <label className="form__label" htmlFor="title">Título</label>
                <input className="form__input" type="text" name="title" id="title" placeholder="Digita el título del libro.."
                       {...register("title", { required: "El título es requerido" }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="author">Autor</label>
                <input className="form__input" type="text" name="author" id="author" placeholder="Digita el autor del libro..."
                       {...register("author", { required: "El autor es requerido" }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="publicationYear">Año de publicación</label>
                <input className="form__input" type="number" name="publicationYear" id="publicationYear" placeholder="Digita el año de publicación del libro.."
                       {...register("publicationYear", { required: "El año de publicación es requerido" }) }
                />
            </div>

            <div className="form__field">
                <label className="form__label" htmlFor="isbn10">ISBN10</label>
                <input className="form__input" type="number" name="isbn10" id="isbn10" placeholder="Digita el ISBN10 del libro..."
                       {...register("isbn10", { required: "El código ISBN10 es requerido", minLength: 10, maxLength: 10 }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="isbn13">ISBN13</label>
                <input className="form__input" type="number" name="isbn13" id="isbn13" placeholder="Digita el ISBN13 del libro..."
                       {...register("isbn13", { required: "El código ISBN13 es requerido", minLength: 13, maxLength: 13}) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="coverImage">URL de la portada</label>
                <input className="form__input" type="url" name="coverImage" id="coverImage" placeholder="Digita la URL de la portada del libro..."
                       {...register("coverImage", { required: "La URL de la portada es requerida" }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="synopsis">Sinopsis</label>
                <textarea className="form__input" name="synopsis" id="synopsis" placeholder="Digita la sinopsis del libro..."
                          {...register("synopsis", { required: "La sinopsis es requerida" }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="reviews">Reseñas</label>
                <textarea className="form__input" name="reviews" id="reviews" placeholder="Digita las reseñas del libro..."
                          {...register("reviews", { required: "Las reseñas son requeridas" }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="category">Categoría</label>
                <input className="form__input" type="text" name="category" id="category" placeholder="Digita la categoría del libro..."
                       {...register("category", { required: "La categoría es requerida" }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="language">Lenguaje</label>
                <input className="form__input" type="text" name="language" id="language" placeholder="Digita el lenguaje del libro..."
                       {...register("language", { required: "El lenguaje es requerido" }) }
                />
            </div>
            
            <div className="form__field">
                <label className="form__label" htmlFor="description">Descripción</label>
                <textarea className="form__input" name="description" id="description" placeholder="Digita la descripción del libro..."
                          {...register("description", { required: "La descripción es requerida" }) }
                />
            </div>
        </>
    )
}

export default BookForm;
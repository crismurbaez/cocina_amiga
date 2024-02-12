import React from "react";
import s from './contact.module.css';

const Contact = () => {
    return (
        <section className={s.contact}>
            <div className={s.decoration_background}>
                <div className={s.intro}>
                    Escríbenos, nos encantaría recibir tu consulta y comentarios.
                </div>
            </div>
            <form
                name="contact"
                autoComplete="on"
                acceptCharset="utf-8"
                className={s.form}
            >
                <label className={s.label} htmlFor="name">Nombre</label>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    placeholder="María Smith" />
                <label className={s.label} htmlFor="asunto">Asunto</label>
                <input
                    className={s.input}
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                />
                <label className={s.label} htmlFor="email">Email</label>
                <input
                    className={s.input}
                    type="text"
                    name="email"
                    placeholder="maria@mail.com"
                />
                <label className={s.label} htmlFor="detail">Detalle</label>
                <input
                    className={s.input}
                    type="textarea"
                    name="detail"
                    placeholder="Escribe todo lo que quieras contarnos, sugerirnos, y comentarnos..."
                />
                <input className={s.submit} type="submit" value='Enviar' />

            </form>
        </section>
    )

}

export default Contact;
import React from "react";

const Contact = () => {
  return (
    <section className="section section--divided">
      <form className="contact">
        <div className="contact__textField contact__textField--name">
          <label className="contact__textLabel" htmlFor="name">
            *Nome:
          </label>
          <input
            className="contact__textInput"
            id="name"
            type="text"
            placeholder="Informe seu nome"
          />
        </div>

        <div className="contact__textField contact__textField--email">
          <label className="contact__textLabel" htmlFor="email">
            *E-mail:
          </label>
          <input
            className="contact__textInput"
            id="email"
            type="text"
            placeholder="Informe seu e-mail"
          />
        </div>

        <div className="contact__textField contact__textField--phone">
          <label className="contact__textLabel" htmlFor="phone">
            *Telephone:
          </label>
          <input
            className="contact__textInput"
            id="phone"
            type="text"
            placeholder="(__) _____-____"
          />
        </div>

        <div className="contact__textField contact__textField--message">
          <label className="contact__textLabel" htmlFor="message">
            *Mensagem:
          </label>
          <textarea
            className="contact__textInput"
            id="message"
            cols={30}
            rows={7}
            placeholder="Escreva aqui"
          ></textarea>
        </div>

        <button className="contact__submit" type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;

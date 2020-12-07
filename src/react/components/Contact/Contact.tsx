import React, { useState } from "react";
import Cleave from "cleave.js/react";

import {
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
} from "../../../common/utils/validator";

const contactInitialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [state, setState] = useState(contactInitialState);
  const [formError, setFormError] = useState<any>({});

  const submit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    const newError: any = {};

    if (!validateName(state.name)) {
      newError.name = true;
    }
    if (!validateEmail(state.email)) {
      newError.email = true;
    }
    if (!validatePhone(state.phone)) {
      newError.phone = true;
    }
    if (!validateMessage(state.message)) {
      newError.message = true;
    }

    setFormError(newError);

    if (Object.keys(newError).length) {
      alert("Favor preencher os campos corretamente");
    }
  };

  return (
    <section className="section section--divided">
      <form className="contact">
        <div
          className={`contact__textField ${
            formError.name ? "contact__textField--error" : ""
          } contact__textField--name`}
        >
          <label className="contact__textLabel" htmlFor="name">
            *Nome:
          </label>
          <input
            className="contact__textInput"
            id="name"
            type="text"
            placeholder="Informe seu nome"
            onChange={({ target }) =>
              setState((state) => ({ ...state, name: target.value }))
            }
            value={state.name}
          />
        </div>

        <div
          className={`contact__textField ${
            formError.email ? "contact__textField--error" : ""
          } contact__textField--email`}
        >
          <label className="contact__textLabel" htmlFor="email">
            *E-mail:
          </label>
          <Cleave
            className="contact__textInput"
            id="email"
            type="text"
            placeholder="Informe seu e-mail"
            onChange={({ target }) =>
              setState((state) => ({ ...state, email: target.value }))
            }
            options={{ lowercase: true }}
            value={state.email}
          />
        </div>

        <div
          className={`contact__textField ${
            formError.phone ? "contact__textField--error" : ""
          } contact__textField--phone`}
        >
          <label className="contact__textLabel" htmlFor="phone">
            *Telephone:
          </label>
          <Cleave
            id="phone"
            className="contact__textInput"
            type="text"
            value={state.phone}
            placeholder="(__) _____-____"
            options={{
              blocks: [0, 2, 4, 5],
              delimiters: ["(", ") ", "-"],
            }}
            onChange={({ target }) =>
              setState((state) => ({ ...state, phone: target.value }))
            }
          />
        </div>

        <div
          className={`contact__textField ${
            formError.message ? "contact__textField--error" : ""
          } contact__textField--message`}
        >
          <label className="contact__textLabel" htmlFor="message">
            *Mensagem:
          </label>
          <textarea
            className="contact__textInput"
            id="message"
            cols={30}
            rows={7}
            placeholder="Escreva aqui"
            onChange={({ target }) =>
              setState((state) => ({ ...state, message: target.value }))
            }
            value={state.message}
          />
        </div>

        <button className="contact__submit" type="submit" onClick={submit}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;

import {
  handleBlur,
  handleFocus,
  isValidEmail,
  isValidPassword,
} from "../../../utils/functions";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../services/auth.query";

const Form = () => {
  const inputFocus = useRef<HTMLInputElement | null>(null);
  const emailSave = useSelector((state: any) => state.email);

  const [register] = useMutation(REGISTER);

  const [form, setForm] = useState({
    email: emailSave,
    pwd: "",
  });
  const [formError, setFormError] = useState({
    emailError: true,
    emailMessage: "",
    passwordError: true,
    passwordMessage: "",
  });
  useEffect(() => {
    if (inputFocus.current) inputFocus.current.focus();
  }, []);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });

    if (e.target.id === "email") {
      if (!isValidEmail(e.target.value)) {
        setFormError({
          ...formError,
          emailError: true,
          emailMessage: "Veuillez saisir une adresse e-mail valide.",
        });
      } else {
        setFormError({
          ...formError,
          emailError: false,
          emailMessage: "",
        });
      }
    }

    if (e.target.id === "pwd") {
      if (!isValidPassword(e.target.value)) {
        setFormError({
          ...formError,
          passwordError: true,
          passwordMessage:
            "Votre mot de passe doit contenir entre 4 et 60 caractères.",
        });
      } else {
        setFormError({
          ...formError,
          passwordError: false,
          passwordMessage: "",
        });
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formError.emailError || formError.passwordError) {
      return;
    }

    try {
      const response = await register({
        variables: {
          createUserInput: {
            email: form.email,
            password: form.pwd,
          },
        },
      });
      console.log(response);
    } catch (error) {
      // RETOURNER UNE PAGE 500
      console.log("register error", error);

      return error;
    }
  };
  return (
    <div className="pb-[95px] flex-grow bg-white overflow-hidden w-full">
      <div className="px-[32px] pt-[20px] pb-[60px] block overflow-hidden box-border mx-auto mb-[15px] max-w-[978px]">
        <form onSubmit={handleSubmit} action="">
          <div className="mx-auto max-w-[440px] text-left">
            <div>
              <div className="mt-[20px] inline-block">
                <span className="text-[13px] block leading-[19px]">
                  ÉTAPE <b>1</b> SUR <b>3</b>
                </span>
                <h1 className="text-[32px] inline-block font-medium mb-[0.4em]">
                  Créez un mot de passe pour activer votre abonnement
                </h1>
              </div>
            </div>
            <div>
              <div className="text-[18px] font-light">
                Plus que quelques étapes et c'est fini !
              </div>
              <div className="text-[18px] mt-[10px] font-light">
                Plus rien à remplir.
              </div>
              <ul className="mt-[16px] mb-[20px] p-0 box-border">
                <li className="mb-[10px]">
                  <div className="relative max-w-[500px]">
                    <div className="relative">
                      <label>
                        <input
                          type="email"
                          ref={inputFocus}
                          value={form.email}
                          onChange={handleChange}
                          id="email"
                          className={`${
                            formError.emailMessage
                              ? "border-[#b92d2b]"
                              : "border-[#5fa53f]"
                          } h-[60px] pt-[10px] px-[10px] w-full border appearance-none rounded-sm box-border text-black block text-[16px]`}
                          onFocus={(event) => handleFocus(event, "focused")}
                          onBlur={(event) => handleBlur(event, "focused")}
                        />
                        <label
                          htmlFor="email"
                          className="text-[14px] text-[#8c8c8c] left-2.5 absolute top-1/2 transform -translate-y-1/2"
                        >
                          E-mail
                        </label>
                      </label>
                    </div>
                    {formError.emailMessage && (
                      <div className="text-[#b92d2b] text-[13px]">
                        {formError.emailMessage}
                      </div>
                    )}
                  </div>
                </li>
                <li className="mb-[10px]">
                  <div className="relative max-w-[500px]">
                    <div className="relative">
                      <label>
                        <input
                          id="pwd"
                          type="password"
                          value={form.pwd}
                          onChange={handleChange}
                          className={`${
                            formError.passwordMessage
                              ? "border-[#b92d2b]"
                              : "border-[#5fa53f]"
                          } h-[60px] pt-[10px] px-[10px] w-full border appearance-none  rounded-sm box-border text-black block text-[16px]`}
                          onFocus={(event) => handleFocus(event, "focused")}
                          onBlur={(event) => handleBlur(event, "focused")}
                        />
                        <label
                          htmlFor="pwd"
                          className="text-[14px] text-[#8c8c8c] left-2.5 absolute top-1/2 transform -translate-y-1/2"
                        >
                          Ajouter un mot de passe
                        </label>
                      </label>
                    </div>
                    {formError.passwordMessage && (
                      <div className="text-[#b92d2b] text-[13px]">
                        {formError.passwordMessage}
                      </div>
                    )}
                  </div>
                </li>
                <li className="mb-[10px]">
                  <div className="box-border text-[16px] max-w-[500px] min-h-[32px] pl-[36px] relative select-none notif">
                    <input
                      type="checkbox"
                      className="absolute left-0 opacity-0 top-0 box-border"
                      id="notif"
                    />
                    <label
                      htmlFor="notif"
                      className="font-light my-[8px] block leading-[1.2] py-[6px] relative before:h-[25px] before:w-[25px] before:bg-white before:border before:block before:left-[-36px] before:absolute before:top-[2px]"
                    >
                      Oui, envoyez-moi les offres spéciales de Netflix par
                      e-mail.
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[440px] mt-[24px] mx-auto text-center">
            <button
              type="submit"
              className="rounded text-[24px] min-h-[64px] min-w-[110px] py-[20.5px] px-[2em] w-full bg-primary text-white relative border-none box-border cursor-pointer inline-block text-center select-none align-middle"
            >
              Suivant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

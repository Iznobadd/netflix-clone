import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { LOGIN } from "../../services/auth.query";
import Cookies from "js-cookie";
import {
  handleBlur,
  handleFocus,
  isValidEmail,
  isValidPassword,
} from "../../utils/functions";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const [login] = useMutation(LOGIN);
  const [form, setForm] = useState({
    email: "",
    pwd: "",
  });

  const [submitError, setSubmitError] = useState({
    error: false,
    message: "",
  });

  const [formError, setFormError] = useState({
    emailError: true,
    passwordError: true,
    emailMessage: "",
    passwordMessage: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
    if (event.target.id === "email") {
      if (!isValidEmail(event.target.value)) {
        setFormError({
          ...formError,
          emailError: true,
          emailMessage:
            "Veuillez entrer une adresse e-mail ou un numéro de téléphone valide.",
        });
      } else {
        setFormError({
          ...formError,
          emailError: false,
          emailMessage: "",
        });
      }
    }
    if (event.target.id === "pwd") {
      if (!isValidPassword(event.target.value)) {
        setFormError((prevFormError) => ({
          ...prevFormError,
          passwordError: true,
          passwordMessage:
            "Votre mot de passe doit contenir entre 4 et 60 caractères.",
        }));
      } else {
        setFormError((prevFormError) => ({
          ...prevFormError,
          passwordError: false,
          passwordMessage: "",
        }));
      }
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (formError.emailError || formError.passwordError) {
      return;
    }

    try {
      const response = await login({
        variables: {
          loginInput: {
            email: form.email,
            password: form.pwd,
          },
        },
      });
      auth.login(response.data.login);
    } catch (error: any) {
      switch (error.message) {
        case "Error: Utilisateur introuvable":
          setSubmitError({
            error: true,
            message:
              "Nous n'avons pas trouvé de compte avec cette adresse e-mail. Veuillez réessayer ou créez un nouveau compte.",
          });
          break;
        case "Mot de passe incorrect":
          setSubmitError({
            error: true,
            message:
              "Mot de passe incorrect. Veuillez réessayer ou réinitialiser votre mot de passe.",
          });
          break;
        default:
          setSubmitError({
            error: true,
            message:
              "Une erreur est survenue. Veuillez réessayer plus tard." +
              error.message,
          });
      }
    }
  };

  return (
    <>
      {submitError.error && (
        <div className="bg-orange-500 rounded text-[14px] mb-4 table w-full">
          <div className="py-[10px] px-5 text-white table-cell align-middle">
            {submitError.message}
          </div>
        </div>
      )}
      <form action="" onSubmit={handleSubmit}>
        <div className="pb-[16px] max-w-full relative">
          <div className="relative">
            <div
              className={`relative border-0 rounded ${
                formError.emailMessage || submitError.message.includes("e-mail")
                  ? "after:absolute after:border-b-2 after:border-b-orange-500 after:rounded-b after:bottom-0 after:block after:w-full after:pointer-events-none after:h-[6px] after:left-0"
                  : ""
              }`}
            >
              <label>
                <input
                  type="text"
                  className="bg-input border-0 rounded text-white h-[50px] leading-[50px] px-[20px] pt-[16px] w-full box-border block text-[16px]"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={(event) => handleFocus(event, "focused")}
                  onBlur={(event) => handleBlur(event, "focused")}
                />
                <label
                  htmlFor="email"
                  className="text-gray absolute text-[14px] top-1/2 -translate-y-1/2 left-[20px] transition"
                >
                  E-mail ou numéro de téléphone
                </label>
              </label>
            </div>
          </div>
        </div>
        {formError.emailMessage && (
          <div className="text-[13px] text-orange-500 mb-[16px]">
            {formError.emailMessage}
          </div>
        )}

        <div className="pb-[16px] max-w-full relative">
          <div className="relative">
            <div
              className={`relative border-0 rounded ${
                formError.passwordMessage ||
                submitError.message.includes("mot de passe")
                  ? "after:absolute after:border-b-2 after:border-b-orange-500 after:rounded-b after:bottom-0 after:block after:w-full after:pointer-events-none after:h-[6px] after:left-0"
                  : ""
              }`}
            >
              <label>
                <input
                  type="password"
                  className="bg-input border-0 rounded text-white h-[50px] leading-[50px] px-[20px] pt-[16px] w-full box-border block text-[16px]"
                  id="pwd"
                  value={form.pwd}
                  onChange={handleChange}
                  onFocus={(event) => handleFocus(event, "focused")}
                  onBlur={(event) => handleBlur(event, "focused")}
                />
                <label
                  htmlFor="pwd"
                  className="text-gray absolute text-[14px] top-1/2 -translate-y-1/2 left-[20px]"
                >
                  Mot de passe
                </label>
              </label>
            </div>
          </div>
        </div>

        {formError.passwordMessage && (
          <div className="text-[13px] text-orange-500 mb-[16px]">
            {formError.passwordMessage}
          </div>
        )}

        <button className="rounded text-[16px] font-medium mt-[24px] mb-[12px] max-w-full w-full p-[16px] bg-primary inline-block min-h-[37px] min-w-[98px] relative text-white text-center align-middle">
          S'identifier
        </button>
        <div className="flex">
          <div className="grow pl-[20px] box-border text-[16px] relative select-none inline-block mb-[-5px] remember">
            <input
              type="checkbox"
              className="left-0 opacity-0 absolute top-0 mr-[10px] box-border p-0 leading-normal"
              id="remember"
            />
            <label htmlFor="remember" className="">
              <span className="text-[13px]">Se souvenir de moi</span>
            </label>
          </div>
          <a
            href="#"
            target="_self"
            className="pt-[2px] cursor-pointer text-[#b3b3b3] text-[13px] "
          >
            Besoin d'aide ?
          </a>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

import { api } from "@/api";
import { useUserStore } from "@/stores/user";
import { useState } from "react";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import PPButton from "@/components/basic/button/PPButton";

// ** Styles **
import "./auth.scss";

// ** Types **
interface Form {
  username: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  setIsOpen: (value: boolean) => void;
  setIsLogin: (value: boolean) => void;
}

const Register = ({ setIsOpen, setIsLogin }: Props) => {
  // ** Store **
  const { setUser } = useUserStore();

  // ** State **
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ** Methods **
  const formInvalid = (): boolean => {
    // Check if all items in the form have values
    return Object.values(form).some((value) => !value);
  };

  const setFormValue = (key: string, value: string): void => {
    // Update a value in the form state based on the key
    setForm({
      ...form,
      [key]: value,
    });
  };

  const createAccount = async (e: any): Promise<void> => {
    e.preventDefault();

    // If the form is disabled or the passwords don't match, return
    if (formInvalid() || form.password !== form.confirmPassword) return;

    setLoading(true);

    const { name, email, password, username } = form;

    // Send the form data off to the API
    const res = await api(
      "POST",
      "/register",
      { username: username.toLowerCase(), name, email, password },
      false,
    );

    // If user was created, set the user in the store and navigate to the home page
    if (res?.uuid) {
      setUser(res);
      setIsOpen(false);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="auth">
        <h2 className="pp-text-colour-primary">Register</h2>

        <form className="auth-form" onSubmit={createAccount}>
          <PPTextInput
            className="auth-username"
            label="Username"
            type="username"
            required={true}
            value={form.username}
            setValue={(e) => setFormValue("username", e)}
          />

          <PPTextInput
            label="Name"
            type="name"
            required={true}
            value={form.name}
            setValue={(e) => setFormValue("name", e)}
          />

          <PPTextInput
            label="Email"
            type="email"
            required={true}
            value={form.email}
            setValue={(e) => setFormValue("email", e)}
          />

          <div>
            <PPTextInput
              label="Password"
              value={form.password}
              required={true}
              icon={isPasswordShowing ? "eye-slash" : "eye"}
              type={isPasswordShowing ? "text" : "password"}
              iconColour="grey"
              setValue={(e) => setFormValue("password", e)}
              iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
            />
            <p className="auth-password-hint">
              Password must include 6 characters and 1 number
            </p>
          </div>

          <PPTextInput
            label="Confirm Password"
            value={form.confirmPassword}
            required={true}
            type={isPasswordShowing ? "text" : "password"}
            icon={isPasswordShowing ? "eye-slash" : "eye"}
            iconColour="grey"
            setValue={(e) => setFormValue("confirmPassword", e)}
            iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
          />

          <PPButton
            width="100%"
            text="Create account"
            type="submit"
            loading={loading}
          />
        </form>

        <div className="auth-msg">
          <p>
            Already have an account?{" "}
            <a className="pp-cursor-pointer" onClick={() => setIsLogin(true)}>
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

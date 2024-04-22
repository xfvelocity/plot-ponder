import { useState } from "react";
import { api } from "@/api";
import { useUserStore } from "@/stores/user";

// ** Components **
import PPButton from "@/components/basic/button/PPButton";
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";

// ** Styles **
import "./auth.scss";

// ** Types **
interface Form {
  email: string;
  password: string;
}

interface Props {
  setIsOpen: (value: boolean) => void;
  setIsLogin: (value: boolean) => void;
}

const Login = ({ setIsOpen, setIsLogin }: Props) => {
  // ** Store **
  const { setUser } = useUserStore();

  // ** State **
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  // ** Functions **
  const invalidForm = (): boolean => {
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

  const logIn = async (e: any): Promise<void> => {
    e.preventDefault();

    // If the form is disabled or the passwords don't match, return
    if (invalidForm()) return;

    setLoading(true);

    // Send the form data off to the API
    const res = await api("POST", "/login", form, false);

    // If user was created, set the user in the store and navigate to the home page
    if (res?.uuid) {
      setUser(res);
      setIsOpen(false);
    }

    setLoading(false);
  };

  return (
    <div className="auth">
      <h2 className="pp-text-colour-primary">Log in</h2>

      <form className="auth-form" onSubmit={logIn}>
        <PPTextInput
          label="Email"
          type="email"
          required={true}
          value={form.email}
          setValue={(e) => setFormValue("email", e)}
        />
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

        <PPButton width="100%" text="Log in" type="submit" loading={loading} />
      </form>

      <div className="auth-msg">
        <p>
          No account? <a onClick={() => setIsLogin(false)}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

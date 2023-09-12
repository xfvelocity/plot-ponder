import { api } from "@/api";
import { useUserStore } from "@/stores/user";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// ** Styles **
import "./register.scss";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import PPButton from "@/components/basic/button/PPButton";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  // ** Router **
  const navigate = useNavigate();

  // ** Store **
  const { setUser } = useUserStore();

  // ** State **
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ** Computed **
  const submitDisabled = useMemo((): boolean => {
    // Check if all items in the form have values
    return Object.values(form).some((value) => !value);
  }, [form]);

  // ** Functions **
  const setFormValue = (key: string, value: string): void => {
    // Update a value in the form state based on the key
    setForm({
      ...form,
      [key]: value,
    });
  };

  const createAccount = async (): Promise<void> => {
    // If the form is disabled or the passwords don't match, return
    // if (submitDisabled || form.password !== form.confirmPassword) return;

    setLoading(true);

    const { name, email, password } = form;

    // Send the form data off to the API
    const res = await api("POST", "/auth/register", { name, email, password });

    // If user was created, set the user in the store and navigate to the home page
    if (res?.uuid) {
      setUser(res);
      navigate("/");
    }

    setLoading(false);
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={createAccount}>
        <PPTextInput
          label="Name"
          type="name"
          required={true}
          value={form.name}
          setValue={(e) => setFormValue("name", e)}
          onEnter={createAccount}
        />
        <PPTextInput
          label="Email"
          type="email"
          required={true}
          value={form.email}
          setValue={(e) => setFormValue("email", e)}
          onEnter={createAccount}
        />
        <PPTextInput
          label="Password"
          value={form.password}
          required={true}
          icon={isPasswordShowing ? "eye-slash" : "eye"}
          type={isPasswordShowing ? "text" : "password"}
          setValue={(e) => setFormValue("password", e)}
          iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
          onEnter={createAccount}
        />
        <PPTextInput
          label="Confirm Password"
          value={form.confirmPassword}
          required={true}
          type={isPasswordShowing ? "text" : "password"}
          icon={isPasswordShowing ? "eye-slash" : "eye"}
          setValue={(e) => setFormValue("confirmPassword", e)}
          iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
          onEnter={createAccount}
        />

        <PPButton
          width="100%"
          text="Create account"
          type="submit"
          loading={loading}
          disabled={submitDisabled}
        />
      </form>
    </div>
  );
};

export default Register;

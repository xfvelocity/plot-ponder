import { useMemo, useState } from "react";

// ** Styles **
import "./register.scss";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import PPButton from "@/components/basic/button/PPButton";
import { api } from "@/api";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  // ** Data **
  const [loading, setLoading] = useState<boolean>(false);
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ** Methods **
  const submitDisabled = useMemo((): boolean => {
    return Object.values(form).some((value) => !value);
  }, [form]);

  const setFormValue = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const createAccount = async () => {
    setLoading(true);

    const { name, email, password } = form;
    const res = await api("POST", "/auth/register", { name, email, password });

    console.log(res);
    setLoading(true);
  };

  return (
    <div className="register">
      <PPTextInput
        label="Name"
        value={form.name}
        setValue={(e) => setFormValue("name", e)}
      />
      <PPTextInput
        label="Email"
        value={form.email}
        setValue={(e) => setFormValue("email", e)}
      />
      <PPTextInput
        label="Password"
        value={form.password}
        icon={isPasswordShowing ? "eye-slash" : "eye"}
        type={isPasswordShowing ? "text" : "password"}
        setValue={(e) => setFormValue("password", e)}
        iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
      />
      <PPTextInput
        label="Confirm Password"
        value={form.confirmPassword}
        type={isPasswordShowing ? "text" : "password"}
        icon={isPasswordShowing ? "eye-slash" : "eye"}
        setValue={(e) => setFormValue("confirmPassword", e)}
        iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
      />
      {submitDisabled}

      <PPButton
        width="100%"
        text="Create account"
        loading={loading}
        onClick={createAccount}
      />
    </div>
  );
};

export default Register;

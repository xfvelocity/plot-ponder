import { useState } from "react";

// ** Styles **
import "./register.scss";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const [isPasswordShowing, setIsPasswordShowing] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setFormValue = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: value,
    });
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
        setValue={(e) => setFormValue("password", e)}
        iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
      />

      <PPTextInput
        label="Confirm Password"
        value={form.confirmPassword}
        icon={isPasswordShowing ? "eye-slash" : "eye"}
        setValue={(e) => setFormValue("confirmPassword", e)}
        iconFn={() => setIsPasswordShowing(!isPasswordShowing)}
      />
    </div>
  );
};

export default Register;

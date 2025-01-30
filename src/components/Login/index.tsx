import LogoImg from "@/assets/images/logo.png";
import BgCover from "@/assets/images/login.png";
import {Button, Checkbox, Form, Input, InputGroup} from "rsuite";
import {useFormik} from "formik";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {useRegisterUser} from "@/services/auth/mutations";
import {useLocalStorage} from "@/hooks/use-local-storage";

const Field = ({error, ...rest}: any) => {
  return (
    <Form.Group className="!mb-3">
      <Input {...rest} />
      <Form.ErrorMessage show={!!error} placement="bottomStart">
        {error}
      </Form.ErrorMessage>
    </Form.Group>
  );
};

export default function LoginComponent() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);

  const {registerUser, isRegister} = useRegisterUser({});

  const handleChange = () => {
    setVisible(!visible);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values: any) => {
      const errors: {name?: string; email?: string; password?: string} = {};
      if (!values.name) {
        errors.name = "Enter your name";
      }
      if (!values.password) {
        errors.password = "Enter your password";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async (values: any) => {
      console.log(values);
      const res = await registerUser(values);

      useLocalStorage().setItem("token", res?.token);

      navigate("/");
    },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-light text-center text-text">
      {/* <img
        src={BgCover}
        alt="Cover"
        className="absolute z-0 left-0 top-0 h-full w-full"
        style={{
          filter: "drop-shadow(0px 0px 10px #EC2C5A)",
        }}
      /> */}
      <div className="shadow-2xl relative z-10 min-w-[560px] bg-white rounded-[10px] flex flex-col gap-4 items-center px-[70px] pt-[30px] pb-[50px]">
        <img src={LogoImg} alt="Logo" />
        <div className="mb-[15px]">
          <p className="text-xl p-0">Welcome back!</p>
          <p className="text-[#ABABAB] p-0 -mt-0">Sign in to continue to yourDigital Library</p>
        </div>

        <Form onSubmit={(_, event) => formik.handleSubmit(event)} className="w-full text-left">
          <Form.ControlLabel className="font-[600] text-text">Username</Form.ControlLabel>
          <Field
            name="name"
            placeholder="Name"
            value={formik.values.name}
            error={formik.errors.name}
            onChange={(value: string) => formik.setFieldValue("name", value)}
          />
          <Form.ControlLabel className="font-[600] text-text">Email</Form.ControlLabel>
          <Field
            name="email"
            placeholder="Email"
            value={formik.values.email}
            error={formik.errors.email}
            onChange={(value: string) => formik.setFieldValue("email", value)}
          />

          <Form.ControlLabel className="font-[600] text-text">Password</Form.ControlLabel>
          <InputGroup inside className="w-full border">
            <Input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={(value: string) => formik.setFieldValue("password", value)}
              value={formik.values.password}
            />
            <InputGroup.Button
              className="!bg-transparent !hover:bg-transparent !focus:bg-transparent"
              onClick={handleChange}
            >
              {visible ? (
                <Eye color="var(--light-foreground)" height={"100%"} />
              ) : (
                <EyeOff color="var(--light-foreground)" height={"100%"} />
              )}
            </InputGroup.Button>
            <Form.ErrorMessage show={!!formik.errors.password} placement="bottomStart">
              {(formik.errors.password as React.ReactNode) || ""}
            </Form.ErrorMessage>
          </InputGroup>

          <div className="flex justify-between items-center mt-1">
            <Checkbox defaultChecked color="red">
              Remember me
            </Checkbox>

            <Link to="/forgot-password" className="underline text-text">
              Forgot Password?
            </Link>
          </div>

          <Button className="!bg-primary w-full mt-4 !text-light !font-[600]" type="submit">
            Submit
          </Button>
        </Form>

        <p className="text-left w-full mt-4">
          New User?{" "}
          <Link to="/register" className="underline text-text">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

import LogoImg from "@/assets/images/logo.png";
import BgCover from "@/assets/images/login.png";
import {Form, Formik, Field as FormikField} from "formik";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {useRegisterUser} from "@/services/auth/mutations";
import {useLocalStorage} from "@/hooks/use-local-storage";
import * as Yup from "yup";
import {InputGroup} from "../ui/input-group";
import {Button, Input} from "@chakra-ui/react";
import {Field} from "../ui/field";

const validationSchema = Yup.object({
  name: Yup.string().required("Ismingizni kiriting"),
  password: Yup.string().required("Parolingizni kiriting"),
  email: Yup.string().email("Noto'g'ri email"),
});

export default function RegisterComponent() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState<boolean>(false);
  const {registerUser, isRegister} = useRegisterUser({});

  const initialValues = {
    name: "",
    password: "",
    email: "",
  };

  const handleChange = () => {
    setVisible(!visible);
  };

  const handleSubmit = async (values: any) => {
    const res = await registerUser(values);
    useLocalStorage().setItem("token", res?.token);
    useLocalStorage().setItem("profile", res?.user);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-light text-center text-text">
      <img
        src={BgCover}
        alt="Cover"
        className="absolute z-0 left-0 top-0 h-full w-full"
        style={{
          filter: "drop-shadow(0px 0px 10px #EC2C5A)",
        }}
      />
      <div className="shadow-2xl relative z-10 min-w-[560px] bg-white rounded-[10px] flex flex-col gap-4 items-center px-[70px] pt-[30px] pb-[50px]">
        <img src={LogoImg} alt="Logo" />
        <div className="mb-[15px]">
          <p className="text-xl p-0">Registration</p>
          <p className="text-[#ABABAB] p-0 -mt-0">For Both Staff & Students</p>
        </div>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({errors, touched}) => (
            <Form className="flex flex-col gap-3 w-full">
              <Field label="Enter name" labelProps={{color: "#858991", size: 14, weight: "normal"}}>
                <InputGroup flex="1" className="w-full bg-light border rounded-md">
                  <FormikField name="name">
                    {({field}: {field: any}) => (
                      <Input {...field} placeholder="Enter name" type="text" className="pl-2" />
                    )}
                  </FormikField>
                </InputGroup>
                {touched.name && errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
              </Field>
              <Field label="Email pochta" labelProps={{color: "#858991", size: 14, weight: "normal"}}>
                <InputGroup flex="1" className="w-full bg-light border rounded-md">
                  <FormikField name="email">
                    {({field}: {field: any}) => (
                      <Input {...field} placeholder="Email pochta manzili" type="email" className="pl-2" />
                    )}
                  </FormikField>
                </InputGroup>
                {touched.email && errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              </Field>

              <Field label="Password" labelProps={{color: "#858991", size: "sm", weight: "normal"}}>
                <InputGroup
                  flex="1"
                  className="w-full bg-light border rounded-md"
                  endElement={
                    visible ? (
                      <Eye
                        color="var(--light-foreground)"
                        height={"100%"}
                        onClick={handleChange}
                        className="cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        color="var(--light-foreground)"
                        height={"100%"}
                        onClick={handleChange}
                        className="cursor-pointer"
                      />
                    )
                  }
                >
                  <FormikField name="password">
                    {({field}: {field: any}) => (
                      <Input {...field} placeholder="Password" className="pl-2" type={visible ? "text" : "password"} />
                    )}
                  </FormikField>
                </InputGroup>
                {touched.password && errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
              </Field>

              <Button
                className="!bg-primary w-full mt-4 !text-light !font-[600]"
                type="submit"
                loading={isRegister}
                loadingText="Submitting..."
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        <p className="text-left w-full mt-4">
          Already a User?{" "}
          <Link to="/login" className="!underline text-text">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
}

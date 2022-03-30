import { FC } from "react";
import Button from "../../../Elements/Button/Button";

import { Formik } from "formik";
import "./UserForm.scss"

type LoginType = {
    setForm: (value: string) =>void;
  };

  
const Login: FC<LoginType> = (props) => {
  return (

        <div className="UserForm__login">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors: { [key: string]: string } = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length > 20) {
                errors.password = "length more 20";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form className="login" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
               <span>{errors.email && touched.email && errors.email}</span> 
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
               <span>{errors.password && touched.password && errors.password}</span>   
                
                  <button type="submit" disabled={isSubmitting}>
                  <Button  value={true} text="Войти"/>
                  </button>
                  <Button click={()=>props.setForm("registration")}  value={true} text="Регистрация"  />
      
              </form>
            )}
          </Formik>
        </div>

  );
};

export default Login;

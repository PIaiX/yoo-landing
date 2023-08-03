import React, { useCallback, useLayoutEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../../components/Meta";
import { login } from "../../services/auth";
import { useForm } from "react-hook-form";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = useSelector((state) => state?.auth);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (auth.isAuth) {
      return navigate("/");
    }
  }, [auth.isAuth]);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "all", reValidateMode: "onSubmit" });

  const dispatch = useDispatch();

  const onSubmit = useCallback((data) => {
    dispatch(login(data));
  }, []);

  return (
    <>
      <Meta title="Войти" />
      <Row className="gx-0 hv-100-important">
        <Col lg={8} md={7} className="login-info d-none d-md-flex">
          <div className="flex-column d-flex align-self-center justify-content-center align-items-center">
            <img src="/logo.png" height={80} />
            <h2 className="my-4 text-center">С возвращением!</h2>
            <img src="./images/auth/login.svg" width="80%" />
          </div>
        </Col>
        <Col lg={4} md={5}>
          <div className="login">
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="mb-3 h5 fw-7 w-100">Войдите в свой профиль</h3>
              <p className="mb-4 text-muted fs-08">
                Нет профиля?{" "}
                <Link className="text-success" to="/reg">
                  Зарегистрироваться
                </Link>
              </p>
              <Input
                autoFocus={true}
                label="Логин"
                name="login"
                errors={errors}
                register={register}
                validation={{
                  required: "Введите логин",
                  maxLength: {
                    value: 250,
                    message: "Максимально 250 символов",
                  },
                }}
              />
              <div className="mt-4">
                <Input
                  label="Пароль"
                  type="password"
                  name="password"
                  errors={errors}
                  register={register}
                  validation={{
                    required: "Введите пароль",
                    minLength: {
                      value: 4,
                      message:
                        "Минимальный пароль должен состоять из 4-ех символов",
                    },
                  }}
                />
              </div>
              <p className="mt-3 d-flex justify-content-end">
                <Link to="/recovery" className="text-muted fs-08">
                  Забыли пароль?
                </Link>
              </p>
              <Button
                type="submit"
                className="btn-primary mt-3 w-100"
                disabled={!isValid}
              >
                Войти
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Login;

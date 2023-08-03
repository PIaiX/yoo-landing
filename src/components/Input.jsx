import { memo, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import InputMask from "react-input-mask";

const Input = memo(
  ({
    mask,
    name,
    label,
    placeholder,
    defaultValue,
    value,
    className,
    register,
    errors,
    min,
    max,
    maxLength = 5000,
    autofocus,
    required,
    readOnly = true,
    type,
    onChange,
    validation,
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={
          "input " +
          className +
          (errors && errors[name]?.type === "required" ? " error" : "") +
          (type == "password" ? " input-password" : "")
        }
      >
        <div>
          {label && (
            <label htmlFor={name} className="label">
              {label}
              {required && "*"}
            </label>
          )}
          {mask ? (
            <InputMask
              mask={mask}
              autoFocus={autofocus}
              id={name}
              name={name}
              autoComplete="no"
              type={type}
              maxLength={maxLength}
              min={min}
              max={max}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              onChange={(e) =>
                onChange && !register && onChange(e.target.value)
              }
              readOnly={!readOnly && "readonly"}
              {...(register && { ...register(name, validation) })}
            ></InputMask>
          ) : (
            <input
              autoFocus={autofocus}
              id={name}
              name={name}
              autoComplete="no"
              type={showPassword ? "text" : type}
              maxLength={maxLength}
              min={min}
              max={max}
              placeholder={placeholder}
              defaultValue={defaultValue}
              value={value}
              onChange={(e) =>
                onChange && !register && onChange(e.target.value)
              }
              readOnly={!readOnly && "readonly"}
              {...(register && { ...register(name, validation) })}
            />
          )}
          {type == "password" && (
            <div className="input-password-eye text-muted">
              <a onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <IoEyeOffOutline size={22} />
                ) : (
                  <IoEyeOutline size={22} />
                )}
              </a>
            </div>
          )}
        </div>
        {errors && errors[name]?.type === "required" && (
          <p className="text-left error-text fs-07">{errors[name]?.message}</p>
        )}
      </div>
    );
  }
);

export default Input;

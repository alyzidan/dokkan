"use client";

import { Mail, Lock, Eye, EyeOff, Check, X } from "lucide-react";
import { useLoginForm } from "@/hooks/useLoginForm";
import styles from "./styles.module.scss";
import { useEffect } from "react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    emailValue,
    passwordValue,
    trigger,
    touchedFields,
  } = useLoginForm();

  // Trigger validation when fields change
  useEffect(() => {
    if (emailValue || passwordValue) {
      trigger();
    }
  }, [emailValue, passwordValue, trigger]);

  const getInputState = (field: string, value: string) => {
    if (!touchedFields[field as keyof typeof touchedFields]) return "default";
    return errors[field as keyof typeof errors] ? "error" : "success";
  };

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginForm__form}
      >
        {/* Email Field */}
        <div className={styles.loginForm__field}>
          <label htmlFor="email" className={styles.loginForm__label}>
            <Mail size={18} />
            <span>Email Address</span>
          </label>
          <div className={styles.loginForm__inputWrapper}>
            <input
              id="email"
              type="email"
              className={`${styles.loginForm__input} ${
                styles[
                  `loginForm__input--${getInputState("email", emailValue)}`
                ]
              }`}
              placeholder="Enter your email"
              {...register("email")}
            />
            {getInputState("email", emailValue) === "success" && (
              <Check className={styles.loginForm__statusIcon} />
            )}
            {getInputState("email", emailValue) === "error" && (
              <X className={styles.loginForm__statusIcon} />
            )}
          </div>
          {errors.email && (
            <p className={styles.loginForm__error}>{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className={styles.loginForm__field}>
          <label htmlFor="password" className={styles.loginForm__label}>
            <Lock size={18} />
            <span>Password</span>
          </label>
          <div className={styles.loginForm__inputWrapper}>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`${styles.loginForm__input} ${
                styles[
                  `loginForm__input--${getInputState(
                    "password",
                    passwordValue
                  )}`
                ]
              }`}
              placeholder="Enter your password"
              {...register("password")}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.loginForm__togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {getInputState("password", passwordValue) === "success" && (
              <Check className={styles.loginForm__statusIcon} />
            )}
            {getInputState("password", passwordValue) === "error" && (
              <X className={styles.loginForm__statusIcon} />
            )}
          </div>
          {errors.password && (
            <p className={styles.loginForm__error}>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.loginForm__button}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

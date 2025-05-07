"use client";

import { Mail, Lock, Eye, EyeOff, Check, X } from "lucide-react";
import { useLoginForm } from "@/hooks/useLoginForm";

import styles from "./styles.module.scss";
import { motion } from "framer-motion";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    handleFieldInteraction,
    getInputState,
    watch,
    setFocus,
  } = useLoginForm();

  const emailValue = watch("email");
  const passwordValue = watch("password");

  return (
    <motion.div
      className={styles.loginForm}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h2
        className={styles.loginForm__title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        Login
      </motion.h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.loginForm__form}
      >
        {/* Email Field */}
        <motion.div
          className={styles.loginForm__field}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="email"
            className={styles.loginForm__label}
            onClick={() => {
              setFocus("email");
              handleFieldInteraction("email");
            }}
          >
            <Mail size={18} />
            <span>Email </span>
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
              {...register("email", {
                onBlur: () => handleFieldInteraction("email"),
              })}
            />
            {getInputState("email", emailValue) === "success" && (
              <motion.div
                className={styles.loginForm__statusIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <Check className="relative bottom-[10px]" />
              </motion.div>
            )}
            {getInputState("email", emailValue) === "error" && (
              <motion.div
                className={styles.loginForm__statusIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <X className="relative bottom-[12px]" />
              </motion.div>
            )}
          </div>
          {errors.email && getInputState("email", emailValue) === "error" && (
            <motion.p
              className={styles.loginForm__error}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errors.email.message}
            </motion.p>
          )}
        </motion.div>

        {/* Password Field */}
        <motion.div
          className={styles.loginForm__field}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label
            htmlFor="password"
            className={styles.loginForm__label}
            onClick={() => {
              setFocus("password");
              handleFieldInteraction("password");
            }}
          >
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
              {...register("password", {
                onBlur: () => handleFieldInteraction("password"),
              })}
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
              <motion.div
                className={styles.loginForm__statusIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <Check className="relative bottom-[10px]" />
              </motion.div>
            )}
            {getInputState("password", passwordValue) === "error" && (
              <motion.div
                className={styles.loginForm__statusIcon}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <X className="relative bottom-[12px]" />
              </motion.div>
            )}
          </div>
          {errors.password &&
            getInputState("password", passwordValue) === "error" && (
              <motion.p
                className={styles.loginForm__error}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.password.message}
              </motion.p>
            )}
        </motion.div>

        <motion.button
          type="submit"
          className={styles.loginForm__button}
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </motion.button>
      </form>
    </motion.div>
  );
};

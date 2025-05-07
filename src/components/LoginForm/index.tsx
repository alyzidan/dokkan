"use client";

import { Mail, Lock, Eye, EyeOff, Check, X } from "lucide-react";
import { useLoginForm } from "@/hooks/useLoginForm";

import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <motion.div className={`${styles.loginForm__wrapper} py-20`}>
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
          <p className="text-[60px] font-normal pt-12 ">Sign in</p>
          <span className="font-normal text-[17px]	text-gray-500">
            Access our services in one clicks
          </span>
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
            className={`${styles.loginForm__button} text-white bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-t focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 `}
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </motion.button>
          <motion.p
            className="text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            or
          </motion.p>
          <motion.button
            type="submit"
            className={styles.loginForm__googlebutton}
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="inline-flex gap-2 items-center">
              <span>
                <svg height="24" viewBox="0 0 24 24" width="24" crosspilot="">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                  <script xmlns="" />
                </svg>
              </span>
              <span>Continue with Google</span>
            </p>
          </motion.button>
          <p className="text-center">
            Didn't have an account?{" "}
            <a href="/">
              <span className="underline">Register</span>
            </a>
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
};

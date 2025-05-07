import { useState } from "react";
import { useForm } from "react-hook-form";

import { loginSchema, LoginFormData } from "@/lib/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState({
    email: false,
    password: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
    setFocus,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleFieldInteraction = (fieldName: keyof typeof hasInteracted) => {
    if (!hasInteracted[fieldName]) {
      setHasInteracted((prev) => ({
        ...prev,
        [fieldName]: true,
      }));
    }
  };

  const getInputState = (
    fieldName: keyof typeof hasInteracted,
    value: string
  ) => {
    if (!hasInteracted[fieldName]) return "default";
    return errors[fieldName] ? "error" : "success";
  };

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Login data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
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
  };
};

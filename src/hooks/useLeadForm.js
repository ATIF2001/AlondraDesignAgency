import { useState } from "react";

const LEAD_ENDPOINT = "https://finance.joveratourism.ae/api/leads/create-lead-from-website";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  description: "",
};

export function useLeadForm({ product = "Alondra" } = {}) {
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const payload = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        phone: formValues.phone.trim(),
        description: formValues.description.trim(),
        product,
      };

      const response = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Lead request failed with status ${response.status}`);
      }

      setFormValues(initialValues);
      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "We couldn't send your message right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formValues,
    isSubmitting,
    status,
    handleChange,
    handleSubmit,
  };
}

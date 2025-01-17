"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextArea from "@/components/FormInputs/TextArea";
import InputField from "@/components/FormInputs/InputField";

type Inputs = {
  title: string;
  description: string;
};

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setLoading(true);
    const baseUrl = "http://localhost:3000"; // Ensure the correct base URL

    try {
      const response = await fetch(`${baseUrl}/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the response is okay (status code 200-299)
      if (response.ok) {
        const body = await response.text();
        if (body) {
          const responseData = JSON.parse(body); // Parse only if the body is not empty
          console.log("Category created:", responseData);
          alert("Category saved successfully!");
          reset(); // Reset form on success
        } else {
          console.error("Empty response body");
        }
      } else {
        const errorMessage = await response.text();
        console.error("Server error:", errorMessage);
        alert("Error saving category.");
      }
    } catch (error) {
      console.error("Error saving category:", error);
      alert("Error saving category.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <FormHeader title="New Category" href="/dashboard/inventory" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-6 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Product Name Field */}
          <div className="sm:col-span-2">
            <InputField
              id="title"
              label="Category Title"
              isRequired
              placeholder="Type Category Title"
              register={register("title", { required: "Product name is required" })}
              error={errors.title}
            />
          </div>

          {/* Description Field */}
          <div className="sm:col-span-2">
            <TextArea
              id="Category Description"
              label="Description"
              placeholder="Enter a detailed description (2-500 characters)"
              register={register("description", {
                required: "Description is required",
              })}
              error={errors.description}
              rows={5}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <SubmitButton isLoading={loading} title="Category" />
        </div>
      </form>
    </div>
  );
}

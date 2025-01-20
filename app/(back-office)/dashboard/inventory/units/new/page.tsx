"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";

type Inputs = {
  title: string;
  abbreviation: string;
};

export default function NewUnits() {
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
      const response = await fetch(`${baseUrl}/api/units`, {
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
          console.log("Units created:", responseData);
          alert("Units saved successfully!");
          reset(); // Reset form on success
        } else {
          console.error("Empty response body");
        }
      } else {
        const errorMessage = await response.text();
        console.error("Server error:", errorMessage);
        alert("Error saving Unit.");
      }
    } catch (error) {
      console.error("Error saving Unit:", error);
      alert("Error saving Unit.");
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
        className="w-full max-w-3xl p-6 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="flex w-full space-x-10">
          {/* Product Name Field */}
          <div className="sm:col-span-2 w-full">
            <InputField
              id="title"
              label="Units Title"
              placeholder="Type Units Title"
              register={register("title", { required: "Unit is required" })}
              error={errors.title}
              isRequired
            />
          </div>

          {/* Description Field */}
          <div className="sm:col-span-2 w-full">
            <InputField
              id="abbreviation"
              label="Abbreviation"
              isRequired={false}
              placeholder="Type Unit Abbreviation)"
              register={register("abbreviation", {
                required: "Abbreviation is required",
              })}
              error={errors.abbreviation}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <SubmitButton isLoading={loading} title="Unit" />
        </div>
      </form>
    </div>
  );
}

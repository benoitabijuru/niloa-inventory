"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import TextArea from "@/components/FormInputs/TextArea";
import { SelectorInput } from "@/components/FormInputs/SelectorInput";

type Inputs = {
  name: string;
  location: string;
  type: string;
  description: string;
};

export default function NewWarehouse() {
  const selectOptions = [
    {
      label:"Main Warehouse",
      value:"main"
    },
    {
      label:"Branch Warehouse",
      value:"branch"
    }]
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    
    setLoading(true);


    try {
      const response = await fetch("http://localhost:3000/api/warehouse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Warehouse saved successfully!");
        reset();
      } else {
        console.error("Server error");
        alert("Error saving warehouse.");
      }
    } catch (error) {
      console.error("Error saving warehouse:", error);
      alert("Error saving warehouse.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-6 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Warehouse Name */}
          <InputField
            id="name"
            label="Warehouse Name"
            placeholder="Enter warehouse name"
            register={register("name", { required: "Name is required" })}
            error={errors.name}
            isRequired
          />
          

          {/* Country Selector */}
          <InputField
            id="location"
            label="Warehouse Location"
            placeholder="Select a warehouse location"
            register={register("location", { required: "Location is required" })}
            error={errors.location}
            isRequired
             // Sync location with form
          />

          {/* Warehouse Type */}
          <SelectorInput
          name="type"
          label="Warehouse Type"
          register={register("type", { required: "Type is required" })}
          options={selectOptions}
          
          />
        </div>

        {/* Description */}
        <TextArea
          id="description"
          label="Description"
          placeholder="Enter warehouse description"
          register={register("description", { required: "Description is required" })}
          error={errors.description}
          
        />

        {/* Submit Button */}
        <div className="mt-6">
          <SubmitButton isLoading={loading} title="Warehouse" />
        </div>
      </form>
    </div>
  );
}

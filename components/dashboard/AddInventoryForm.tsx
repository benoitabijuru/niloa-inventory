"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import TextArea from "@/components/FormInputs/TextArea";
import { SelectorInput } from "@/components/FormInputs/SelectorInput";

// Correct interface for form inputs
interface Inputs {
  addStockQty: number;
  referenceNumber: number;
  receivingWarehouseId: string;
  notes?: string;
}

export default function AddInventoryForm() {
  const selectOptions = [
    {
      label: "Main Warehouse",
      value: "main"
    },
    {
      label: "Branch Warehouse",
      value: "branch"
    }
  ];
  const refNumberOptions = [
    {
      label: "001",
      value: "1"
    },
    {
      label: "002",
      value: "1"
    }
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm<Inputs>();
  
  const [loading, setLoading] = useState(false);
 
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data)
    setLoading(true);

    const baseUrl = "http://localhost:3000"; // Ensure the correct base URL

    try {
      const response = await fetch(`${baseUrl}/api/adjustments/add`, {
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
          console.log("Stock Added:", responseData);
          alert("Stock Added successfully!");
           // Reset form on success
        } else {
          console.error("Empty response body");
        }
      } else {
        const errorMessage = await response.text();
        console.error("Server error:", errorMessage);
        alert("Error failed to add stock.");
      }
    } catch (error) {
      console.error("Failed to add stock:", error);
      alert("Failed to add stock.");
    } finally {
      setLoading(false);
    }
  };
  return (
   
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputField
            id="addStockQty"
            label="Enter Quantity of Stock to Add"
            placeholder="Enter amount to transfer"
            register={register("addStockQty")}
            error={errors.addStockQty}
            isRequired
            
          />
          <SelectorInput
            name="referenceNumber"
            label="Reference Number"
            register={register("referenceNumber")}
            options={refNumberOptions}
  
          />
          <SelectorInput
            name="receivingWarehouseId"
            label="Select Receiving Branch"
            register={register("receivingWarehouseId")}
            options={selectOptions}   
          />
        </div>

        <div className="mt-6">
          <TextArea
            id="notes"
            label="Adjustment Notes"
            placeholder="Enter adjustment notes (optional)"
            register={register("notes")}
            error={errors.notes}
            rows={4}
          />
        </div>

        <div className="mt-6">
          <SubmitButton isLoading={loading} title="Add stock" />
        </div>
      </form>
  
  );
}
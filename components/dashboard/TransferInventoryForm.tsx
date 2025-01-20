"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import TextArea from "@/components/FormInputs/TextArea";
import { SelectorInput } from "@/components/FormInputs/SelectorInput";

// Correct interface for form inputs
interface Inputs {
  warehouseId: string;
  transferStockQty:string;
  warehouse: string;
  referenceNumber: number;
  notes?: string;
}

export default function TransferInventoryForm() {
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
      const response = await fetch(`${baseUrl}/api/adjustments/transfer`, {
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
          console.log("Transfer Stock:", responseData);
          alert("Stock transfer gone successful!");
           // Reset form on success
        } else {
          console.error("Empty response body");
        }
      } else {
        const errorMessage = await response.text();
        console.error("Server error:", errorMessage);
        alert("Failed to transfer the stock.");
      }
    } catch (error) {
      console.error("Failed to transfer the stock:", error);
      alert("Failed to transfer the stock.");
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
            id="transferStockQty"
            label="Select the warehouse that will give the stock"
            placeholder="Enter amount to transfer"
            register={register("transferStockQty")}
            error={errors.transferStockQty}
            isRequired
          />
        
        </div>
        <div className="flex justify-between">
           <SelectorInput
                      name="referenceNumber"
                      label="Reference Number"
                      register={register("referenceNumber")}
                      options={refNumberOptions}
            
                    />
          <SelectorInput
            name="warehouse"
            label="Select Warehouse that will give stock"
            register={register("warehouse")}
            options={selectOptions}   
          />
           <SelectorInput
            name="warehouseId"
            label="Select Warehouse to Receive Stock"
            register={register("warehouseId")}
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
          <SubmitButton isLoading={loading} title="Adjustment" />
        </div>
      </form>
  
  );
}
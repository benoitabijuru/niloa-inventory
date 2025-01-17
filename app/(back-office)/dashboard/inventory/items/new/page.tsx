"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import { SelectorInput } from "@/components/FormInputs/SelectorInput";
import { brands, CategoryOptions, units } from "@/constants";
import TextArea from "@/components/FormInputs/TextArea";



export default function NewItem() {
  const warehouses = [
    {
      label:"ware house A",
      value:"euu3"
    },
    {
      label:"ware house B",
      value:"euuddkd"
    },{
      label:"ware house c",
      value:"euuddewe3"
    },
  ]
  const suppliers = [
    {
      label:"Supplier A",
      value:"euu3"
    },
    {
      label:"Supplier B",
      value:"euuddkd"
    },{
      label:"Supplier c",
      value:"euuddewe3"
    },
  ]
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
      const response = await fetch(`${baseUrl}/api/items`, {
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
      <FormHeader title="New Item" href="/dashboard/inventory" />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-6 mx-auto my-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 "
      >
        <div className="flex w-full space-x-10">
          {/* Product Name Field */}
          <div className="sm:col-span-2 w-full">
            <InputField
              id="name"
              label="Item Name"
              placeholder="Type Units Title"
              register={register("name", { required: "Item is required" })}
              error={errors.name}
              isRequired
            />
            <SelectorInput
              name="category"
              label="Select Item Category"
              options={CategoryOptions}
              register={register("category", {
                required: "Item Category is required",
              })}
            />
             <InputField
              id="sku"
              label="Item SKU"
              placeholder="Type Units Title"
              isRequired
              register={register("sku")}
              error={errors.name}
            />
             <InputField
              id="barcode"
              label="Item Barcode"
              placeholder="Type Units Title"
              register={register("barcode")}
              isRequired={false}
              error={errors.name}
            />
              <SelectorInput
              name="unitId"
              label="Select Item Unit"
              options={units}
              register={register("unit", {
                required: "Item unit is required",
              })}
            />
            <SelectorInput
              name="brandId"
              label="Select Item brand"
              options={brands}
              register={register("brand", {
                required: "Item unit is required",
              })}
            />
            <InputField
              id="buyingPrice"
              label="Buying Price"
              placeholder="Type Buying price"
              register={register("buyingPrice", { required: "Buying price is required" })}
              error={errors.buyingPrice}
              isRequired
            />
            <InputField
              id="SellingPrice"
              label="Selling Price"
              placeholder="Type Selling price"
              register={register("sellingPrice", { required: "Selling price is required" })}
              error={errors.sellingPrice}
              isRequired
            />
             <SelectorInput
              name="supplierId"
              label="Select Item Supplier"
              options={suppliers}
              register={register("supplierId", {
                required: "Supplier is required",
              })}
            />
            <InputField
              id="Re-Order Point"
              label="reOrderPoint"
              placeholder=" Re-Order Point"
              register={register("reOrderPoint", { required: "Re-Order Point is required" })}
              error={errors.reOrderPoint}
              isRequired
            />
             <SelectorInput
              name="warehouseId"
              label="Select Item Warehouse"
              options={warehouses}
              register={register("warehouse", {
                required: "Warehouse is required",
              })}
            />
            <InputField
              id="weight"
              label="Item Weight in Kgs"
              placeholder="Enter Weight "
              register={register("weight", { required: "Re-Order Point is required" })}
              error={errors.weight}
              isRequired
            />
             <InputField
              id="dimensions"
              label="Item Dimensions in cm (20 X 30 x 100)"
              placeholder="Enter Dimensions "
              register={register("dimensions", { required: "Re-Order Point is required" })}
              error={errors.dimensions}
              isRequired
            />
             <InputField
              id="tax"
              label="Item Tax Rate in %"
              placeholder="Enter Tax rate "
              register={register("tax", { required: "Re-Order Point is required" })}
              error={errors.tax}
              isRequired
            />
            <TextArea
              id="itemDescription"
              label="Item Description"
              placeholder="Enter a detailed description (2-500 characters)"
              register={register("description", {
                required: "Description is required",
              })}
              error={errors.description}
              rows={5}
            />
             <InputField
              id="note"
              label="Item Notes"
              placeholder="Enter Item notes "
              register={register("notes", { required: "Re-Order Point is required" })}
              error={errors.notes}
              isRequired = {false}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <SubmitButton isLoading={loading} title="Item" />
        </div>
      </form>
    </div>
  );
}

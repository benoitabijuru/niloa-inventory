"use client";

import React, { useCallback, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import { SelectorInput } from "@/components/FormInputs/SelectorInput";
import { brands, CategoryOptions, units } from "@/constants";
import TextArea from "@/components/FormInputs/TextArea";
import { FileUploader } from "@/components/shared/FileUpload";
import { useUploadThing } from "@/lib/uploadthing";

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
   // State management for file upload
   const [files, setFiles] = useState<File[]>([]);
   const [imageUrl, setImageUrl] = useState<string>("");
   const [loading, setLoading] = useState(false);
 
   const { startUpload } = useUploadThing("imageUploader");
 
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm<Inputs>();
 
   // Handle image change
   const handleImageChange = useCallback((value: string) => {
     setImageUrl(value);
   }, []);
 
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      let uploadedImageUrl = imageUrl;
  
      // Upload image if files exist
      if (files.length > 0) {
        const uploadedImages = await startUpload(files);
  
        if (!uploadedImages || uploadedImages.length === 0) {
          throw new Error("Image upload returned no files");
        }
        uploadedImageUrl = uploadedImages[0].url;
      }
  
      // Prepare the final data with the image URL
      const finalData = {
        ...data,
        imageUrl: uploadedImageUrl,
      };
  
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save item: ${response.statusText}`);
      }
  
      // const responseData = await response.json();
      alert("Item saved successfully!");
      reset();
      setFiles([]);
      setImageUrl("");
  
    } catch (error) {
      console.error("Error in onSubmit:", error);
      alert(error instanceof Error ? error.message : "Failed to save item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <FormHeader title="New Item" href="/dashboard/inventory" />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Form Header */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Item Information
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Basic Details</h3>
                <div className="space-y-4">
                  <div>
                    <InputField
                      id="name"
                      label="Item Name"
                      placeholder="Enter item name"
                      register={register("name", { required: "Item name is required" })}
                      error={errors.name}
                      isRequired
                    />
                  </div>
                  <div>
                    <SelectorInput
                      name="category"
                      label="Category"
                      options={CategoryOptions}
                      register={register("category", { required: "Category is required" })}
                    />
                  </div>
                  <div>
                    <InputField
                      id="sku"
                      label="SKU"
                      placeholder="Enter SKU"
                      register={register("sku")}
                      error={errors.sku}
                      isRequired
                    />
                  </div>
                  <div>
                    <InputField
                      id="barcode"
                      label="Barcode"
                      placeholder="Enter barcode"
                      register={register("barcode")}
                      error={errors.barcode}
                    />
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pricing & Stock</h3>
                <div className="space-y-4">
                  <div>
                    <InputField
                      id="buyingPrice"
                      label="Buying Price"
                      placeholder="Enter buying price"
                      register={register("buyingPrice", { required: "Buying price is required" })}
                      error={errors.buyingPrice}
                      isRequired
                    />
                  </div>
                  <div>
                    <InputField
                      id="sellingPrice"
                      label="Selling Price"
                      placeholder="Enter selling price"
                      register={register("sellingPrice", { required: "Selling price is required" })}
                      error={errors.sellingPrice}
                      isRequired
                    />
                  </div>
                  <div>
                    <InputField
                      id="reOrderPoint"
                      label="Re-Order Point"
                      placeholder="Enter re-order point"
                      register={register("reOrderPoint", { required: "Re-order point is required" })}
                      error={errors.reOrderPoint}
                      isRequired
                    />
                  </div>
                  <div>
                    <InputField
                      id="tax"
                      label="Tax Rate (%)"
                      placeholder="Enter tax rate"
                      register={register("tax", { required: "Tax rate is required" })}
                      error={errors.tax}
                      isRequired
                    />
                  </div>
                </div>
              </div>

              {/* Specifications Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Specifications</h3>
                <div className="space-y-4">
                  <div>
                    <InputField
                      id="weight"
                      label="Weight (kg)"
                      placeholder="Enter weight"
                      register={register("weight", { required: "Weight is required" })}
                      error={errors.weight}
                      isRequired
                    />
                  </div>
                  <div>
                    <InputField
                      id="dimensions"
                      label="Dimensions (cm)"
                      placeholder="L x W x H"
                      register={register("dimensions", { required: "Dimensions are required" })}
                      error={errors.dimensions}
                      isRequired
                    />
                  </div>
                  <div>
                    <SelectorInput
                      name="unitId"
                      label="Unit"
                      options={units}
                      register={register("unit", { required: "Unit is required" })}
                    />
                  </div>
                  <div>
                    <SelectorInput
                      name="brandId"
                      label="Brand"
                      options={brands}
                      register={register("brand", { required: "Brand is required" })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Supplier Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Location</h3>
                <div className="space-y-4">
                  <div>
                    <SelectorInput
                      name="warehouseId"
                      label="Warehouse"
                      options={warehouses}
                      register={register("warehouse", { required: "Warehouse is required" })}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Supplier</h3>
                <div className="space-y-4">
                  <div>
                    <SelectorInput
                      name="supplierId"
                      label="Supplier"
                      options={suppliers}
                      register={register("supplierId", { required: "Supplier is required" })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Notes Section */}
            <div className="mt-8 space-y-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Additional Information</h3>
              <div className="space-y-4">
                <div>
                  <TextArea
                    id="itemDescription"
                    label="Description"
                    placeholder="Enter a detailed description (2-500 characters)"
                    register={register("description", { required: "Description is required" })}
                    error={errors.description}
                    rows={5}
                  />
                </div>
                <div>
                  <InputField
                    id="note"
                    label="Notes"
                    placeholder="Enter additional notes"
                    register={register("notes")}
                    error={errors.notes}
                  />
                </div>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Item Image</h3>
              <FileUploader
                onFieldChange={handleImageChange}
                imageUrl={imageUrl}
                setFiles={setFiles}
              />
            </div>
          </div>

          {/* Form Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <SubmitButton 
              isLoading={loading} 
              title="Save Item"
              
            />
          </div>
        </form>
      </div>
    </div>
  );
}
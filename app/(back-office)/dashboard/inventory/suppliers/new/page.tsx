"use client"

import React, { useState } from "react";
import FormHeader from "@/components/dashboard/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import InputField from "@/components/FormInputs/InputField";
import TextArea from "@/components/FormInputs/TextArea";
import { makeApiRequest } from "@/lib/apiRequest";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  phone: string;
  email: string;
  address: string;
  contactPerson: string;
  supplierCode: string;
  taxID: string;
  paymentTerms: string;
  notes: string;
};

export default function NewSupplier() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

    await makeApiRequest({
      setLoading,
      url: `${baseUrl}/api/suppliers`,
      data,
      resourceName: "Supplier",
      reset,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <FormHeader title="New Supplier" href="/dashboard/inventory" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Form Header */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Supplier Information
            </h2>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6">
            {/* Basic Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="name"
                label="Supplier Name"
                placeholder="Enter supplier name"
                isRequired
                register={register("name", { required: "Supplier name is required" })}
                error={errors.name}
              />
              <InputField
                id="phone"
                label="Phone Number"
                placeholder="Enter phone number"
                isRequired
                register={register("phone", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Please enter a valid phone number"
                  }
                })}
                error={errors.phone}
              />
            </div>

            {/* Contact Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="email"
                label="Email Address"
                placeholder="Enter email address"
                isRequired
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                error={errors.email}
              />
              <InputField
                id="contactPerson"
                label="Contact Person"
                placeholder="Enter contact person name"
                isRequired
                register={register("contactPerson", { required: "Contact person is required" })}
                error={errors.contactPerson}
              />
            </div>

            {/* Business Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                id="supplierCode"
                label="Supplier Code"
                placeholder="Enter supplier code"
                isRequired
                register={register("supplierCode", { required: "Supplier code is required" })}
                error={errors.supplierCode}
              />
              <InputField
                id="taxID"
                label="Tax ID (TIN)"
                placeholder="Enter tax identification number"
                isRequired
                register={register("taxID", { required: "Tax ID is required" })}
                error={errors.taxID}
              />
            </div>

            {/* Address Section */}
            <div className="col-span-full">
              <InputField
                id="address"
                label="Business Address"
                placeholder="Enter complete business address"
                isRequired
                register={register("address", { required: "Address is required" })}
                error={errors.address}
              />
            </div>

            {/* Terms and Notes Section */}
            <div className="grid grid-cols-1 gap-6">
              <TextArea
                id="paymentTerms"
                label="Payment Terms"
                placeholder="Enter payment terms and conditions"
                register={register("paymentTerms", { required: "Payment terms are required" })}
                error={errors.paymentTerms}
              />
              <TextArea
                id="notes"
                label="Additional Notes"
                placeholder="Enter any additional information"
                register={register("notes")}
                error={errors.notes}
              />
            </div>
          </div>

          {/* Form Footer */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
            <SubmitButton 
              isLoading={loading} 
              title="Save Supplier"
              
            />
          </div>
        </form>
      </div>
    </div>
  );
}
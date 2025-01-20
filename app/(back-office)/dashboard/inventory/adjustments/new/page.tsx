"use client";

import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { tabs } from "@/constants";
import { useState } from "react";

export default function NewAdjustments() {
  const [activeForm, setActiveForm] = useState("add");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <FormHeader title="Stock Adjustment" href="/dashboard/inventory" />
      <div className="w-full max-w-4xl p-4 mx-auto my-3 bg-white border border-gray-200 rounded shadow dark:bg-gray-800">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setActiveForm(tab.form)}
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    activeForm === tab.form
                      ? "text-blue-600 border-blue-600"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300"
                  } rounded-t-lg`}
                >
                  <Icon className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" />
                  {tab.title}
                </button>
              </li>
            );
          })}
         
        </ul>
      </div>
      {activeForm === "add" ? <AddInventoryForm /> : <TransferInventoryForm />}
    </div>
  );
}

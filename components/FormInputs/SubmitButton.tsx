import { Plus } from "lucide-react";
import React from "react";

interface SubmitButtonProps {
  isLoading: boolean;
  title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, title }) => {
  return (
    <div className="sm:col-span-1 flex justify-center">
      {isLoading ? (
        <button
          disabled
          type="button"
          aria-label={`Saving ${title}, please wait`}
          className="flex items-center justify-center w-full text-white bg-blue-500 cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-400"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9765 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9765 100 50.5908ZM9.08157 50.5908C9.08157 74.1082 25.8826 90.9093 49.4 90.9093C72.9174 90.9093 89.7184 74.1082 89.7184 50.5908C89.7184 27.0733 72.9174 10.2722 49.4 10.2722C25.8826 10.2722 9.08157 27.0733 9.08157 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.553C95.2932 28.8223 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7235 75.2124 7.41289C69.5422 4.10226 63.2754 1.94025 56.6917 1.05127C51.7667 0.367759 46.7978 0.446843 41.9024 1.28119C39.3191 1.73953 37.8452 4.25584 38.4823 6.68127C39.1195 9.10671 41.6196 10.5652 44.1923 10.1825C48.4285 9.60386 52.7499 9.64299 56.9316 10.3004C61.7895 11.0373 66.4922 12.7333 70.8164 15.3328C75.1406 17.9322 78.9918 21.3894 82.1927 25.5229C84.7571 28.7783 86.799 32.2914 88.264 35.9805C89.1259 38.3402 91.5422 39.678 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          <span>Saving {title}, Please wait...</span>
        </button>
      ) : (
        <button
          type="submit"
          aria-label={`Save ${title}`}
          className="flex items-center justify-center w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-transform transform hover:scale-105 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Plus className="w-5 h-5 mr-2" />
          <span>Save {title}</span>
        </button>
      )}
    </div>
  );
};

export default SubmitButton;

'use client';

import { useCallback, Dispatch, SetStateAction } from 'react';
import { useDropzone } from '@uploadthing/react';
import { generateClientDropzoneAccept } from 'uploadthing/client';
import { convertFileToUrl } from '@/lib/utils';
import Image from 'next/image';
import { Upload, ImagePlus } from 'lucide-react';

type FileUploaderProps = {
  onFieldChange: (url: string) => void;
  imageUrl: string;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log('Dropped files:', acceptedFiles);
      setFiles(acceptedFiles);
      const fileUrl = convertFileToUrl(acceptedFiles[0]);
      console.log('File URL:', fileUrl);
      onFieldChange(fileUrl);
    },
    [setFiles, onFieldChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(['image/*']),
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`relative flex h-80 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-300 ease-in-out ${
        isDragActive
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
      }`}
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt="uploaded image"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity hover:bg-opacity-50">
            <div className="flex h-full items-center justify-center">
              <button
                type="button"
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
              >
                <ImagePlus size={20} />
                Change Image
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8 text-center">
          <div className="rounded-full bg-gray-100 p-4">
            <Upload className="h-8 w-8 text-gray-500" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              {isDragActive ? 'Drop your image here' : 'Drag & Drop your image'}
            </h3>
            <p className="text-sm text-gray-500">SVG, PNG, JPG (max. 4MB)</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-px w-5 bg-gray-300"></span>
            <span>OR</span>
            <span className="h-px w-5 bg-gray-300"></span>
          </div>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Browse Files
          </button>
          <p className="text-xs text-gray-400">Maximum file size: 4MB</p>
        </div>
      )}
    </div>
  );
}

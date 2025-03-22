import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  mobileNo: Yup.string().required('Mobile number is required'),
  token: Yup.string().required('Token number is required'),
  address: Yup.string().required('Address is required'),
});

export const TrackForm = ({ onClose }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const message = `I want to enquire about my order\n\nName: ${data.name}\nMobile No: ${data.mobileNo}\nToken: ${data.token}\nAddress: ${data.address}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8630715936?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="mt-28fixed inset-0 mt-11 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white flex flex-col md:flex-row rounded shadow-md relative m-4 w-full max-w-lg md:max-w-2xl h-auto overflow-auto">
        
        {/* Image Section */}
        <div className="w-[50vw] md:w-1/2 flex items-center justify-center p-4">
          <img src="/Home/Track.jpeg" alt="Track" className="object-cover rounded-lg w-full max-h-60 md:max-h-full" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-4 overflow-hidden flex flex-col items-center justify-center">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-900" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-lg text-orange-400 font-bold mb-4 text-center">Welcome To BedWood Furnishing</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full"> 
            {/* Name Input */}
            <div className="w-full mb-2">
              <label className="block mb-1 text-sm">Name:</label>
              <Controller name="name" control={control} defaultValue="" render={({ field }) => (
                <input {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
              )} />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            {/* Mobile No and Token Input */}
            <div className="flex flex-col md:flex-row w-full mb-2 space-y-2 md:space-y-0 md:space-x-2">
              <div className="w-full">
                <label className="block mb-1 text-sm">Mobile No:</label>
                <Controller name="mobileNo" control={control} defaultValue="" render={({ field }) => (
                  <input {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
                )} />
                {errors.mobileNo && <p className="text-red-500 text-xs">{errors.mobileNo.message}</p>}
              </div>
              <div className="w-full">
                <label className="block mb-1 text-sm">Token:</label>
                <Controller name="token" control={control} defaultValue="" render={({ field }) => (
                  <input {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
                )} />
                {errors.token && <p className="text-red-500 text-xs">{errors.token.message}</p>}
              </div>
            </div>

            {/* Address Input */}
            <div className="w-full mb-2">
              <label className="block mb-1 text-sm">Address:</label>
              <Controller name="address" control={control} defaultValue="" render={({ field }) => (
                <textarea {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm h-24 resize-none" />
              )} />
              {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-start">
              <button type="submit" className="bg-orange-500 text-sm text-white rounded px-4 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const PopUpForm = ({ onClose }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobileNo: Yup.string().required('Mobile number is required'),
    email: Yup.string().email('Invalid email format').optional(),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const message = `Name: ${data.name}\nMobile No: ${data.mobileNo}${data.email ? `\nEmail: ${data.email}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+919675111719?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white flex flex-col md:flex-row rounded shadow-md relative m-6" style={{ width: '90%', maxWidth: '800px', height: 'auto', minHeight: '200px' }}>
        <div className="w-full md:w-1/2">
          <img
            src="/consultancy/Popup.png"
            alt="Descriptive Alt Text"
            className="w-full h-full object-cover rounded-t md:rounded-l md:rounded-t-none"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-hidden flex flex-col items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg text-orange-400 font-bold mb-4 text-center">Welcome To BedWood Furnishing</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center"> 
            <div className="w-full mb-2">
              <label className="block mb-1 text-sm">
                Name:
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
                  )}
                />
              </label>
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>
            <div className="w-full mb-2">
              <label className="block mb-1 text-sm">
                Mobile No:
                <Controller
                  name="mobileNo"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input {...field} className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
                  )}
                />
              </label>
              {errors.mobileNo && <p className="text-red-500 text-xs">{errors.mobileNo.message}</p>}
            </div>
            <div className="w-full mb-2">
              <label className="block mb-1 text-sm">
                Email (optional):
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input {...field} type="email" className="border-2 border-gray-300 rounded-md w-full p-1 text-sm" />
                  )}
                />
              </label>
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>
            <div className="w-full flex justify-start">
              <button type="submit" className="bg-orange-500 text-sm text-white rounded px-4 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;

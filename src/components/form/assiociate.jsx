import React from 'react';
import jsPDF from 'jspdf';

const CompanyAssociateForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const message = `New Company Associate Application:%0A
First Name: ${data.firstName}%0A
Last Name: ${data.lastName}%0A
Phone Number: ${data.phone}%0A
Email: ${data.email}%0A
Qualification: ${data.qualification}%0A
Age: ${data.age}%0A
Occupation: ${data.occupation}%0A
Address: ${data.address}%0A
Country: ${data.country}`;

    // Send to WhatsApp
    window.open(`https://wa.me/+918630715936?text=${message}`);

    // Generate PDF for Email
    const doc = new jsPDF();
    doc.text('Company Associate Application', 20, 20);
    Object.entries(data).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 20, 30 + index * 10);
    });

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    const emailLink = document.createElement('a');
    emailLink.href = `mailto:ashish2kathait@gmail.com?subject=Company Associate Application`;
    emailLink.download = 'application.pdf';
    emailLink.click();

    
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center overflow-hidden">
      <div className="bg-white pt-6 pb-8 px-8 rounded-xl shadow-2xl w-full max-w-md relative overflow-y-auto max-h-[80vh] scrollbar-hide animate-fade-in">
        <button onClick={() => window.location.reload()} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl" aria-label="Close">×</button>
        <div className="flex justify-center mb-4">
          <img src="/logo/bedlogo.png" alt="Logo" className="h-16" />
        </div>
        <h2 className="text-xl font-bold mb-6 text-center text-orange-400">Join Us as a Company Associate!</h2>
        <form onSubmit={handleSubmit} className="text-sm space-y-4">
          {[['firstName', 'First Name'], ['lastName', 'Last Name'], ['phone', 'Phone Number'], ['email', 'Email'], ['qualification', 'Qualification'], ['age', 'Age'], ['occupation', 'Occupation'], ['address', 'Address'], ['country', 'Country']].map(([id, label]) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="text-gray-700 font-semibold mb-1">{label}</label>
              <input id={id} className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-orange-400 focus:outline-none" type="text" name={id} required />
            </div>
          ))}
          <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded-full font-semibold text-lg hover:bg-orange-700 transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyAssociateForm;

import { Phone } from "lucide-react";

const PhoneIcon = ({ phoneNumber }) => {
  const handleCall = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    window.location.href = phoneUrl;
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <div
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition"
        onClick={handleCall}
      >
        <Phone className="w-6 h-6" />
      </div>
    </div>
  );
};

export default PhoneIcon;

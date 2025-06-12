import { useState } from "react";

function RegisterModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    console.log("Sending OTP to:", phone);
    // Integrate your OTP API here
    setStep(2);
  };

  const verifyOtp = () => {
    console.log("Verifying OTP:", otp);
    // Verify OTP logic here
    alert("OTP verified!");
    onClose();
    setStep(1);
    setPhone("");
    setOtp("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-[90%] max-w-md p-6 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Register</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {step === 1 && (
          <>
            <button className="w-full bg-red-500 text-white py-2 mb-4 rounded-lg hover:bg-red-600">
              Continue with Google
            </button>
            <hr className="my-4" />
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="mb-2 text-sm text-gray-600">OTP sent to {phone}</p>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterModal;

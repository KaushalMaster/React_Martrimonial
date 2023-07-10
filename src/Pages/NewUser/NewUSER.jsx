import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUSER.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { Toaster, toast } from "react-hot-toast";

const NewUSER = () => {
  const [user_name, setuser_name] = useState("");
  const [contact_no, setcontact_no] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  // Captcha Verification
  // function onCaptchaVerify() {
  //   if (!window.reCaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         callback: (response) => {
  //           onRegister();
  //         },
  //         "expired-callback": () => {},
  //       },
  //       auth
  //     );
  //   }
  // }

  // function onRegister() {
  //   onCaptchaVerify();

  //   console.log("called on button click");

  //   const appVerifier = window.recaptchaVerifier;
  //   signInWithPhoneNumber(auth, contact_no, appVerifier)
  //     .then((confirmationResult) => {
  //       window.confirmationResult = confirmationResult;
  //       toast.success("OTP Sent Successfully");
  //     })
  //     .catch((error) => {
  //       console.log("ERROR: ", error);
  //     });
  // }

  const handleSubmit = () => {
    // if (!user_name || !contact_no || !email || !password || !confirmPassword) {
    //   setError("Please fill in all fields.");
    //   return;
    // } else if (password !== confirmPassword) {
    //   setError("Passwords do not match.");
    //   return;
    // } else {
    // }

    const userData = {
      user_name: user_name,
      contact_no: "+91" + contact_no,
      email: email,
      password: password,
    };
    navigate("/Otp", { state: { userData } });
  };

  return (
    <>
      <div className="login__wrapepr">
        <div className="login login-padding">
          <h2>User Details</h2>
          <input
            placeholder="Username"
            type="text"
            onChange={(e) => setuser_name(e.target.value)}
            required
          />
          <input
            placeholder="Mobile Number"
            type="tel"
            name="contact_no"
            id="contact_no"
            onChange={(e) => setcontact_no(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input placeholder="Confirm Password" type="password" required />
          <div id="recaptcha"></div>
          <button onClick={handleSubmit} className="text-light">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewUSER;

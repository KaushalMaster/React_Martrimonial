import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Career from "./Pages/Career/Career";
import Community from "./Pages/Community/Community";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Faqs from "./Pages/Faqs/Faqs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import PartnerCommunity from "./Pages/PartnerCommunity/PartnerCommunity";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Profile/Profile";
import MessagesComponent from "./Sections/Profile/MessagesComponent/MessagesComponent";
import { useEffect } from "react";
import Profile2 from "./Pages/Profile2/Profile2";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ViewedProfile from "./Pages/ViewedProfile/ViewedProfile";
import Messages from "./Pages/Messages/Messages";
import UploadPhotograph from "./Pages/UploadPhotoGraph/UploadPhotograph";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import PlanDetails from "./Pages/PlanDetails/PlanDetails";
import AdvancedSearch from "./Pages/AdvancedSearch/AdvancedSearch";
import Login from "./Pages/Login/Login";
import NewUSER from "./Pages/NewUser/NewUSER";
import Otp from "./Pages/Otp/Otp";
import Registration1 from "./Pages/Registration1/Registration1";
import Registration2 from "./Pages/Registration2/Registration2";
import Registration3 from "./Pages/Registration3/Registration3";
import Registration4 from "./Pages/Registration4/Registration4";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunity-guidelines" element={<Community />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/partner-community" element={<PartnerCommunity />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/requests" element={<Profile2 />} />
        <Route path="/phonemessages" element={<MessagesComponent />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/userprofile/:id" element={<UserProfile />} />
        <Route path="/viewedprofile" element={<ViewedProfile />} />
        <Route path="/uploadphotos" element={<UploadPhotograph />} />
        <Route path="/selectplan" element={<SelectPlan />} />
        <Route path="/plandetails" element={<PlanDetails />} />
        <Route path="/advancedsearch" element={<AdvancedSearch />} />
        <Route path="/newuser" element={<NewUSER />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/Registration1" element={<Registration1 />} />
        <Route path="/Registration2" element={<Registration2 />} />
        <Route path="/Registration3" element={<Registration3 />} />
        <Route path="/Registration4" element={<Registration4 />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

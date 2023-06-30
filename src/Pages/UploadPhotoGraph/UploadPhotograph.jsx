import {
  AutoFixOffSharp,
  Close,
  FileUploadOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./UploadPhotograph.css";
import img1 from "../../Assets/profile2/img1.jpg";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";

const UploadPhotograph = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [formData, setFormData] = useState([]);
  const token = localStorage.getItem("token");

  const uploadPhoto = () => {
    const formData = new FormData();

    // Append each selected photo to the FormData object
    selectedPhotos.forEach((photo) => {
      console.log("Appending photo:", photo);
      const res = formData.append("photos[]", photo);
      console.log(res);
      setFormData(res);
    });

    console.log(formData);
    // set the headers only the authenticated can save the photos
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data", // Set the appropriate content type
    };

    // Make an API call using Axios or any other library
    console.log("123");
    axios
      .put(`${BASE_URL}/api/profile`, selectedPhotos, { headers })
      .then((response) => {
        // Handle the API response
        console.log(response.data);
      })

      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  return (
    <div className="upload_photographs">
      <h2>Upload Your Photo</h2>
      <div className="upload__photo_wrapper">
        <div className="upload_photographs__upload_photo">
          <FileUploadOutlined />
          <p>Upload your photographs here</p>
          <div className="signup__upload_button__wrapper">
            <form action="post">
              <input
                type="file"
                placeholder="yuvraj"
                style={{ width: "100px" }}
                className="photos"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setSelectedPhotos(files);
                }}
              />
            </form>
            {/* <button className="signup__upload_button">Browse</button> */}
            <p>supported files : png, jpg, jepg</p>
          </div>
        </div>
        <div className="upload_photographs_selected_photos">
          {/* Show selected Phtoos */}
          {selectedPhotos.map((photo, index) => (
            <div
              className="upload_photographs_uploaded_image_wrapper"
              key={index}
            >
              <img
                src={URL.createObjectURL(photo)}
                alt=""
                className="upload_photographs_uploaded_image"
              />
              <Close className="upload_photographs_uploaded_image_close_icon" />
            </div>
          ))}

          {/* Selected photos  */}
          {/* <div className="upload_photographs_uploaded_image_wrapper">
            <img
              src={img1}
              alt=""
              className="upload_photographs_uploaded_image"
            />
            <Close className="upload_photographs_uploaded_image_close_icon" />
          </div>

          <div className="upload_photographs_uploaded_image_wrapper">
            <img
              src={img1}
              alt=""
              className="upload_photographs_uploaded_image"
            />
            <Close className="upload_photographs_uploaded_image_close_icon" />
          </div>

          <div className="upload_photographs_uploaded_image_wrapper">
            <img
              src={img1}
              alt=""
              className="upload_photographs_uploaded_image"
            />
            <Close className="upload_photographs_uploaded_image_close_icon" />
          </div>

          <div className="upload_photographs_uploaded_image_wrapper">
            <img
              src={img1}
              alt=""
              className="upload_photographs_uploaded_image"
            />
            <Close className="upload_photographs_uploaded_image_close_icon" />
          </div>

          <div className="upload_photographs_uploaded_image_wrapper">
            <img
              src={img1}
              alt=""
              className="upload_photographs_uploaded_image"
            />
            <Close className="upload_photographs_uploaded_image_close_icon" />
          </div> */}
        </div>
      </div>

      <button className="upload_photographs_save" onClick={uploadPhoto}>
        Save
      </button>
    </div>
  );
};

export default UploadPhotograph;

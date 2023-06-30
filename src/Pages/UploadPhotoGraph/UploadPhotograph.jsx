import React, { useState } from "react";
import { FileUploadOutlined, Close } from "@mui/icons-material";
import axios from "axios";
import { BASE_URL } from "../../BASE_URL";
import "./UploadPhotograph.css";

const UploadPhotograph = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const token = localStorage.getItem("token");

  const handlePhotoUpload = async () => {
    try {
      const formData = new FormData();
      selectedPhotos.forEach((photo) => {
        formData.append("user_photo", photo);
      });

      console.log(formData);
      const response = await axios.put(`${BASE_URL}/api/profile`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      alert("Photos Uploaded Successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    const uploadedPhotos = Array.from(files);
    setSelectedPhotos(uploadedPhotos);
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = [...selectedPhotos];
    updatedPhotos.splice(index, 1);
    setSelectedPhotos(updatedPhotos);
  };

  return (
    <div className="upload_photographs">
      <h2>Upload Your Photos</h2>
      <div className="upload__photo_wrapper">
        <div className="upload_photographs__upload_photo">
          <FileUploadOutlined />
          <p>Upload your photographs here</p>
          <div className="signup__upload_button__wrapper">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              accept=".png, .jpg, .jpeg"
              className="photos"
            />
            <p>supported files: png, jpg, jpeg</p>
          </div>
        </div>
        <div className="upload_photographs_selected_photos">
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
              <Close
                className="upload_photographs_uploaded_image_close_icon"
                onClick={() => handleRemovePhoto(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="upload_photographs_save" onClick={handlePhotoUpload}>
        Save
      </button>
    </div>
  );
};

export default UploadPhotograph;

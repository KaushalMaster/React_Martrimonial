import { Close, FileUploadOutlined } from "@mui/icons-material";
import React from "react";
import "./UploadPhotograph.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../Assets/profile2/img1.jpg";
import { useState } from "react";

const UploadPhotograph = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [userPhotos, setUserPhotos] = useState([]);

  const handleBrowse = (event) => {
    const files = event.target.files;
    const selectedPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setUserPhotos(selectedPhotos);
  };

  const handleRemovePhoto = (index) => {
    const updatedPhotos = [...userPhotos];
    updatedPhotos.splice(index, 1);
    setUserPhotos(updatedPhotos);
  };

  const uploadPhotos = async () => {
    try {
      const response = await fetch("http://15.206.91.12:4000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          // profile_photo: profilePhoto,
          // user_photo: userPhoto,
        }),
      });
      if (response == 200) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
      // Handle the response as needed
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="upload_photographs">
      <h2>Upload Your Photo</h2>
      <div className="upload__photo_wrapper">
        <div className="upload_photographs__upload_photo">
          <FileUploadOutlined />
          <p>Upload your photographs here</p>
          <div className="signup__upload_button__wrapper">
            <input
              type="file"
              accept="image/*"
              multiple
              id="browse-input"
              style={{ display: "none" }}
              onChange={handleBrowse}
            />
            <label htmlFor="browse-input">
              <button className="signup__upload_button">Browse</button>
            </label>
            <p>Supported files: png, jpg, jpeg</p>
          </div>
        </div>
        <div className="upload_photographs_selected_photos">
          {userPhotos.map((photo, index) => (
            <div
              className="upload_photographs_uploaded_image_wrapper"
              key={index}
            >
              <img
                src={photo}
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
        </div> */}
      </div>

      <button className="upload_photographs_save" onClick={uploadPhotos}>
        Save
      </button>
    </div>
  );
};

export default UploadPhotograph;

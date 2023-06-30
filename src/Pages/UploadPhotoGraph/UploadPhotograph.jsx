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

  console.log(formData.user_photo);

  // const uploadPhoto = () => {
  //   const inputElement = document.getElementById("file-input"); // Replace "file-input" with the ID of your file input element
  //   const files = inputElement.files;

  //   // const formData = new FormData();

  //   // for (let i = 0; i < files.length; i++) {
  //   //   const file = files[i];
  //   //   const reader = new FileReader();

  //   //   reader.onload = (event) => {
  //   //     const fileContent = event.target.result;
  //   //     formData.append("user_photo", file.name);

  //   //     if (i === files.length - 1) {
  //   //       // All files have been appended, make the API call
  //   //       makeApiCall(formData);
  //   //     }
  //   //   };

  //   //   console.log(formData);

  //     reader.readAsDataURL(file);
  //   }
  // };

  const makeApiCall = (formData) => {
    const formData1 = new FormData();

    console.log(formData1);

    fetch(`${BASE_URL}/api/profile`, {
      method: "PUT",
      headers: {
        Authorization: token,
      },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response data here
        console.log(data);
        alert("Photos Uploaded Successfully");
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
      });
  };

  const handleOptionChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "user_photo") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: event.target.files,
      }));
    }
    console.log(formData);
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
                id="file-input"
                multiple
                onChange={handleOptionChange}
                name="user_photo"
              />
              {/* {(e) => {
                  const files = Array.from(e.target.files);
                  setSelectedPhotos(files);
                }} */}
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

      <button className="upload_photographs_save" onClick={makeApiCall}>
        Save
      </button>
    </div>
  );
};

export default UploadPhotograph;

import { Close, FileUploadOutlined } from "@mui/icons-material";
import React from "react";
import "./UploadPhotograph.css";
import img1 from "../../Assets/profile2/img1.jpg";

const UploadPhotograph = () => {
  return (
    <div className="upload_photographs">
      <h2>Upload Your Photo</h2>
      <div className="upload__photo_wrapper">
        <div className="upload_photographs__upload_photo">
          <FileUploadOutlined />
          <p>Upload your photographs here</p>
          <div className="signup__upload_button__wrapper">
            <button className="signup__upload_button">Browse</button>
            <p>supported files : png, jpg, jepg</p>
          </div>
        </div>
        <div className="upload_photographs_selected_photos">
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
        </div>
      </div>

      <button className="upload_photographs_save">Save</button>
    </div>
  );
};

export default UploadPhotograph;

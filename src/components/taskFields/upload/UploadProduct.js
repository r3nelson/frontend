import Button from "../../Button";
import React from "react";
import Base64FileUploader from "./Base64FileUpload";

const UploadProduct = () => {
  const handleFileUpload = (files) => {
    console.log("Uploaded files:", files);
  };

  return (
    <div className="flex justify-evenly">
      <div className="basis-4">
        <label>Upload Product Document</label>
        <Button
          text={<Base64FileUploader onFileUpload={handleFileUpload} />}
          color={"bg-white"}
        />
      </div>

      <div className="basis-4">
        <label>Upload Source Documents</label>
        <Button
          text={<Base64FileUploader onFileUpload={handleFileUpload} />}
          color={"bg-white"}
        />
      </div>
    </div>
  );
};

export default UploadProduct;

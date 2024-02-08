import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Base64FileUploader = ({ onFileUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file, index) => {
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result.split(",")[1];
            const fileName = file.name;
            console.log(`${index + 1}: uploading base 64 for ${fileName}`);
            onFileUpload(base64String);
          };
          reader.readAsDataURL(file);
        }
      });
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "application/pdf",
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>+</p>
    </div>
  );
};

export default Base64FileUploader;

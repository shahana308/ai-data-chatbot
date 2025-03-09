import React from "react";

const DataUploader = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default DataUploader;

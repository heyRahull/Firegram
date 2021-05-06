import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (event) => {
    const selected = event.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      console.log(selected);
    } else {
      setFile(null);
      setError("Please enter a valid file (png or jpeg)");
      console.log(error);
    }
  };

  return (
      <form >
    <div>
      {/* <input type="file" onChange={changeHandler}/> */}
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span> 
      </label>
      <div className="output">
      {error && <div className="UploadForm__error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </div>
    </form>
  );
};

export default UploadForm;

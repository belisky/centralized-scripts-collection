import React, { useState, useRef } from "react";
import { LegacyRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignPad = () => {
  const signRef: LegacyRef<SignatureCanvas> = useRef<any>();

  const [url, setUrl] = useState<any>();

  const handleClear = () => {
    signRef.current?.clear();
    setUrl("");
  };
  const handleGenerate = () => {
    setUrl(signRef.current?.getTrimmedCanvas().toDataURL("image/png"));
  };

  return (
    <div>
      <div style={{ border: "2px solid black", width: 300, height: 150 }}>
        <SignatureCanvas
          canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
          ref={signRef}
        />
      </div>

      <br></br>
      <button style={{ height: "30px", width: "60px" }} onClick={handleClear}>
        Clear
      </button>
      <button
        style={{ height: "30px", width: "60px" }}
        onClick={handleGenerate}
      >
        Save
      </button>

      <br />
      <br />
      <img src={url} />
    </div>
  );
};
export default SignPad;

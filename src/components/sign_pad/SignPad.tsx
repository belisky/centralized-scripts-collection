import React, { useState, useRef } from "react";
import { LegacyRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignPadProps {
  onChangeSignature: (sign: string) => void;
}

const SignPad = ({ onChangeSignature }: SignPadProps) => {
  const signRef: LegacyRef<SignatureCanvas> = useRef<any>();

  const [url, setUrl] = useState<any>();

  const handleClear = () => {
    signRef.current?.clear();
    setUrl("");
  };
  const handleGenerate = () => {
    setUrl(signRef.current?.getTrimmedCanvas().toDataURL("image/png"));
    const content = signRef.current?.getTrimmedCanvas().toDataURL("image/png");
    if (content) {
      onChangeSignature(content);
    }

    // console.log(imageUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ border: "2px solid black", width: 300, height: 150 }}>
        <SignatureCanvas
          canvasProps={{ width: 300, height: 150, className: "sigCanvas" }}
          ref={signRef}
        />
      </div>
      <div className="flex w-2/4">
        <button
          className="bg-red-400 text-white w-1/2 py-2 px-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-green-500 text-white w-1/2 py-2 px-1"
          onClick={handleGenerate}
        >
          Preview
        </button>
      </div>

      <img className="w-20 h-10 flex" src={url} />
    </div>
  );
};
export default SignPad;

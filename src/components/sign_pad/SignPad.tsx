import React, { useState, useRef } from "react";
import { LegacyRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { removeIds } from "../../reducers/GlobalIdsReducer";

interface SignPadProps {
  onChangeSignature: (sign: string) => void;
}

const SignPad = ({ onChangeSignature }: SignPadProps) => {
  const signRef: LegacyRef<SignatureCanvas> = useRef<any>();

  const [url, setUrl] = useState<any>();
  const dispatch = useAppDispatch();

  const handleClear = () => {
    signRef.current?.clear();
    setUrl("");
    dispatch(removeIds);
  };
  const handleGenerate = () => {
    setUrl(signRef.current?.getTrimmedCanvas().toDataURL("image/png"));
    const content = signRef.current?.getTrimmedCanvas().toDataURL("image/png");
    if (content) {
      onChangeSignature(content);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center z-50 mb-5">
      <span className="flex rounded-sm ml-30 w-50 h-10">
        <img className="w-30 h-10 flex ml-auto" src={url} alt="signature" />
      </span>
      <div
        style={{ border: "2px solid black", width: 400, height: 180 }}
        className="mb-5"
      >
        <SignatureCanvas
          canvasProps={{ width: 400, height: 180, className: "sigCanvas" }}
          ref={signRef}
        />
      </div>
      <div className="flex">
        <button
          className="bg-red-400 text-white w-48 rounded-md py-2 px-1 mr-2"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="bg-green-500 text-white w-48 rounded-md py-2 px-1 ml-2"
          onClick={handleGenerate}
        >
          Preview
        </button>
      </div>
    </div>
  );
};
export default SignPad;

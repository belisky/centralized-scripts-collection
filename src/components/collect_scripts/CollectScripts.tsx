import React, { useState } from "react";
import SignPad from "../sign_pad/SignPad";
import { uploadToCloudinary } from "../../lib/helper/Helper";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { addSigned } from "../../reducers/GlobalSignReducer";
import { isDOMComponent } from "react-dom/test-utils";

interface CollectScriptsProps {
  openscriptCollection: boolean;
  openCollectScript: () => void;
}

const CollectScripts = ({
  openscriptCollection,
  openCollectScript,
}: CollectScriptsProps) => {
  const [deliveredby, setDeliveredBy] = useState("");
  const [collectedby, setCollectedBy] = useState("");
  const [signature, setSignature] = useState("");
  const dispatch = useAppDispatch();

  const onChangeDeliveredBy = (e: any) => {
    const newName: string = e.target.value;
    setDeliveredBy(newName);
  };

  const onChangeCollectedBy = (e: any) => {
    const newName: string = e.target.value;
    setCollectedBy(newName);
  };
  const onChangeSignature = (content: string) => {
    setSignature(content);
  };

  const ids = useAppSelector((state) => state.id.ids);
  const onClickSaveChanges = async () => {
    console.log(ids);
    openCollectScript();
    const signatureUrl = await uploadToCloudinary(signature);
    for (const id of ids) {
      const obj = {
        id,
        signatureUrl,
        deliveredBy: deliveredby,
        collectedBy: collectedby,
        collectedDate: new Date().toDateString(),
      };
      dispatch(addSigned(obj));
    }
  };
  return (
    <div
      className={
        openscriptCollection
          ? "fixed backdrop-blur-sm border-2 top-60 bottom-30 left-50 right-80 items-center justify-center rounded-lg border-red-700"
          : "hidden"
      }
    >
      <input
        type="text"
        placeholder="Collected by"
        value={collectedby}
        onChange={onChangeCollectedBy}
      />
      <input
        type="text"
        placeholder="Delivered by"
        value={deliveredby}
        onChange={onChangeDeliveredBy}
      />
      <SignPad onChangeSignature={onChangeSignature} />
      <button
        className="py-2 px-1 rounded-sm flex bg-green-500 ml-auto text-white"
        onClick={onClickSaveChanges}
      >
        Save changes
      </button>
    </div>
  );
};

export default CollectScripts;

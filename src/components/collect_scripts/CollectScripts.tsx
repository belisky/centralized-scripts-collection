import React, { useState } from "react";
import SignPad from "../sign_pad/SignPad";
import { uploadToCloudinary } from "../../lib/helper/Helper";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { useMutation } from "@apollo/client";
import { UPLOAD_SIGNATURES } from "../../hooks/useUpdateEnvelopes";
import { removeIds } from "../../reducers/GlobalIdsReducer";
import { FaRegTimesCircle } from "react-icons/fa";

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
  const [collectManyScripts] = useMutation(UPLOAD_SIGNATURES);

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
    openCollectScript();

    const signatureUrl = await uploadToCloudinary(signature);
    const signedArr = [];

    for (const id of ids) {
      const obj = {
        id,
        signatureUrl,
        deliveredBy: deliveredby,
        collectedBy: collectedby,
        collectedDate: new Date().toDateString(),
      };
      signedArr.push(obj);
    }
    const envVar = { collectManyScripts: signedArr };
    collectManyScripts({ variables: envVar })
      .then((data) => alert("success"))
      .catch((err) => alert(err));
    dispatch(removeIds());
  };
  return (
    <div
      className={
        openscriptCollection
          ? "fixed backdrop-blur-sm border-2 w-8/12 z-40 top-30 bottom-0 left-60 right-80 items-center justify-center rounded-lg border-red-700"
          : "hidden"
      }
    >
      <span className="flex items-center justify-end m-5">
        <FaRegTimesCircle
          onClick={openCollectScript}
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </span>
<<<<<<< HEAD
      <div className="flex mb-5 ml-10 items-center justify-center border-red-600 border-2">
        <input
          type="text"
          placeholder="Collected by"
          value={collectedby}
          onChange={onChangeCollectedBy}
          className="py-2 mr-5"
        />
        <input
          type="text"
          placeholder="Delivered by"
          value={deliveredby}
          onChange={onChangeDeliveredBy}
          className="py-2"
        />
      </div>
=======
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
>>>>>>> feature/students-present
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

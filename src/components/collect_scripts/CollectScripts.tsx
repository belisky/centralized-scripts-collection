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
  const allScripts = useAppSelector((state) => state.scripts.scripts);

  const onClickSaveChanges = async () => {
    openCollectScript();

    const signatureUrl = await uploadToCloudinary(signature);
    const signedArr = [];

    for (const id of ids) {
      const obj = {
        _id: id,
        signatureUrl,
        deliveredBy: deliveredby,
        collectedBy: collectedby,
        collectedDate: new Date().toDateString(),
      };
      signedArr.push(obj);
    }
    console.log(signedArr);
    const envVar = { collectedScripts: signedArr };
    collectManyScripts({ variables: envVar })
      .then((data) => alert("success"))
      .catch((err) => alert(err));
    dispatch(removeIds());
  };
  return (
    <div
      className={
        openscriptCollection
          ? "fixed bg-blue-100 inset-0 border-2 w-8/12 z-40 top-30 bottom-0 left-60 right-80 items-center justify-center rounded-lg py-10"
          : "hidden"
      }
    >
      <span className="flex items-center justify-end m-5">
        <FaRegTimesCircle
          onClick={openCollectScript}
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
      </span>
      <div className="flex flex-wrap">
        <ul className="list-disc list-inside marker:text-black flex flex-wrap">
          {ids.map((id, index) => {
            const sel = allScripts.filter((script) => script._id === id);
            const item = sel[0];
            return (
              item && (
                <li
                  key={index}
                  className="m-1 text-sm font-bold flex list-disc"
                >
                  {item.courseCode} (<em>{item.class}</em>)
                </li>
              )
            );
          })}
        </ul>
      </div>
      <div className="flex mb-5 items-center justify-center">
        <input
          type="text"
          placeholder="Collected by"
          value={collectedby}
          onChange={onChangeCollectedBy}
          className="py-2 pl-2 mr-2 bg-blue-200 text-gray-900 rounded-md border-white w-48"
        />
        <input
          type="text"
          placeholder="Delivered by"
          value={deliveredby}
          onChange={onChangeDeliveredBy}
          className="py-2 pl-2 ml-2 border-white bg-blue-200 text-gray-900 rounded-md w-48"
        />
      </div>
      <SignPad onChangeSignature={onChangeSignature} />
      <button
        className="py-2 px-1 rounded-sm flex bg-green-500 w-full items-center justify-center text-white"
        onClick={onClickSaveChanges}
      >
        Save changes
      </button>
    </div>
  );
};

export default CollectScripts;

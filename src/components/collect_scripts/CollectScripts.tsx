import React from "react";
import SignPad from "../sign_pad/SignPad";

interface CollectScriptsProps {
  openscriptCollection: boolean;
  openCollectScript: () => void;
}

const CollectScripts = ({
  openscriptCollection,
  openCollectScript,
}: CollectScriptsProps) => {
  return (
    <div
      className={
        openscriptCollection
          ? "fixed backdrop-blur-sm border-2 top-60 bottom-30 left-50 right-80 items-center justify-center rounded-lg border-red-700"
          : "hidden"
      }
    >
      <input type="text" placeholder="Collected by" />
      <input type="text" placeholder="Delivered by" />
      <SignPad />
      <button
        className="py-2 px-1 rounded-sm flex bg-green-500 ml-auto text-white"
        onClick={openCollectScript}
      >
        Save changes
      </button>
    </div>
  );
};

export default CollectScripts;

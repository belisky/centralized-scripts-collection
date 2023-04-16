import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Sidebar } from "../components";
import "react-loading-skeleton/dist/skeleton.css";
import Homepage from "./Homepage";
import ScriptCollection from "./ScriptCollection";
import ScriptChecker from "./script-checker/ScriptChecker";

const Landingpage = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-auto w-full justify-between overflow-auto">
                <div className="w-1/6 h-screen">
                    <Sidebar />
                </div>

                <div className="w-5/6 flex flex-col flex-auto sticky top-0">
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route
                            path="script-collection"
                            element={<ScriptCollection />}
                        />
                        <Route
                            path="script-checker"
                            element={<ScriptChecker />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Landingpage;

import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ClipLoader } from "react-spinners";

import { IScript } from "../../lib/types";
import { GET_SCRIPTS, TOGGLE_SCRIPTS_SEEN_STATUS } from "../../api/graphql";
import {
    SeenScriptsTable,
    UnseenScriptsTable,
    FilterScriptsByDate,
    FilterScriptsByCourseCode,
} from "./components";
import { useScriptCheckerGetAllScripts } from "../../hooks";

export default function ScriptChecker() {
    const {
        allScripts: ALLSCRIPTS,
        dates: DATES,
        loading,
        error,
    } = useScriptCheckerGetAllScripts();
    console.log(ALLSCRIPTS);
    const [ALLUNSEEN, setALLUNSEEN] = useState<IScript[]>([]);
    const [ALLSEEN, setALLSEEN] = useState<IScript[]>([]);
    const [seenScripts, setSeenScripts] = useState<IScript[]>([]);
    const [unseenScripts, setUnseenScripts] = useState<IScript[]>([]);

    const [_toggleScriptsSeenStatus] = useMutation(TOGGLE_SCRIPTS_SEEN_STATUS);

    const filterByDate = (date: string) => {
        setSeenScripts(
            ALLSCRIPTS.filter(
                (scripts) => scripts.date === date && scripts.seen
            )
        );
        setUnseenScripts(
            ALLSCRIPTS.filter(
                (scripts) => scripts.date === date && !scripts.seen
            )
        );
        setALLUNSEEN(
            ALLSCRIPTS.filter(
                (scripts) => scripts.date === date && !scripts.seen
            )
        );
        setALLSEEN(
            ALLSCRIPTS.filter(
                (scripts) => scripts.date === date && scripts.seen
            )
        );
    };

    const [selectedTab, setSelectedTab] = useState<
        "unseen-scripts" | "seen-scripts"
    >("unseen-scripts");

    const [scriptsToRemoveFromUnseen, setScriptsToRemoveFromUnseen] = useState<
        string[]
    >([]);
    const [scriptsToRemoveFromSeen, setScriptsToRemoveFromSeen] = useState<
        string[]
    >([]);

    const filterScriptsByCourseCode = (filterParam: string) => {
        if (selectedTab === "seen-scripts") {
            const filteredScripts = ALLSEEN.filter((script) =>
                script.courseCode.includes(filterParam.toUpperCase())
            );
            setSeenScripts(filteredScripts);
        } else {
            const filteredScripts = ALLUNSEEN.filter((script) =>
                script.courseCode.includes(filterParam.toUpperCase())
            );
            setUnseenScripts(filteredScripts);
        }
    };

    const addToScriptsToRemoveFromUnseen = (scriptID: string) => {
        const found = scriptsToRemoveFromUnseen.find(
            (script) => script === scriptID
        );
        if (found) {
            setScriptsToRemoveFromUnseen((prev) =>
                prev.filter((script) => script !== scriptID)
            );
            return;
        }
        setScriptsToRemoveFromUnseen((prev) => [...prev, scriptID]);
    };

    const addToScriptsToRemoveFromSeen = (scriptID: string) => {
        const found = scriptsToRemoveFromSeen.find(
            (script) => script === scriptID
        );
        if (found) {
            setScriptsToRemoveFromSeen((prev) =>
                prev.filter((script) => script !== scriptID)
            );
            return;
        }
        setScriptsToRemoveFromSeen((prev) => [...prev, scriptID]);
    };

    const removeFromSeen = () => {
        _toggleScriptsSeenStatus({
            variables: {
                scriptsToToggleIds: scriptsToRemoveFromSeen,
            },
        })
            .then(() => {
                const foundScripts = seenScripts.filter((script) =>
                    scriptsToRemoveFromSeen.includes(script._id)
                );
                console.log("to remove from seen: ", foundScripts);
                setSeenScripts((prev) =>
                    prev.filter(
                        (script) =>
                            !scriptsToRemoveFromSeen.includes(script._id)
                    )
                );
                setUnseenScripts((prev) => [...prev, ...foundScripts]);
                setScriptsToRemoveFromSeen([]);
            })
            .catch((err) => console.log(err));
        const foundScripts = seenScripts.filter((script) =>
            scriptsToRemoveFromSeen.includes(script._id)
        );
        console.log("to remove from seen: ", foundScripts);
        setSeenScripts((prev) =>
            prev.filter(
                (script) => !scriptsToRemoveFromSeen.includes(script._id)
            )
        );
        setUnseenScripts((prev) => [...prev, ...foundScripts]);
    };

    const removeFromUnseen = () => {
        _toggleScriptsSeenStatus({
            variables: {
                scriptsToToggleIds: scriptsToRemoveFromUnseen,
            },
        })
            .then(() => {
                const foundScripts = unseenScripts.filter((script) =>
                    scriptsToRemoveFromUnseen.includes(script._id)
                );
                console.log("to remove from unseen: ", foundScripts);
                setUnseenScripts((prev) =>
                    prev.filter(
                        (script) =>
                            !scriptsToRemoveFromUnseen.includes(script._id)
                    )
                );
                setSeenScripts((prev) => [...prev, ...foundScripts]);
                setScriptsToRemoveFromUnseen([]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="page">
            <div className="filter-row">
                <FilterScriptsByDate
                    dates={DATES}
                    filterByDate={filterByDate}
                />
                <FilterScriptsByCourseCode
                    filterByCourseCode={filterScriptsByCourseCode}
                />
            </div>

            <div className="script-checker-fill-box script-checker-page-container">
                <div className="script-checker-fill-box-header">
                    <p>Showing Results</p>
                </div>
                <div className="script-checker-fill-box-main">
                    {loading ? (
                        <div className="script-checker-loading-box">
                            <ClipLoader
                                color={"#1f2937"}
                                loading={loading}
                                size={100}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        </div>
                    ) : error ? (
                        <div className="script-checker-loading-box">
                            <p className="script-checker-error-message">
                                {error.message}
                            </p>
                        </div>
                    ) : (
                        <div className="script-checker-table-container">
                            <div className="script-checker-btn-container">
                                <div className="script-checker-btn-row">
                                    <div
                                        className="script-checker-btn"
                                        style={{
                                            backgroundColor:
                                                selectedTab === "unseen-scripts"
                                                    ? "#1f2937"
                                                    : "transparent",
                                        }}
                                    >
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedTab(
                                                    "unseen-scripts"
                                                );
                                            }}
                                            style={{
                                                color:
                                                    selectedTab ===
                                                    "unseen-scripts"
                                                        ? "#fff"
                                                        : "#1f2937",
                                            }}
                                        >
                                            Unseen Scripts
                                        </a>
                                    </div>
                                    <div
                                        className="script-checker-btn"
                                        style={{
                                            backgroundColor:
                                                selectedTab === "seen-scripts"
                                                    ? "#1f2937"
                                                    : "transparent",
                                        }}
                                    >
                                        <a
                                            href="#"
                                            style={{
                                                color:
                                                    selectedTab ===
                                                    "seen-scripts"
                                                        ? "#fff"
                                                        : "#1f2937",
                                            }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedTab("seen-scripts");
                                            }}
                                        >
                                            Seen Scripts
                                        </a>
                                    </div>
                                </div>
                                {selectedTab === "seen-scripts" ? (
                                    <div
                                        className="script-checker-btn script-seen-btn"
                                        style={{ backgroundColor: "#b91c1c" }}
                                    >
                                        <a
                                            href="#"
                                            style={{ color: "#fff" }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeFromSeen();
                                            }}
                                        >
                                            Move to Unseen
                                        </a>
                                    </div>
                                ) : (
                                    <div
                                        className="script-checker-btn script-seen-btn"
                                        style={{ backgroundColor: "#65a30d" }}
                                    >
                                        <a
                                            href="#"
                                            style={{ color: "#fff" }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeFromUnseen();
                                            }}
                                        >
                                            Set Scripts as Seen
                                        </a>
                                    </div>
                                )}
                            </div>
                            {selectedTab === "seen-scripts" ? (
                                <SeenScriptsTable
                                    scripts={seenScripts}
                                    removeFromSeen={
                                        addToScriptsToRemoveFromSeen
                                    }
                                />
                            ) : (
                                <UnseenScriptsTable
                                    scripts={unseenScripts}
                                    removeFromUnseen={
                                        addToScriptsToRemoveFromUnseen
                                    }
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

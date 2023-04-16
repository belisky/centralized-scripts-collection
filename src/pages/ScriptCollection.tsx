import { useState } from "react";
import {
    AwaitingScripts,
    UpdateScripts,
    CollectedScripts,
} from "../components";
import { useScriptList } from "../hooks/useScriptList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ScriptCollection() {
    const { error, data, loading } = useScriptList();

    const [tab, setTab] = useState(1);
    const onChangeTab = (num: number) => {
        setTab(num);
    };

    return (
        <div className="w-11/12 flex flex-col overflow-visible">
            {/* <Tabs onChangeTab={onChangeTab} tab={tab} /> */}
            {loading ? (
                <Skeleton count={15} />
            ) : (
                <>
                    {data && (
                        <>
                            {tab === 1 && (
                                <UpdateScripts
                                    scripts={data.getAllScripts}
                                    setTab={onChangeTab}
                                    tab={tab}
                                />
                            )}
                            {tab === 2 && (
                                <AwaitingScripts
                                    scripts={data.getAllScripts}
                                    setTab={onChangeTab}
                                    tab={tab}
                                />
                            )}
                            {tab === 3 && (
                                <CollectedScripts
                                    scripts={data.getAllScripts}
                                    setTab={onChangeTab}
                                    tab={tab}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_SCRIPTS } from "../api/graphql";
import { IScript } from "../lib/types";

export default function useScriptCheckerGetAllScripts() {
    const [allScripts, setAllScripts] = useState<IScript[]>([]);
    const [dates, setDates] = useState<string[]>([]);

    const { loading, data, error } = useQuery(GET_SCRIPTS);

    useEffect(() => {
        if (!loading && data) {
            setAllScripts(data.getAllScripts);
            const allDates = (data.getAllScripts as IScript[]).map(
                (script) => script.date
            );
            setDates(Array.from(new Set(allDates)));
        }
    }, [data]);

    return { allScripts, loading, error, dates };
}

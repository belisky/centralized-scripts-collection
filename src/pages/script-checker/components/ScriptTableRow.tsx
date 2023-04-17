import { useState } from "react";

import { IScript } from "../../../lib/types";

type ScriptTableRowProps = {
    script: IScript;
    onCheck: (scriptId: string) => void;
};

export default function ScriptTableRow({
    script,
    onCheck,
}: ScriptTableRowProps) {
    const [checked, setChecked] = useState(false);
    const checkHandler = () => {
        setChecked(!checked);
        onCheck(script._id);
    };

    return (
        <tr>
            <td>{script.courseCode}</td>
            <td>{script.courseName}</td>
            <td>{script.class}</td>
            <td>{script.session}</td>
            <td>{script.rooms}</td>
            <td>{script.toPrint}</td>
            <td>
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={checked}
                    onChange={checkHandler}
                />
            </td>
        </tr>
    );
}

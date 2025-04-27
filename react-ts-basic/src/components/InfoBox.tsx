import {ReactNode} from "react";

type HintBoxProps = {
    mode: "hint";
    children: ReactNode;
};

type WarningBoxProps = {
    mode: "hint" | "warning";
    severity?: "low" | "medium" | "high"; // this is called an union type of literals
    children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps; // This is a sample of discriminated union.

export default function InfoBox(props: InfoBoxProps) {

    const { children, mode } = props; // we can also destructure within the code rather in the function parameter

    if (mode === "hint") {
        return (
            <aside className="infobox infobox-hint">
                <p>{children}</p>
            </aside>
        );        
    }

    const { severity } = props; // destructring can also be done within the function

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning!</h2>
            <p>{children}</p>
        </aside>
    );        

}
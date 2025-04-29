import ComponentPropsWithoutRef from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { // & is used to merge the types
    href?: never; // never means the value can never be set and it is optional due to the "?"
}

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
    href?: string;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps { // is operator adds type guarding (predicate)
    return "href" in props;
}

export default function Button(props: ButtonProps | AnchorProps) {

    if ("href" in props) {
        return (<a className="button" {...props}></a>);
    }

    return (<button className="button" {...props}></button>);
}
import {ElementType, ReactNode, ComponentPropsWithoutRef} from "react";

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// A polymorphic component that will dynamically wrap a container
export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    const Component = as || "div";

    return (<Component className="button" {...props}>{children}</Component>)
}
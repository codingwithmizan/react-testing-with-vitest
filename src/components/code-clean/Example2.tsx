import { FC } from "react";
import { cn } from "@/lib/helpers";

interface IButton {
	classNames?: string;
}

export const Button: FC<IButton> = ({ classNames }) => {
	return <div className={cn(`btn btn-primary`, classNames)}>Button</div>;
};

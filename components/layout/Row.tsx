import { classNames } from "@/utils";
import { PropsWithChildren } from "react";

export interface RowProps {
	className?: string;
}

const Row = ({ children, className }: PropsWithChildren<RowProps>) => {
	return <div className={classNames('grid auto-rows-auto grid-cols-4 gap-x-4 md:grid-cols-12', className)}>{children}</div>;
};

export default Row;
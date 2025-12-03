import { ESize } from "../../_types/sizing";

export type BadgeSize = ESize.SM | ESize.MD | ESize.LG | ESize.XL;

export enum EIconBadgeKind {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	WARNING = "warning",
	ERROR = "error",
	AI = "ai"
}

export interface IUiIconBadgeProps {
	size?: BadgeSize;
	kind?: EIconBadgeKind;
	children: React.ReactNode;
	className?: string;
}

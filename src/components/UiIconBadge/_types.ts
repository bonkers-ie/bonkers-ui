import { ESize } from "../../_types/sizing";

export type BadgeSize = ESize.SM | ESize.MD | ESize.LG | ESize.XL;

export enum EIconBadgeKind {
	PRIMARY = "primary",
	LIGHT = "light",
	DARK = "dark",
	WARNING = "warning",
	ERROR = "error"
}

export interface IUiIconBadgeProps {
	size?: BadgeSize;
	kind?: EIconBadgeKind;
	children: React.ReactNode;
	className: string;
}

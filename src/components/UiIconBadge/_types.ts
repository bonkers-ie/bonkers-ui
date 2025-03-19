import { ESize } from "../../_types/sizing";
import { type IconProp } from "@fortawesome/fontawesome-svg-core";

export type BadgeSize = ESize.SM | ESize.MD | ESize.LG | ESize.XL;

export enum EIconBadgeKind {
	PRIMARY = "primary",
	LIGHT = "light",
	DARK = "dark",
	WARNING = "warning",
	ERROR = "error"
}

export interface IUiIconBadgeProps {
	name: IconProp;
	size?: BadgeSize;
	kind?: EIconBadgeKind;
	children?: React.ReactNode;
}
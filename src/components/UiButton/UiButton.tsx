import React from "react";
import { EButtonSizes, EButtonTypes } from "./_typings";
import  cx  from "classnames";

interface ButtonProps {
  kind?: EButtonTypes;
  size?: EButtonSizes;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const UiButton: React.FC<ButtonProps> = ({
  kind = EButtonTypes.PRIMARY,
  size = EButtonSizes.DEFAULT,
  fullWidth = false,
  disabled = false,
  children
}) => {
    const kindClasses = {
      [EButtonTypes.PRIMARY]: "bg-primary text-white",
      [EButtonTypes.SECONDARY]: "bg-secondary text-white",
      [EButtonTypes.ERROR]: "bg-error text-white",
      [EButtonTypes.WARNING]: "bg-warning text-white",
      [EButtonTypes.PRIMARY_OVERLAY]: "border border-primary text-primary",
      [EButtonTypes.SECONDARY_OVERLAY]: "border border-secondary text-secondary",
      [EButtonTypes.ERROR_OVERLAY]: "border border-error text-error",
      [EButtonTypes.WARNING_OVERLAY]: "border border-warning text-warning",
      [EButtonTypes.LINK]: "text-accent-alt",
    };

    const sizeClasses = {
      [EButtonSizes.SMALL]: "px-md py-xxs",
      [EButtonSizes.MEDIUM]: "p-sm",
      [EButtonSizes.LARGE]: "p-md",
      [EButtonSizes.DEFAULT]: "px-md py-sm",
    };

    return (
      <button
        className={cx(
          "rounded-md",
          kindClasses[kind],
          sizeClasses[size],
          {
            "w-full": fullWidth,
          },
          {
            "disabled:opacity-50": disabled,
            "hover:shadow-md": !disabled,
          }
        )}
        disabled={disabled}
      >
        {children}
      </button>
    );
};
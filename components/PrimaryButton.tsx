import { PrimaryButtonTypes } from "@/types";
import Image from "next/image";

const PrimaryButton = (btnProps: PrimaryButtonTypes) => {
  const {
    containerStyles,
    children,
    type = "button",
    textStyles,
    rightIcon,
    ...props
  } = btnProps;
  return (
    <button
      className={`custom-btn relative ${containerStyles}`}
      type={type}
      {...props}
    >
      <span className={`flex-1 ${textStyles}`}>{children}</span>

      {rightIcon && (
        <div className="absolute w-6 h-6 right-5">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default PrimaryButton;

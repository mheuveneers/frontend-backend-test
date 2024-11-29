import clsx from "clsx";

export const FreeGiftTag = ({
  tilt = "right",
}: {
  tilt?: "left" | "right";
}) => {
  return (
    <div
      className={clsx(
        "border bg-[#FFB8EF] border-[#E7AADA] text-[#773E75] uppercase font-bold px-5 py-1 text-xs",
        tilt === "left" ? "-rotate-12" : "rotate-12"
      )}
    >
      Free gift
    </div>
  );
};

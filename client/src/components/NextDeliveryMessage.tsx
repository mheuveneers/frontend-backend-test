import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

import { FreeGiftTag } from "./FreeGiftTag";
import randomCatImage from "../assets/random-cat.png";
import randomCatRoundImage from "../assets/random-cat-round.png";
import { useNextDelivery } from "../hooks";

export const NextDeliveryMessage = () => {
  const { userId } = useParams();
  const { data } = useNextDelivery(userId);

  if (!data) {
    return <></>;
  }

  const { freeGift, message, title, totalPrice } = data;

  return (
    <div className="relative flex rounded-lg border bg-white">
      <div className="flex">
        <img className="hidden rounded-lg md:block" src={randomCatImage} />
      </div>
      <img
        className="absolute -top-14 left-0 right-0 m-auto block rounded-full border md:hidden"
        src={randomCatRoundImage}
      />
      <div className="flex flex-col justify-evenly gap-5 px-6 py-14 md:py-6">
        <div className="flex flex-col gap-5 text-center md:text-start">
          <div className="flex flex-col gap-2">
            <span className="text-base font-bold text-[#0D8112]">{title}</span>
            <span className="text-xs">{message}</span>
          </div>
          <span className="text-sm font-bold">
            Total price: £{totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="flex gap-3">
          <Button fullWidth variant="contained" size="small">
            See details
          </Button>
          <Button fullWidth variant="outlined" size="small">
            Edit delivery
          </Button>
        </div>
      </div>
      {freeGift && (
        <>
          <div className="absolute -right-4 -top-2 hidden md:block">
            <FreeGiftTag />
          </div>
          <div className="absolute -bottom-4 left-0 right-0 m-auto block w-fit md:hidden">
            <FreeGiftTag tilt="left" />
          </div>
        </>
      )}
    </div>
  );
};

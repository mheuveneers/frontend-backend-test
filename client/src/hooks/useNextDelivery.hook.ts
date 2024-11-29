import axios from "axios";
import { useQuery } from "react-query";

import { NextDelivery } from "../domain/interfaces";

const fetchNextDelivery = async (userId?: string): Promise<NextDelivery> => {
  const url = `http://localhost:3000/comms/your-next-delivery/${userId}`;
  const response = await axios.get(url);
  return response.data;
};

export const useNextDelivery = (userId?: string) => {
  return useQuery(["nextDelivery", userId], () => fetchNextDelivery(userId), {
    enabled: !!userId,
  });
};

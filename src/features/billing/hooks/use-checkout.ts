import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";

export function useCheckout() {

    const checkout = useCallback(() => {
  }, []);

  return { checkout, isPending: false };
};
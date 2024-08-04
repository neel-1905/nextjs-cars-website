"use client";

import { ShowMoreType } from "@/types";
import React from "react";
import { useRouter } from "next/navigation";
import PrimaryButton from "./PrimaryButton";
import { updateSearchParams } from "@/utils";

const ShowMore = (props: ShowMoreType) => {
  const { isNext, pageNumber } = props;
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPath = updateSearchParams("limit", newLimit.toString());

    router.push(newPath, { scroll: false });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext ? (
        <PrimaryButton
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        >
          Show More
        </PrimaryButton>
      ) : null}
    </div>
  );
};

export default ShowMore;

import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { WithSuspenceProps } from "./WithSuspence.type";

export const WithSuspence = (ComponentToRender: WithSuspenceProps) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full py-5 flex justify-center items-center">
          <CircularProgress />
        </div>
      }
    >
      {ComponentToRender}
    </Suspense>
  );
};

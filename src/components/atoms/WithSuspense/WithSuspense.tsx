import CircularProgress from "@mui/material/CircularProgress";
import { Suspense } from "react";
import { WithSuspenseProps } from "./WithSuspense.type";

export const WithSuspense = (ComponentToRender: WithSuspenseProps) => {
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

import React from "react";
import { Oval } from "react-loader-spinner";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Oval />
    </div>
  );
}

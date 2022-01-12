import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <p className="not-found-text">404: Page Not Found</p>
      <Link to="/" className="not-found-back">
        Go to Main Page
      </Link>
    </div>
  );
}

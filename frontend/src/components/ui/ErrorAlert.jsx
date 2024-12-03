import React from "react";
import { AlertTriangle } from "lucide-react";

const ErrorAlert = ({ message }) => (
  <div className="alert alert-error">
    <AlertTriangle className="w-6 h-6" />
    <span>{message}</span>
  </div>
);

export default ErrorAlert;

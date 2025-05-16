"use client";

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to the console
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h2 className="text-2xl font-semibold text-red-700 mb-4">
        Error Fetching user data
      </h2>
    </div>
  );
}

import React, { Component, useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setStatus(false);
    };
    const handleOnline = () => {
      setState(true);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return status ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;

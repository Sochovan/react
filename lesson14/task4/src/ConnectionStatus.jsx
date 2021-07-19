import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleOffline = () => {
      setStatus(false);
    };
    const handleOnline = () => {
      setState(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );
};

export default ConnectionStatus;

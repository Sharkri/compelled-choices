import { useEffect, useState } from "react";

const FeedbackMessage = ({ message, verse, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`feedback-message ${type} ${visible ? "visible" : "hidden"}`}
    >
      {type === "weather" && <div className="weather-icon" />}
      <p>{message}</p>
      {verse && <small className="verse">{verse}</small>}
    </div>
  );
};
export default FeedbackMessage;

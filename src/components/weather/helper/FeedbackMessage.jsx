import { useEffect, useState } from "react";
import "/src/css/FeedbackMessage.css";

const weatherLevelUp = {
  rainy: null,
  cloudy: {
    message: "The sky brightens as your heart aligns with His love...",
    verse: "Persevere—Galatians 6:9",
  },
  sunny: {
    message: "The sun shines warmly as His favor illuminates your path...",
    verse: "Arise, shine—Isaiah 60:1",
  },
};

const FeedbackMessage = ({ weather }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const msg = weatherLevelUp[weather];
  if (msg == null) return;
  const { message, verse } = msg;

  return (
    <div className={`feedback-message ${visible ? "visible" : "hidden"}`}>
      <p>{message}</p>
      {verse && <small className="verse">{verse}</small>}
    </div>
  );
};
export default FeedbackMessage;

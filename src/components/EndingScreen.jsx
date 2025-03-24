const EndingScreen = ({ ending }) => {
  return (
    <div className="ending-screen">
      <h2>{ending.title}</h2>
      <p>{ending.message}</p>
      <blockquote>{ending.verse}</blockquote>
      <div className="compel-wrapper">
        <label for="compel">What will Christ compel you to do?</label>
        <textarea
          placeholder="He inspires me to spread love and forgiveness in my community."
          id="compel"
        />
      </div>
    </div>
  );
};
export default EndingScreen;

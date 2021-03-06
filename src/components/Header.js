import { useEffect, useState } from "react";

const Header = ({ setInputResult }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setInputResult(input);
  });

  return (
    <div id="header" className="header">
      <div className="logo">
        <h1>DBO+</h1>
      </div>
      <form className="search-bar">
        <input
          type="text"
          value={input}
          placeholder="search movie..."
          onChange={(e) => {
            setInput(e.target.value);
            e.preventDefault();
          }}
        />
        <i className="fas fa-search"></i>
      </form>
    </div>
  );
};

export default Header;

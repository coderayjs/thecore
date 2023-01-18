import React, { useState } from "react";

function Toggler() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="App">
      <button onClick={toggleMenu}>Show menu</button>

      {openMenu ? (
        <div>
          <p>yo</p>
          <p>How are you</p>
          <p>Today?</p>
        </div>
      ) : null}
    </div>
  );
}

export default Toggler;


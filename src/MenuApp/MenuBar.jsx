import React from "react";

const MenuBar = ({ filterItem, MenuList }) => {
  return (
    <>
      <div className="container-lg navbarbox">
        <div className="container-fluid">
          <ul className="navBar">
            {MenuList.map((cele, idx) => {
              return (
                <li className="" key={idx}>
                  <button
                    className="link-btn"
                    onClick={() => {
                      filterItem(cele);
                    }}
                  >
                    {cele}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuBar;

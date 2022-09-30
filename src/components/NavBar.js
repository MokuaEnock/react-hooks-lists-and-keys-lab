import React from "react";

function NavBar() {
  let links = ["home", "about", "projects"];

  let all = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{all}</nav>;
}

export default NavBar;

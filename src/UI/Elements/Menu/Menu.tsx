import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { Link } from "react-scroll";
import ListItem from "@mui/material/ListItem";
import "./Menu.scss";
import "../../components/Header/Header.scss"


type Anchor = "top" | "left" | "bottom" | "right";

export default function Menu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const menu: Array<{ href: string; title: string }> = [
    { href: "Home", title: "Home" },
    { href: "Shope", title: "Shope" },
    { href: "Blog", title: "Blog" },
    { href: "AboutUs", title: "About Us" },
    { href: "Product", title: "Product" },
    { href: "Pages", title: "Pages" },
    { href: "ContactUS", title: "Contact US" },
  ];

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
       <div className="header__logo"><Link to="Home">Logo</Link> </div>
      <List>
        {menu.map((elem:{ href: string; title: string },index)=>(
          <Link key={index} className={"menu"}  to={elem.href} spy={true} smooth={true} offset={-100} duration={500}>
          <button onClick={toggleDrawer(anchor, false)}>
            <ListItem button>{elem.title}</ListItem>
          </button>
        </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img
              alt="menu"
              src="https://img.icons8.com/external-outline-juicy-fish/60/000000/external-menu-cms-outline-outline-juicy-fish.png"
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

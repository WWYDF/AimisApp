import { GameController, Icon } from "phosphor-react";

export type NavLinkItem = {
  type: "link";
  name: string;
  description?: string;
  icon?: Icon | string; // Phosphor or img path
  href: string;
  external?: boolean;
};

export type NavDropdownItem = {
  type: "dropdown";
  name: string;
  icon?: Icon;
  items: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavDropdownItem;

export const NavItems: NavItem[] = [
  {
    type: "dropdown",
    name: "Games",
    icon: GameController,
    items: [
      {
        type: "link",
        name: "Daily Trivia",
        icon: "/i/games/trivia.png",
        href: "/trivia",
        description: "Double or Negative",
      },
      {
        type: "link",
        name: "Omegle",
        icon: "/i/games/omegle.png",
        href: "#",
        description: "Coming Soon",
      },
    ],
  },
];

import { Cloud, Database, DiscordLogo, Flask, GameController, HardDrive, House, HouseLine, Icon, Question } from "phosphor-react";

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
        name: "Trivia",
        icon: "/i/games/trivia.png",
        href: "/trivia",
        description: "Flavor Text",
      },
      {
        type: "link",
        name: "Omegle",
        icon: "/i/games/omegle.png",
        href: "/omegle",
        description: "Flavor Text",
      },
    ],
  },
];

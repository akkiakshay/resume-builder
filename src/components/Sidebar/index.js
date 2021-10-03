import {
  BsFillPersonFill,
  BsFillPersonLinesFill,
  BsBook,
  BsFillGearFill,
  BsBriefcaseFill,
} from "react-icons/bs";
export { Sidebar } from "./Sidebar";

export const sections = [
  {
    id: 1,
    name: "Personal",

    icon: <BsFillPersonFill />,
  },
  {
    id: 2,
    name: "Profile",

    icon: <BsFillPersonLinesFill />,
  },
  {
    id: 3,
    name: "Experience",

    icon: <BsBriefcaseFill />,
  },
  {
    id: 4,
    name: "Education",

    icon: <BsBook />,
  },
  {
    id: 5,
    name: "Skills",

    icon: <BsFillGearFill />,
  },
];

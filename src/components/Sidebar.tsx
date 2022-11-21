import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

type SidebarProps = {
  actualCategory: string;
  categoryStateModifier: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({ actualCategory, categoryStateModifier }: SidebarProps) => (
  <Stack
    p={2}
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          categoryStateModifier(category.name);
        }}
        style={{
          background: category.name === actualCategory ? "#FC1503" : "black",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === actualCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === actualCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

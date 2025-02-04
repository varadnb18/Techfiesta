import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function FilterDropdown({ title }) {
  return (
    <Menu placement="bottom-start">
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color="#08656e" boxSize="20px" />}
        sx={{
          backgroundColor: "transparent",
          border: "1px solid #e2e8f0",
          boxShadow: "none",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "500",
          padding: "10px 10px",
        }}
      >
        {title}
      </MenuButton>
      <MenuList
        sx={{
          backgroundColor: "white",
          border: "1px solid #e2e8f0",
          padding: "10px",
          boxShadow: "md",
          borderRadius: "4px",
        }}
      >
        {["Teachers", "Style", "Duration", "Level", "Specific Use"].map(
          (item, index) => (
            <MenuItem
              key={index}
              sx={{
                padding: "8px 12px",
                fontSize: "14px",
                fontWeight: "500",
                color: "#333",
                borderRadius: "4px",
                _hover: { backgroundColor: "#f0f0f0" },
                _focus: { backgroundColor: "#e2e8f0" },
              }}
            >
              {item}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
}

export default FilterDropdown;

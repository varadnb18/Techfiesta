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
          padding: "21px 25px",
        }}
      >
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem>Teachers</MenuItem>
        <MenuItem>Style</MenuItem>
        <MenuItem>Duration</MenuItem>
        <MenuItem>Level</MenuItem>
        <MenuItem>Specific Use</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default FilterDropdown;

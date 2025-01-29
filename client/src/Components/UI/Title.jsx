import React from "react";
import { ChevronDownIcon, Box } from "@chakra-ui/icons";

function Title() {
  return (
    <div className="flex justify-around h-[4.7rem] items-center pt-3 ml-1">
      <div>
        <img
          src="https://www.elitefitforyou.com/img/EFLogo.e7a7e136.png"
          alt=""
          className="max-h-[150px] aspect-[3/2] object-contain"
        />
      </div>
      <div>
        <ul className="flex gap-9 font-medium">
          {["Solutions", "About", "Resources", "Tools"].map((item) => (
            <div>
              <li key={item}>
                {item}{" "}
                <Box as="button" aria-label="Dropdown">
                  <ChevronDownIcon boxSize={5} />
                </Box>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="px-[1.5rem] py-[0.6rem] text-base font-bold text-[#0d2436] border-[1px] border-[#6CB33F] rounded-full bg-white hover:bg-green-50 transition">
          Sign In
        </button>
        <button className="px-6 py-[0.5rem] text-base font-bold text-white bg-[#6CB33F] rounded-full hover:bg-green-600 transition">
          Try Now
        </button>
      </div>
    </div>
  );
}

export default Title;

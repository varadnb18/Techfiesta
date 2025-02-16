import {
  Box,
  Button,
  Divider,
  Text,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfilePopup = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <Box position="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="px-[1.5rem] py-[0.6rem] text-base font-bold text-[#0d2436] border-[1px] border-[#6CB33F] rounded-full bg-white hover:bg-green-50 transition "
      >
        Menu
      </Button>
      {isOpen && (
        <Box
          position="absolute"
          top="50px"
          right="0"
          w="250px"
          bg="white"
          color="black"
          borderRadius="md"
          boxShadow="lg"
          p={2}
        >
          <VStack align="stretch" spacing={1}>
            <HStack justifyContent="space-between" px={3} py={2}>
              <Text fontWeight="bold">Messages</Text>
              <Badge colorScheme="red">1 unread</Badge>
            </HStack>
            <Link to="/Profile">
              <Text
                px={3}
                py={2}
                _hover={{ bg: "gray.100", cursor: "pointer" }}
                fontWeight="bold"
              >
                Profile
              </Text>
            </Link>
            <Text px={3} py={2} _hover={{ bg: "gray.100", cursor: "pointer" }}>
              Varad
            </Text>
            <Divider />
            <Text px={3} py={2} _hover={{ bg: "gray.100", cursor: "pointer" }}>
              Varad
            </Text>
            <Text px={3} py={2} _hover={{ bg: "gray.100", cursor: "pointer" }}>
              Varad
            </Text>

            <Divider />
            <Text px={3} py={2} _hover={{ bg: "gray.100", cursor: "pointer" }}>
              Help Centre
            </Text>

            <Text
              px={3}
              py={2}
              _hover={{ bg: "gray.100", cursor: "pointer" }}
              color="red.500"
              onClick={() => {
                handleLogout();
                navigate("/");
              }}
            >
              Log out
            </Text>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ProfilePopup;

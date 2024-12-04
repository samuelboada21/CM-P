import { Flex, Image, Link, Box, useMediaQuery } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import IconButtonReusable from "./IconButtonReusable";
function Navbar() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const whatsappNumber = "573508090401";

  const socialLinks = [
    // {
    //   icon: <FaFacebook />,
    //   href: "https://www.facebook.com/profile.php?id=100092853669268&mibextid=ZbWKwL",
    //   colorHover: "blue",
    // },
    {
      icon: <RiWhatsappFill size="20px" />,
      href: `https://wa.me/${whatsappNumber}`,
      colorHover: "green.500",
    },
    {
      icon: <FaInstagram size="18px" />,
      href: "https://www.instagram.com/cmperfum/",
      colorHover: "pink.400",
    },
  ];

  return (
    <Flex
      position="fixed"
      width="100%"
      backdropFilter="blur(2px)"
      bg="rgba(30,29,29,0.9)"
      padding="36px"
      shadow="0px 0px 10px rgba(0,0,0,1)"
      justifyContent="space-between"
      alignItems="center"
      maxH={w ? "110px" : "130px"}
      zIndex="11"
    >
      <Link href="/">
        <Image src="./publico/Logo.png" alt="Logo" w="100px" />
      </Link>

      <Box>
        {socialLinks.map((link, index) => (
          <IconButtonReusable
            key={index}
            icon={link.icon}
            href={link.href}
            colorHover={link.colorHover}
          />
        ))}
      </Box>
    </Flex>
  );
}

export default Navbar;

import {
  Grid,
  GridItem,
  Flex,
  Text,
  IconButton,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import IconButtonReusable from "./IconButtonReusable";

function Footer() {
  const [w] = useMediaQuery("(min-width: 900px)");
  const currentYear = new Date().getFullYear();
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
      position="relative"
      bottom="0"
      width="100%"
      height="400px"
      bg="#1E1D1D"
      shadow="0px -5px 10px rgba(0,0,0,0.5)"
      alignItems={"center"}
      padding="36px"
      direction={w ? "row" : "column"}
      justifyContent="space-around"
    >
      {w ? (
        <Grid templateColumns="1fr 2px 1fr 1fr" gap={6} w={"100%"}>
          <GridItem
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="./publico/Logo.png" alt="Logo" width="180px" />
          </GridItem>
          <GridItem height="100%" bg="white" />
          <GridItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {/* <Text color="white" fontSize="lg" mb="24px">
              Email:{" "}
              <Link href="mailto:swag.arquitectos@gmail.com">
                swag.arquitectos@gmail.com
              </Link>
            </Text> */}
            <Flex justifyContent="space-around" width="300px" mb="24px">
              {socialLinks.map((link, index) => (
                <IconButtonReusable
                  key={index}
                  icon={link.icon}
                  href={link.href}
                  colorHover={link.colorHover}
                />
              ))}
            </Flex>
            <Flex justifyContent="center" direction={"column"}>
              <Text textAlign="center" color="gray">
              Todos los derechos reservados ©{currentYear}
              </Text>
              <Text textAlign="center" color="gray">
                <strong>CM PERFUM</strong>
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      ) : (
        <Flex direction="column" alignItems="center" width="100%">
          <Flex>
            <Image
              src="./publico/Logo.png"
              alt="Logo"
              width="160px"
              mb="24px"
            />
          </Flex>
          {/* <Text color="white" fontSize="lg" mb="24px">
            Email:{" "}
            <Link href="mailto:swag.arquitectos@gmail.com">
              swag.arquitectos@gmail.com
            </Link>
          </Text> */}
          <Flex justifyContent="center" mb="24px">
            {/* <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "blue" }}
              icon={<FaFacebook />}
              color="white"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100092853669268&mibextid=ZbWKwL",
                  "_blank"
                )
              }
            /> */}
            <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "green.500" }}
              icon={<RiWhatsappFill size="20px" />}
              color="white"
              onClick={() =>
                window.open(`https://wa.me/${whatsappNumber}`, "_blank")
              }
            />
            <IconButton
              bg="none"
              className="animate-top"
              _hover={{ color: "pink.400" }}
              icon={<FaInstagram size="18px" />}
              color="white"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/cmperfum/",
                  "_blank"
                )
              }
            />
          </Flex>
          <Flex direction={"column"} alignItems="center">
            <Text textAlign="center" color="gray">
            Todos los derechos reservados ©{currentYear}
            </Text>
            <Text textAlign="center" color="gray">
              <strong>CM PERFUM</strong>
            </Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default Footer;

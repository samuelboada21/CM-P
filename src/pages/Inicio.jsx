import { useState } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import InicioTrabajo from "./InicioTrabajo";

export default function Inicio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const imagePaths = [
    {src: "./WS/w23.jpeg"},
    {src: "./WS/w1.jpeg"},
    {src: "./WS/w21.jpeg"},
    {src: "./WS/w20.jpeg"},
    {src: "./WS/w2.jpeg"},
    {src: "./WS/w18.jpeg"},
    {src: "./WS/w17.jpeg"},
    {src: "./WS/w16.jpeg"},
    {src: "./WS/w15.jpeg"},
    {src: "./WS/w14.jpeg"},
    {src: "./WS/w13.jpeg"},
    {src: "./WS/w3.jpeg"},
    {src: "./WS/w11.jpeg"},
    {src: "./WS/w10.jpeg"},
    // {src: "./WS/w9.jpeg"},
    {src: "./WS/w8.jpeg"},
    {src: "./WS/w7.jpeg"},
    {src: "./WS/w6.jpeg"},
    {src: "./WS/w5.jpeg"},
    {src: "./WS/w12.jpeg"},
    {src: "./WS/w4.jpeg"},
    {src: "./WS/w19.jpeg"},
    {src: "./WS/w22.jpeg"},
    // Agrega las demás imágenes aquí...
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <>
      <InicioTrabajo />
      <Flex
        direction="column"
        justifyContent="center"
        h="50vh"
        overflow="hidden"
        position="relative"
        p="30px"
      >
        <Image
          src="./WS/w16.jpeg"
          alt="Fondo"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
        />
        <Flex
          position="absolute"
          // top="10%"
          left="0"
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          className="slide-in-left"
        >
          <Text
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="white"
            textShadow="2px 2px 8px rgba(0, 0, 0, 0.9)"
            className="changeText"
          >
            NUESTROS PERFUMES
          </Text>
        </Flex>
      </Flex>
      {/* Parte 2 imágenes */}
      <Box p="80px 20px 20px 20px">
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={1}
        >
          {imagePaths.map((image, index) => (
            <GridItem
              key={index}
              position="relative"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={`Imagen ${index + 1}`}
                // w="100%"
                // h="100%"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              />
              {/* <Center
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(8, 173, 249, 0.5)"
                opacity="0"
                transition="opacity 0.2s"
                _hover={{ opacity: 1 }}
              >
                <Text
                  fontSize={["xl", "2xl", "3xl"]}
                  fontWeight="bold"
                  color="white"
                  textAlign={"center"}
                  textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
                >
                  {image.titulo}
                </Text>
              </Center> */}
            </GridItem>
          ))}
        </Grid>
      </Box>
      {/* Modal */}
      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent maxW={{base:"80vw", md: "50vw"}} bg={"black"}>
            <ModalCloseButton />
            <ModalBody p={0}>
              <Image
                src={selectedImage.src}
                alt={selectedImage.titulo}
                w="100%"
                h="auto"
                borderRadius="md"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

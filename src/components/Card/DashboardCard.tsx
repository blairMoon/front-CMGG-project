import { Box, Text, VStack, useColorMode } from "@chakra-ui/react";
import { hsl, parseToHsl } from "polished";
import { HslColor } from "polished/lib/types/color";

interface DashboardCardProps {
  title: string;
  value: string;
  bgColor: string;
  boxShadow?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  bgColor,
  boxShadow,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hslaColor: HslColor = parseToHsl(bgColor);

  // L 값을 10% 낮춤
  const darkerColor = hsl({
    ...hslaColor,
    lightness: hslaColor.lightness - 0.3,
  });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      padding="1rem"
      minWidth="200px"
      bgColor={colorMode === "light" ? bgColor : darkerColor}
      color={colorMode === "light" ? "black" : "white"}
      boxShadow={boxShadow ? boxShadow : "none"}
    >
      <VStack>
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="2xl">{value}</Text>
      </VStack>
    </Box>
  );
};

export default DashboardCard;

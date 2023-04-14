import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import css from "./Header.module.scss";
export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <div className={css.headerContainer}>
        <Text
          py={{ base: 2 }}
          px={{ base: 4 }}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily="heading"
          color={useColorModeValue("gray.800", "white")}
        >
          Logo
        </Text>
      </div>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              href={"#"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Whole Lecutres",
    href: "/lectures/all/all/?page=1",
  },
  {
    label: "Basic Coding",
    href: "/lectures/basic/all/?page=1",
    children: [
      {
        label: "HTML",
        subLabel: "웹사이트의 모습을 기술하기 위한 마크업 언어",
        href: "/lectures/basic/html/?page=1",
      },
      {
        label: "CSS",
        subLabel: "웹사이트에 표현되는 방법을 정해주는 스타일 시트 언어",
        href: "/lectures/basic/css/?page=1",
      },
    ],
  },
  {
    label: "Frontend",
    href: "/lectures/frontend/all/?page=1",
    children: [
      {
        label: "React",
        subLabel: "UI를 구축하기 위한 자바스크립트 라이브러리",
        href: "/lectures/frontend/react/?page=1",
      },
      {
        label: "Vue",
        subLabel: "프론트엔드 웹 개발을 위한 JavaScript 프레임워크",
        href: "/lectures/frontend/vue/?page=1",
      },
    ],
  },
  {
    label: "Backend",
    href: "/lectures/backend/all/?page=1",
    children: [
      {
        label: "Spring",
        subLabel: "Java 언어를 기반으로 한 오픈소스 애플리케이션 프레임워크",
        href: "/lectures/backend/spring/?page=1",
      },
      {
        label: "Django",
        subLabel: "Python 언어를 기반으로 한 오픈소스 애플리케이션 프레임워크",
        href: "/lectures/backend/django/?page=1",
      },
    ],
  },
  {
    label: "Mobile",
    href: "/lectures/mobile/all/?page=1",
    children: [
      {
        label: "Swift",
        subLabel: "애플에서 개발한 멀티 패러다임 프로그래밍 언어",
        href: "/lectures/mobile/swift/?page=1",
      },
      {
        label: "Android",
        subLabel: "애플에서 개발한 멀티 패러다임 프로그래밍 언어",
        href: "/lectures/mobile/android/?page=1",
      },
    ],
  },
];

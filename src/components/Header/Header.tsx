import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Input,
  InputGroup,
  Image,
  InputRightElement,
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuGroup,
  MenuList,
  useColorMode,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BsPlayCircle, BsFileEarmarkText } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import { RiHomeHeartLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { isLoggedInVar } from "../../../src/services/apollo";
import { getAccessToken } from "../../../src/services/Token";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import css from "./Header.module.scss";
import { useRecoilState } from "recoil";
import { getMyProfile } from "../../services/api";
import { removeAccessToken } from "../../services/Token";
import ModalRegister from "./ModalRegister/ModalResister";
import useUser from "../../components/Mypage/MyEditMember/UseUser";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { avatarState, headerSizeState } from "../../atoms";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiHtml5, SiCss3, SiSpring } from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { GrSwift } from "react-icons/gr";
import { AiOutlineAndroid } from "react-icons/ai";
import { RiFolderUploadLine } from "react-icons/ri";
import { UserData } from "../../../typings/LectureData";

export default function WithSubnavigation() {
  const [_img, setImg] = useState<string>("");
  const [_imgUrl, setImgUrl] = useState<string | null>(null);
  const avatar = useRecoilValue(avatarState);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const { user, isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();
  const { onOpen: menuOpen, onClose: menuClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [context, setContext] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenToggle, setIsOpenToggle] = useState(false);
  const [headerSize, setHeaderSize] = useRecoilState(headerSizeState);
  const dividerColor = useColorModeValue("gray.300", "gray.700");
  const [onModalOpenState, setOnModalOpenState] = useState(false);
  console.log(user);

  const { data } = useQuery<UserData>(["myprofile"], getMyProfile, {
    retry: false,
  });

  useEffect(() => {
    const headerEl = headerRef.current;
    if (headerEl) {
      setHeaderSize({
        height: headerEl.offsetHeight,
        width: headerEl.offsetWidth,
      });
    }
  }, [headerRef]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyProfile();
      if (data && data.profileImg) {
        setImgUrl(data.profileImg);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setIsOpenToggle(true);
  };

  const handleMouseLeave = () => {
    setIsOpenToggle(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    menuClose();
  };
  const onCloseModal = () => {
    setOnModalOpenState(false);
  };
  const onOpenModal = () => {
    setOnModalOpenState(true);
  };
  // 검색 기능
  const gotoLectures = () => {
    if (context === "") {
      navigate("/lectures/all/all?page=1");
    } else if (context === "열려라 참깨") {
      window.open("https://cmgg.store/admin/user/1", "_blank");
      window.location.reload();

      // navigate("/");
    } else {
      let url = "/lectures/all/all?page=1&search=" + context;
      navigate(url);
      window.location.reload();
    }
  };
  const handleLogout = () => {
    removeAccessToken();
  };
  const handleButtonClick = () => {
    window.location.href = "/mypage";
  };
  const token = getAccessToken();
  function handleCallback() {
    console.log("Callback called");
  }

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1000",
        width: "100%",
        // margin: "0 auto",
      }}
      ref={headerRef}
    >
      <div className={css.headerContainer}>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          mx={"auto"}
          maxW={"1400px"}
          px={{ base: 4 }}
          justify="space-between"
          alignItems={"end"}
        >
          <Box
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <Link
              href="/"
              width="120px"
              minW="120px"
              h="60px"
              pl="15px"
              mr="30px"
            >
              <Image
                src={useColorModeValue(
                  "/images/CGLOGO.png",
                  "/images/WhiteLOGO2.png"
                )}
              />
            </Link>
          </Box>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            w="60vw"
            mt={2}
            alignItems={"center"}
          >
            <Link href="/" width="230px" minW="230px" pl="15px" mr="30px">
              <Image
                src={useColorModeValue(
                  "/images/LOGO2.png",
                  "/images/LOGOw.png"
                )}
              />
            </Link>
            <InputGroup w="40vw" maxW="350px">
              <Input
                w="100%"
                placeholder="보고싶은 강의를 검색하세용"
                fontSize="13px"
                type="text"
                className="input"
                border="none"
                backgroundColor={
                  colorMode === "light"
                    ? "rgb(247 247 250)"
                    : "rgb(247 247 250)"
                }
                color={
                  colorMode === "light" ? "blackAlpha.800" : "blackAlpha.800"
                }
                _placeholder={
                  colorMode === "light"
                    ? {
                        color: "rgb(155, 155, 155)",
                      }
                    : {
                        color: "rgb(155, 155, 155)",
                      }
                }
                _focus={{ outline: "none" }}
                borderRadius="2xl"
                onChange={(e) => {
                  setContext(e.target.value);
                }}
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                  if (event.keyCode === 13) {
                    gotoLectures();
                  }
                }}
              />

              <InputRightElement
                height="100%"
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                <Button
                  borderRadius="50%"
                  type="button"
                  className="Button"
                  border="none"
                  backgroundColor="#003c93;"
                  size="sm"
                  width="30px"
                  onClick={() => {
                    gotoLectures();
                  }}
                >
                  <span style={{ display: "inline-block", fontSize: "16px" }}>
                    <AiOutlineSearch color="white" />
                  </span>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>

          {token ? (
            <Box display="flex">
              <IconButton
                mr="15px"
                icon={
                  colorMode === "light" ? (
                    <div>🌙&nbsp; Dark</div>
                  ) : (
                    <div>🌞&nbsp; Light</div>
                  )
                }
                px="3"
                fontSize="13px"
                aria-label="Toggle color mode"
                onClick={toggleColorMode}
                marginLeft="1rem"
                _hover={
                  colorMode === "light"
                    ? { backgroundColor: "#333", color: "#eee" }
                    : { backgroundColor: "#eee", color: "#333" }
                }
              />
              <BsPlay
                style={{
                  fontSize: 33,
                  marginRight: 14,
                }}
              />
              <a href="/mypage/cart">
                <IoCartOutline
                  style={{
                    fontSize: 30,
                    marginRight: 20,
                  }}
                />
              </a>
              {/* <BsPersonVideo3 style={{ fontSize: 30, color: "#003c93" }} /> */}
              <Menu
                isOpen={isOpenToggle}
                onClose={() => setIsOpenToggle(false)}
                placement="bottom-start"
              >
                <MenuButton
                  as="span"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleButtonClick()}
                  style={{ cursor: "pointer" }}
                >
                  <a href="/mypage">
                    <Avatar
                      // icon={<RiHomeHeartLine size={90} />}
                      style={{ width: "32px", height: "32px" }}
                      src={avatar || _imgUrl || ""}
                    />
                  </a>
                </MenuButton>
                <MenuList
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  css={{
                    position: "absolute",
                    top: "calc(100% + -8px)",
                    right: "-70px",
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
                    border: `1px solid ${dividerColor}`,
                    borderRadius: "14px",
                    overflow: "hidden",
                    "::before": {
                      content: '""',
                      position: "absolute",
                      top: "-10px",
                      left: "20px",
                      width: "20px",
                      height: "20px",
                      transform: "skew(-45deg)",
                      background: "white",
                      border: `1px solid ${dividerColor}`,
                      borderBottom: "none",
                      borderTop: "none",
                    },
                  }}
                >
                  <div style={{ border: `1px solid ${dividerColor}` }}>
                    <MenuGroup title="대시보드" fontSize="15px">
                      <Link
                        href="/mypage"
                        style={{ textDecoration: "none", border: "none" }}
                      >
                        <MenuItem
                          fontSize="15px"
                          fontWeight="500"
                          padding="10px 10px"
                        >
                          <BsFileEarmarkText style={{ marginRight: "10px" }} />
                          학습 관리
                        </MenuItem>
                      </Link>
                    </MenuGroup>
                    <MenuDivider color={dividerColor} />
                    <MenuGroup title="수강강의" fontSize="15px">
                      <Link
                        href="/mypage/lecture"
                        style={{ textDecoration: "none", border: "none" }}
                      >
                        <MenuItem
                          fontSize="15px"
                          fontWeight="500"
                          padding="10px 10px"
                        >
                          <BsPlayCircle style={{ marginRight: "10px" }} />
                          수강중인 강의
                        </MenuItem>
                      </Link>
                    </MenuGroup>
                    <MenuDivider color={dividerColor} />
                    <MenuGroup title="수강신청 관리" fontSize="15px">
                      <Link
                        href="/mypage/payment"
                        style={{ textDecoration: "none", border: "none" }}
                      >
                        <MenuItem
                          fontSize="15px"
                          fontWeight="500"
                          padding="10px 10px"
                        >
                          <MdPayment style={{ marginRight: "10px" }} />
                          결제 내역
                        </MenuItem>
                      </Link>
                      <Link
                        href="/mypage/cart"
                        style={{ textDecoration: "none", border: "none" }}
                      >
                        <MenuItem
                          fontSize="15px"
                          fontWeight="500"
                          padding="10px 10px"
                        >
                          <AiOutlineShoppingCart
                            style={{ marginRight: "10px" }}
                          />
                          수강바구니
                        </MenuItem>
                      </Link>
                    </MenuGroup>
                    <MenuDivider color={dividerColor} />
                    {!userLoading && user?.isInstructor ? (
                      <>
                        <MenuGroup title="강사" fontSize="15px">
                          <Link
                            href="/instructor"
                            style={{ textDecoration: "none", border: "none" }}
                          >
                            <MenuItem
                              fontSize="15px"
                              fontWeight="500"
                              padding="10px 10px"
                            >
                              <BsFileEarmarkText
                                style={{ marginRight: "10px" }}
                              />
                              대시 보드
                            </MenuItem>
                          </Link>
                          <Link
                            href="/instructor/lecture"
                            style={{ textDecoration: "none", border: "none" }}
                          >
                            <MenuItem
                              fontSize="15px"
                              fontWeight="500"
                              padding="10px 10px"
                            >
                              <RiFolderUploadLine
                                style={{ marginRight: "10px" }}
                              />
                              업로드한 강의
                            </MenuItem>
                          </Link>
                          <Link
                            href="/instructor/lecture/register"
                            style={{ textDecoration: "none", border: "none" }}
                          >
                            <MenuItem
                              fontSize="15px"
                              fontWeight="500"
                              padding="10px 10px"
                            >
                              <RiFolderUploadLine
                                style={{ marginRight: "10px" }}
                              />
                              강의 업로드
                            </MenuItem>
                          </Link>
                        </MenuGroup>
                        <MenuDivider color={dividerColor} />
                      </>
                    ) : null}

                    <MenuGroup title="회원정보" fontSize="15px">
                      <Link
                        href="/mypage/editMember"
                        style={{ textDecoration: "none", border: "none" }}
                      >
                        <MenuItem
                          fontSize="15px"
                          fontWeight="500"
                          padding="10px 10px"
                        >
                          <FiSettings style={{ marginRight: "10px" }} />
                          정보수정
                        </MenuItem>
                      </Link>
                      <MenuItem
                        fontSize="15px"
                        fontWeight="500"
                        padding="10px 10px"
                        onClick={() => {
                          removeAccessToken();
                        }}
                      >
                        <FiLogOut
                          size={16}
                          style={{ marginRight: "10px" }}
                          onClick={handleLogout}
                        />
                        로그아웃
                      </MenuItem>
                      {/* </Link> */}
                    </MenuGroup>
                  </div>
                </MenuList>
              </Menu>
            </Box>
          ) : (
            <>
              <Box>
                <IconButton
                  icon={
                    colorMode === "light" ? (
                      <div>🌙&nbsp; Dark</div>
                    ) : (
                      <div>🌞&nbsp; Light</div>
                    )
                  }
                  mr="15px"
                  px="3"
                  fontSize="13px"
                  aria-label="Toggle color mode"
                  onClick={toggleColorMode}
                  marginLeft="1rem"
                  _hover={
                    colorMode === "light"
                      ? { backgroundColor: "#333", color: "#eee" }
                      : { backgroundColor: "#eee", color: "#333" }
                  }
                />
                <Button
                  mr="15px"
                  as="a"
                  fontSize="sm"
                  fontWeight={600}
                  variant="link"
                  href="/login"
                  _hover={{ textDecoration: "none", color: "#003c93" }}
                >
                  Login
                </Button>
                <Button
                  color="#003c93"
                  as="a"
                  fontSize="sm"
                  fontWeight={600}
                  variant="link"
                  href="/signup"
                  _hover={{ textDecoration: "none", fontWeight: "700" }}
                >
                  Sign Up
                </Button>
              </Box>
            </>
          )}
        </Flex>
      </div>
      <Box h="20">
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          mx={"auto"}
          maxW={"1400px"}
          minH={"50px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          // align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
            zIndex={1000}
          >
            <Menu
              placement="bottom-end"
              closeOnSelect={false}
              isOpen={isMenuOpen}
              onClose={handleMenuClose}
              // initialFocusRef={menuRef ?? null}
            >
              <MenuButton
                as={IconButton}
                onClick={handleMenuClick}
                icon={<HamburgerIcon w={5} h={5} />}
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
                // ref={menuRef ?? null}
              />
              <MenuNav />
            </Menu>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex
              display={{ base: "none", md: "flex" }}
              ml={10}
              pt="6px"
              justifyContent="space-between"
            >
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {token ? (
              <Button
                display="flex"
                alignItems="center"
                fontSize="15px"
                fontWeight="500"
                // padding="10px 10px 0px 0px"
                mr="16px"
                size={"md"}
                onClick={onOpenModal}
                backgroundColor="transparent"
                _hover={{ backgroundColor: "transparent" }}
                width="100px"
                leftIcon={<AiOutlineCheckCircle />}
              >
                강사 신청
              </Button>
            ) : (
              ""
            )}
            {onModalOpenState ? (
              <ModalRegister
                openState={onModalOpenState}
                onClose={onCloseModal}
              />
            ) : (
              ""
            )}
          </Stack>
        </Flex>
      </Box>
    </div>
  );
}

const MenuNav = () => {
  const navigate = useNavigate();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverBgColor = useColorModeValue("gray.100", "whiteAlpha.200");
  const icons = [
    SiHtml5,
    SiCss3,
    FaReact,
    FaVuejs,
    SiSpring,
    DiDjango,
    GrSwift,
    AiOutlineAndroid,
  ];
  let idx = -1;
  return (
    <MenuList
      width="150px"
      boxShadow={"md"}
      pt="1"
      pb="3"
      border={"1px solid rgb(220,220,220)"}
    >
      {NAV_ITEMS.map((navItem) => (
        <MenuOptionGroup
          key={navItem.label}
          fontSize="md"
          fontWeight={500}
          color={linkColor}
          defaultValue="asc"
          title={navItem.label}
          type="radio"
          cursor="pointer"
          onClick={() => navigate(navItem.href ?? "#")}
        >
          {navItem.children && (
            <Stack>
              {navItem.children.map((child: any) => {
                idx += 1;
                return (
                  <MenuItemOption
                    key={child.label}
                    rounded={"xl"}
                    _hover={{
                      bgColor: linkHoverBgColor,
                    }}
                    onClick={() => navigate(child.href ?? "#")}
                    pl="0"
                  >
                    <Flex pl="0" ml="0" w="70%" alignItems={"center"}>
                      <Box
                        as={icons[idx]}
                        size="30px"
                        transition="transform 0.3s ease-in-out"
                        mx="auto"
                        ml="0"
                      />
                      <Text>{child.label}</Text>
                    </Flex>
                  </MenuItemOption>
                );
              })}
            </Stack>
          )}
          {navItem.label === "Mobile" ? null : (
            <MenuDivider borderColor={"rgb(190,190,190)"} />
          )}
        </MenuOptionGroup>
      ))}
    </MenuList>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={8}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={4}
                href={navItem.href ?? "#"}
                fontSize="md"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: "#003c93",
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
      _hover={{
        bg: useColorModeValue("gray.50", "gray.900"),
        color: "rgb(0 60 147)",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#003c93" }}
            fontWeight={500}
            _hover={{
              fontWeight: "600",
            }}
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
          <Icon color={"#769dd6"} w={5} h={5} as={ChevronRightIcon} />
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
    label: "Whole Lectures",
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
        label: "Kotlin",
        subLabel: "JetBrains사에서 개발한 안드로이드 앱 개발 언어",
        href: "/lectures/mobile/android/?page=1",
      },
    ],
  },
];

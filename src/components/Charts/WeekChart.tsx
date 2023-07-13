import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useQuery } from "@tanstack/react-query";
import { useColorMode } from "@chakra-ui/react";
import { startOfWeek, getWeeksInMonth, getWeek, startOfMonth } from "date-fns";

import {
  FaCheckCircle,
  FaSquare,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  Text,
  Stack,
  HStack,
  Box,
  Flex,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { Layer } from "@nivo/line";
import { Scale } from "@nivo/scales";
import { ScaleLinear } from "d3-scale";
interface Props {}

interface DayChartData {
  id: string;

  data: {
    x: string;
    y: number;
  }[];
}

interface CustomLayerProps {
  xScale: ScaleLinear<number, number>;
}
type WeekData = {
  [week: number]: DayChartData[];
};

type MonthData = {
  [month: number]: WeekData;
};

type Data = {
  [year: number]: MonthData;
};

export const data: Data = {
  2023: {
    5: {
      1: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 1 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 4 },
            { x: "화", y: 5 },
            { x: "수", y: 3 },
            { x: "목", y: 5 },
            { x: "금", y: 3 },
            { x: "토", y: 4 },
          ],
        },
      ],

      2: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 2 },
            { x: "화", y: 1 },
            { x: "수", y: 5 },
            { x: "목", y: 3 },
            { x: "금", y: 5 },
            { x: "토", y: 6 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 3 },
            { x: "화", y: 4 },
            { x: "수", y: 5 },
            { x: "목", y: 4 },
            { x: "금", y: 4 },
            { x: "토", y: 5 },
          ],
        },
      ],
      3: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 1 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 2 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 4 },
            { x: "토", y: 4 },
          ],
        },
      ],
      4: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 2 },
            { x: "월", y: 2 },
            { x: "화", y: 0 },
            { x: "수", y: 7 },
            { x: "목", y: 1 },
            { x: "금", y: 7 },
            { x: "토", y: 3 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 1 },
            { x: "화", y: 6 },
            { x: "수", y: 3 },
            { x: "목", y: 4 },
            { x: "금", y: 3 },
            { x: "토", y: 1 },
          ],
        },
      ],
      5: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 1 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 4 },
            { x: "화", y: 5 },
            { x: "수", y: 3 },
            { x: "목", y: 5 },
            { x: "금", y: 3 },
            { x: "토", y: 4 },
          ],
        },
      ],
    },
    6: {
      1: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 1 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 2 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 4 },
            { x: "토", y: 4 },
          ],
        },
      ],

      2: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 2 },
            { x: "화", y: 1 },
            { x: "수", y: 5 },
            { x: "목", y: 3 },
            { x: "금", y: 5 },
            { x: "토", y: 6 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 3 },
            { x: "화", y: 4 },
            { x: "수", y: 5 },
            { x: "목", y: 4 },
            { x: "금", y: 4 },
            { x: "토", y: 5 },
          ],
        },
      ],
      3: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 1 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 2 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 4 },
            { x: "토", y: 4 },
          ],
        },
      ],
      4: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 1 },
            { x: "화", y: 2 },
            { x: "수", y: 5 },
            { x: "목", y: 6 },
            { x: "금", y: 7 },
            { x: "토", y: 4 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 2 },
            { x: "화", y: 4 },
            { x: "수", y: 7 },
            { x: "목", y: 6 },
            { x: "금", y: 5 },
            { x: "토", y: 4 },
          ],
        },
      ],
      5: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 2 },
            { x: "화", y: 1 },
            { x: "수", y: 5 },
            { x: "목", y: 4 },
            { x: "금", y: 2 },
            { x: "토", y: 3 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 3 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 5 },
            { x: "토", y: 4 },
          ],
        },
      ],

      // ... 다른 주 데이터를 추가 ...
    },
    7: {
      1: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 3 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 2 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 2 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 3 },
            { x: "토", y: 4 },
          ],
        },
      ],

      2: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 2 },
            { x: "화", y: 1 },
            { x: "수", y: 5 },
            { x: "목", y: 3 },
            { x: "금", y: 5 },
            { x: "토", y: 6 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 3 },
            { x: "화", y: 4 },
            { x: "수", y: 5 },
            { x: "목", y: 2 },
            { x: "금", y: 4 },
            { x: "토", y: 5 },
          ],
        },
      ],
      3: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 3 },
            { x: "월", y: 1 },
            { x: "화", y: 3 },
            { x: "수", y: 6 },
            { x: "목", y: 2 },
            { x: "금", y: 6 },
            { x: "토", y: 3 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 6 },
            { x: "월", y: 2 },
            { x: "화", y: 5 },
            { x: "수", y: 4 },
            { x: "목", y: 5 },
            { x: "금", y: 4 },
            { x: "토", y: 5 },
          ],
        },
      ],
      4: [
        {
          id: "평균유저",
          data: [
            { x: "일", y: 4 },
            { x: "월", y: 1 },
            { x: "화", y: 2 },
            { x: "수", y: 5 },
            { x: "목", y: 8 },
            { x: "금", y: 7 },
            { x: "토", y: 5 },
          ],
        },
        {
          id: "IT'S ME",
          data: [
            { x: "일", y: 7 },
            { x: "월", y: 2 },
            { x: "화", y: 4 },
            { x: "수", y: 9 },
            { x: "목", y: 6 },
            { x: "금", y: 5 },
            { x: "토", y: 4 },
          ],
        },
      ],

      // ... 다른 주 데이터를 추가 ...
    },
    // ... 다른 월 데이터를 추가 ...
  },
  2024: {
    1: {
      1: [
        // ... 2022년 1월 1주차 데이터 ...
      ],
      2: [
        // ... 2022년 1월 2주차 데이터 ...
      ],
      // ... 다른 주 데이터를 추가 ...
    },
    2: {
      1: [
        // ... 2022년 2월 1주차 데이터 ...
      ],
      2: [
        // ... 2022년 2월 2주차 데이터 ...
      ],
      // ... 다른 주 데이터를 추가 ...
    },
    // ... 다른 월 데이터를 추가 ...
  },
  // ... 다른 연도의 데이터를 추가 ...
};

const todayDayOfWeek = new Date().toLocaleString("ko-KR", { weekday: "short" });

const DayChart: React.FC<Props> = () => {
  // const { isLoading, data } = useQuery(["lectureInfo"], () => getAllLectures());

  const goToPreviousMonth = () => {
    if (currentMonth === 1) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(12);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const goToPreviousWeek = () => {
    if (currentWeek === 1) {
      goToPreviousMonth();
      setCurrentWeek(getWeeksInMonth(currentMonth - 1, currentYear));
    } else {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const goToNextWeek = () => {
    const weeksInCurrentMonth = getWeeksInMonth(currentMonth, currentYear);
    if (currentWeek === weeksInCurrentMonth) {
      setCurrentWeek(1); // 다음 달의 첫 주로 이동
      goToNextMonth();
    } else {
      setCurrentWeek(currentWeek + 1);
    }
  };
  const getWeeksInMonth = (month: number, year: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    const used = firstDayOfMonth.getDay() + lastDayOfMonth.getDate();
    return Math.ceil(used / 7);
  };
  const getCurrentMonthAndWeek = (date?: Date) => {
    const now = date ? new Date(date.getTime()) : new Date();

    // 주가 월의 몇 번째 주인지 계산
    const startOfTheMonth = startOfMonth(now);
    const weekOfMonth = getWeek(now) - getWeek(startOfTheMonth) + 1;

    return {
      month: now.getMonth() + 1,
      week: weekOfMonth,
    };
  };

  // const { month, week } = getCurrentMonthAndWeek(new Date());

  const today = () => {
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    const dayIndex = dayNames.indexOf(todayDayOfWeek);
    const dataPoint = currentData[0]?.data[dayIndex];
    if (dataPoint) {
      return dataPoint.x;
    }
    return null;
  };
  // const getSundayOfThisWeek = () => {
  //   const now = new Date();
  //   const dayOfWeek = now.getDay();
  //   const sunday = new Date(now);
  //   sunday.setDate(now.getDate() - dayOfWeek);
  //   return sunday;
  // };

  // const targetDate = getSundayOfThisWeek(); // 이번 주 일요일을 대상으로 설정

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  useEffect(() => {
    // // 원하는 날짜를 기준으로 설정 (예: 2023년 5월 7일)
    // const targetDate = new Date(2023, 4, 7); // 주의: 월은 0부터 시작하기 때문에 4로 설정합니다.
    const { month, week } = getCurrentMonthAndWeek(new Date());
    setCurrentMonth(month);
    setCurrentWeek(week);
  }, []);

  const CustomLayer: Layer = (props: CustomLayerProps & any) => {
    const { xScale } = props;
    const { colorMode } = useColorMode();
    const todayX = today();
    if (todayX === null) {
      return null;
    }
    const x = xScale(todayX);
    return (
      <rect
        x={x - 15}
        y={0}
        width={30}
        height="100%"
        fill={colorMode === "light" ? "#eee" : "#333"}
        opacity={0.1}
      />
    );
  };

  const { colorMode } = useColorMode();
  const currentData = data[currentYear]?.[currentMonth]?.[currentWeek] ?? [];
  return (
    <div>
      <Grid
        templateAreas={`"header header"
                  "weekchart weekchart"`}
        gridTemplateRows={"1fr 220px "}
        gridTemplateColumns={"1fr 1fr"}
      >
        <GridItem
          area={"header"}
          fontSize="18px"
          color="#3d3d3d"
          fontWeight="600"
          pb="30px"
          style={{ color: colorMode === "light" ? "#3d3d3d" : " white" }}
        >
          <HStack justifyContent="space-between">
            <Box>주간 학습</Box>
            <HStack>
              <Button
                variant="ghost"
                borderRadius="xl"
                px="0"
                color="#858585"
                onClick={goToPreviousWeek}
              >
                <FaChevronLeft />
              </Button>
              <Text>
                {currentYear}년 {currentMonth}월 {currentWeek}주차
              </Text>
              <Button
                variant="ghost"
                borderRadius="xl"
                px="0"
                color="#858585"
                onClick={goToNextWeek}
              >
                <FaChevronRight />
              </Button>
            </HStack>
          </HStack>
        </GridItem>

        <GridItem area={"weekchart"}>
          <ResponsiveLine
            data={currentData}
            layers={[
              "grid",
              "markers",
              "axes",
              CustomLayer,
              "areas",
              "crosshair",
              "lines",
              "points",
              "slices",
              "mesh",
              "legends",
            ]}
            margin={{ top: 20, right: 10, bottom: 30, left: 25 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: 10,
              stacked: false,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legendOffset: 36,
              legendPosition: "middle",
              tickValues: currentData[0]?.data.map((d) => d.x),
              format: (value: any) => {
                return value;
              },
              renderTick: (tick: any) => {
                const tickValue = tick.value;
                const isToday = tickValue === todayDayOfWeek;
                return (
                  <text
                    transform={`translate(${tick.x},${tick.y + 20})`}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontSize: 12,
                      fontWeight: isToday ? "900" : "normal",
                      fill: isToday
                        ? "#003c93"
                        : colorMode === "light"
                        ? "#3d3d3d"
                        : "white",
                    }}
                  >
                    {tickValue}
                  </text>
                );
              },
            }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: colorMode === "light" ? "#3d3d3d" : "white",
                  },
                },
              },
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              // legend: "강의수",
              legendOffset: -40,
              legendPosition: "middle",
            }}
            tooltip={({ point }) => (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "8px",
                  fontSize: "12px",
                  borderRadius: "4px",
                  boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)",
                  lineHeight: "1.6",
                  fontWeight: "600",
                  color: colorMode === "light" ? "black" : "black",
                }}
              >
                <div>{point.id.split(/[0-9.]+/).join("")}</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div> 완료강의 :</div>
                  <div style={{ marginLeft: "3px" }}>
                    {point.data.y.toString()}개
                  </div>
                </div>
              </div>
            )}
            colors={{ scheme: "paired" }}
            lineWidth={3}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor", modifiers: [] }}
            pointLabelYOffset={-12}
            areaBaselineValue={30}
            areaOpacity={0.1}
            useMesh={true}
            legends={[]}
          />
        </GridItem>
      </Grid>
    </div>
  );
};
export default DayChart;

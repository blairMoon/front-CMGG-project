import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import DashboardCard from "../../../components/Card/DashboardCard";
import IssueList from "./components/IssueList";
import RadarChart from "../../../components/Charts/RadarChart";
import HighchartsNetwork from "../../../components/Charts/NetworkChart";
import StockChart from "../../../components/Charts/StockChart";
import PackedBubbleChart from "../../../components/Charts/BubbleChart";
import DashboardChartCard from "../../../components/Card/DashboardChartCard";

const Dashboard: React.FC = () => {
  const issues = [
    {
      id: 1,
      title: "Issue 1",
      description: "백관열님이 타입스크립트 강의에 댓글을 달았습니다.",
    },
    {
      id: 2,
      title: "Issue 2",
      description: "김남욱님이 Docker 강의에 신규 등록했습니다.",
    },
    {
      id: 3,
      title: "Issue 3",
      description: "김현수님이 DJango 강의에 댓글을 달았습니다..",
    },
    {
      id: 4,
      title: "Issue 4",
      description: "김수람님이 Redux 강의에 신규 등록했습니다.",
    },
  ];

  const radarData = [
    { category: "수입률", 나: 30, 평균: 10 },
    { category: "완강률", 나: 20, 평균: 30 },
    { category: "점유율", 나: 30, 평균: 10 },
    { category: "재수강률", 나: 20, 평균: 30 },
    { category: "신규수강률", 나: 30, 평균: 10 },
  ];

  const radarKeys = ["나", "평균"];
  const radarIndexBy = "category";

  const title = "나의 수강생들이 보는 관련 강사";
  const subtitle =
    "해당 자료를 통해 주제, 강의 품질, 교육 스타일 및 대체 학습 리소스의 가용성과 같은 다양한 요인에 따라 크게 달라질 수 있습니다.";

  const networkData = [
    { from: "나", to: "백관열", value: 300 },
    { from: "나", to: "김수람", value: 450 },
    { from: "나", to: "오수빈", value: 100 },
  ];

  const stockNames = ["MSFT", "AAPL", "GOOG"];

  const bubbleData = [
    {
      name: "Java",
      data: [
        {
          name: "SpringBoot",
          value: 767.1,
        },
        {
          name: "Android",
          value: 74.2,
        },
      ],
    },
    {
      name: "Python",
      data: [
        {
          name: "DJango",
          value: 409.4,
        },
        {
          name: "AI",
          value: 237.1,
        },
      ],
    },
    {
      name: "JavaScript",
      data: [
        {
          name: "React",
          value: 566,
        },
        {
          name: "TypeScript",
          value: 456.3,
        },
        {
          name: "Redux",
          value: 56.3,
        },
        {
          name: "Next.js",
          value: 156.3,
        },
        {
          name: "Vue",
          value: 256.3,
        },
      ],
    },
    {
      name: "Basic",
      data: [
        {
          name: "HTML",
          value: 199,
        },
        {
          name: "CSS",
          value: 195.2,
        },
      ],
    },
    {
      name: "Kotlin",
      data: [
        {
          name: "Android",
          value: 336.5,
        },
        {
          name: "iOS",
          value: 236.5,
        },
      ],
    },
    {
      name: "Swift",
      data: [
        {
          name: "iOS",
          value: 136.5,
        },
      ],
    },
  ];

  return (
    <Box>
      <Navbar />
      <Box padding="2rem">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="2rem">
          <GridItem>
            <DashboardCard
              title="총 수강생"
              value={1023}
              bgColor="rgb(254,215,215)"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="총 수입"
              value={52620000}
              bgColor="rgb(190,227,248)"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="신규 수강생"
              value={250}
              bgColor="rgb(198,246,213)"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="2fr 3fr" gap={6} pl="1" my="3rem">
          <GridItem>
            <IssueList issues={issues} />
          </GridItem>
          <GridItem>
            <RadarChart
              data={radarData}
              keys={radarKeys}
              indexBy={radarIndexBy}
            />
          </GridItem>
        </Grid>
        <StockChart names={stockNames} />
        <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop="5rem">
          <GridItem>
            <DashboardChartCard
              title="연 수입"
              value="123"
              bgColor="rgb(255,255,255)"
              data={[
                [1, 12],
                [2, 5],
                [3, 23],
                [4, 28],
              ]}
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardChartCard
              title="월 수입"
              value="23"
              bgColor="rgb(255,255,255)"
              data={[
                [1, 12],
                [2, 23],
                [3, 21],
                [4, 8],
              ]}
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardChartCard
              title="월 리뷰 개수"
              value="221"
              bgColor="rgb(255,255,255)"
              data={[
                [1, 12],
                [2, 23],
                [3, 3],
                [4, 8],
              ]}
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardChartCard
              title="월 평점 평균"
              value="401"
              bgColor="rgb(255,255,255)"
              data={[
                [1, 12],
                [2, 23],
                [3, 215],
                [4, 128],
              ]}
              boxShadow="md"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" mt="3rem" mb="5rem" gap={6}>
          <GridItem>
            <DashboardChartCard
              title="내 강의의 유령회원"
              value="4011"
              bgColor="rgb(160,160,160)"
              data={[
                [1, 12],
                [2, 23],
                [3, 215],
                [4, 128],
              ]}
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardChartCard
              title="월 신규 수강생"
              value="2401"
              bgColor="rgb(160,160,160)"
              data={[
                [1, 12],
                [2, 323],
                [3, 215],
                [4, 428],
              ]}
              boxShadow="md"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="2rem">
          <GridItem>
            <HighchartsNetwork
              title={title}
              subtitle={subtitle}
              data={networkData}
              total={1023}
            />
          </GridItem>
          <GridItem>
            <PackedBubbleChart id="container" data={bubbleData} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

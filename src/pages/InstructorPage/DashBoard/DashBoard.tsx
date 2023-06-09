import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import DashboardCard from "../../../components/Card/DashboardCard";
import IssueList from "./components/IssueList";
import RadarChart from "../../../components/Charts/RadarChart";
import HighchartsNetwork from "../../../components/Charts/NetworkChart";
import StockChart from "../../../components/Charts/StockChart";
import PackedBubbleChart from "../../../components/Charts/BubbleChart";
import DashboardChartCard from "../../../components/Card/DashboardChartCard";
import { stockMenuState } from "../../../atoms";
import Seo from "../../../components/SEO/Seo";
import { getAllLectures } from "../../../services/api";

const Dashboard: React.FC = () => {
  const stockMenuItem = useRecoilValue(stockMenuState);

  const { isLoading, data, refetch } = useQuery(["dashboard", getAllLectures]);

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

  const title = "나의 수강생들이 보는 관련 강사 일치율";
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
      <Seo title="대시보드" />
      <Navbar refetch={refetch} />
      <Box padding="2rem">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="2rem">
          <GridItem>
            <div data-testid={"dashboard-card"}>
              <DashboardCard
                value={1023}
                title="총 수강생"
                bgColor="rgb(118,157,214,0.5)"
                boxShadow="md"
              />
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={"dashboard-card"}>
              <DashboardCard
                value={52620000}
                title="총 수입"
                bgColor="rgb(118,157,214,0.5)"
                boxShadow="md"
              />
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={"dashboard-card"}>
              <DashboardCard
                value={250}
                title="신규 수강생"
                bgColor="rgb(118,157,214,0.5)"
                boxShadow="md"
              />
            </div>
          </GridItem>
        </Grid>
        <Grid templateColumns="2fr 3fr" gap={6} pl="1" my="3rem">
          <GridItem>
            <div data-testid={"issues"}>
              <IssueList issues={issues} />
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={"radar-chart"}>
              <RadarChart
                data={radarData}
                keys={radarKeys}
                indexBy={radarIndexBy}
              />
            </div>
          </GridItem>
        </Grid>
        <StockChart names={stockNames} />
        <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop="5rem">
          <GridItem>
            <div data-testid={`dashboard-chart-card-1`}>
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
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={`dashboard-chart-card-2`}>
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
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={`dashboard-chart-card-3`}>
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
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={`dashboard-chart-card-4`}>
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
            </div>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" mt="3rem" mb="5rem" gap={6}>
          <GridItem>
            <div data-testid={"dashboard-chart-bigcard"}>
              <DashboardChartCard
                title="내 강의의 유령회원"
                value="4011"
                bgColor="rgb(200,200,200, 0.5)"
                data={[
                  [1, 12],
                  [2, 23],
                  [3, 215],
                  [4, 128],
                ]}
                boxShadow="lg"
              />
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={"dashboard-chart-bigcard"}>
              <DashboardChartCard
                title="월 신규 수강생"
                value="2401"
                bgColor="rgb(200,200,200, 0.5)"
                data={[
                  [1, 12],
                  [2, 323],
                  [3, 215],
                  [4, 428],
                ]}
                boxShadow="lg"
              />
            </div>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="2rem">
          <GridItem>
            <div data-testid={"network-chart"}>
              <HighchartsNetwork
                title={title}
                subtitle={subtitle}
                data={networkData}
                total={1023}
              />
            </div>
          </GridItem>
          <GridItem>
            <div data-testid={"bubble-chart"}>
              <PackedBubbleChart id="container" data={bubbleData} />
            </div>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

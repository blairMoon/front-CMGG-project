// src/pages/Dashboard.tsx
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import DashboardCard from "../../../components/Card/DashboardCard";
import IssueList from "./components/IssueList";

const Dashboard: React.FC = () => {
  const issues = [
    { id: 1, title: "Issue 1", description: "This is a sample issue." },
    { id: 2, title: "Issue 2", description: "This is another sample issue." },
  ];

  const data = [
    { name: "Mon", value: 20 },
    { name: "Tue", value: 25 },
    { name: "Wed", value: 30 },
    { name: "Thu", value: 22 },
    { name: "Fri", value: 27 },
  ];

  return (
    <Box>
      <Navbar />
      <Box padding="2rem">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <DashboardCard
              title="Total Errors"
              value="1,023"
              bgColor="rgb(254,215,215)"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Users"
              value="250"
              bgColor="rgb(198,246,213)"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="Resolved Issues"
              value="560"
              bgColor="rgb(190,227,248)"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop="3rem">
          <GridItem>
            <DashboardCard
              title="Total Errors"
              value="1,023"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Users"
              value="250"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Issues"
              value="160"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="Resolved Issues"
              value="560"
              bgColor="#fff"
              boxShadow="md"
            />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="3rem">
          <GridItem>
            <DashboardCard
              title="Total Errors"
              value="1,023"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Users"
              value="250"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="3rem">
          <GridItem>
            <DashboardCard
              title="Total Errors"
              value="1,023"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Users"
              value="250"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="Resolved Issues"
              value="560"
              bgColor="#fff"
              boxShadow="md"
            />
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="3rem">
          <GridItem>
            <DashboardCard
              title="Total Errors"
              value="1,023"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
          <GridItem>
            <DashboardCard
              title="New Users"
              value="250"
              bgColor="rgb(255,255,255)"
              boxShadow="md"
            />
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop="2rem">
          <GridItem>
            <IssueList issues={issues} />
          </GridItem>
          <GridItem>{/* <Charts data={data} /> */}차트</GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

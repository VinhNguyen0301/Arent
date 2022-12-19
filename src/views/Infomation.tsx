import React from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import Personal from "./Personal";
import Graph2 from "../components/Diagram/Graph2";
import Divider from "@mui/material/Divider";
import Diary from "../components/Diary/Diary";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Infomation = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Box
          sx={{ flexDirection: "row", display: "flex", marginLeft: "160px" }}
          mt="56px"
        >
          <Personal />
          <Personal />
          <Personal />
        </Box>
      </Grid>
      <Grid xs={12} marginTop="56px">
        <Graph2 />
      </Grid>
      <Grid xs={12} marginTop="56px">
        <Box
          width="960px"
          height="264px"
          sx={{ backgroundColor: "#414141", marginLeft: "207px" }}
        >
          <Typography color="white">
            MY EXERCISE
            <span style={{ marginLeft: "10px" }}>2021.05.21</span>
          </Typography>
          <Grid xs={12}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Grid xs={6}>
                <table>
                  <tr>
                    <td>
                      家事全般（立位・軽い）<span>26kcal</span>
                    </td>
                    <td>10 min</td>
                  </tr>
                  <tr>
                    <td>家事全般（立位・軽い）</td>
                    <td>10 min</td>
                  </tr>
                  <tr>
                    <td>
                      家事全般（立位・軽い）<span>26kcal</span>
                    </td>
                    <td>10 min</td>
                  </tr>
                  <tr>
                    <td>家事全般（立位・軽い）</td>
                    <td>10 min</td>
                  </tr>
                </table>
              </Grid>
              <Grid xs={6}>
                <table>
                  <tr>
                    <td>
                      家事全般（立位・軽い）<span>26kcal</span>
                    </td>
                    <td>10 min</td>
                  </tr>
                  <Divider variant="fullWidth" />
                  <tr>
                    <td>家事全般（立位・軽い）</td>
                    <td>10 min</td>
                  </tr>
                  <tr>
                    <td>
                      家事全般（立位・軽い）<span>26kcal</span>
                    </td>
                    <td>10 min</td>
                  </tr>
                  <tr>
                    <td>家事全般（立位・軽い）</td>
                    <td>10 min</td>
                  </tr>
                </table>
              </Grid>
            </Stack>
          </Grid>
        </Box>
      </Grid>
      <Grid xs={12} marginTop="56px" width="960px" sx={{ marginLeft: "207px" }}>
        <Box>
          <div>My Diary</div>
          <Diary />
          <Diary />
        </Box>
      </Grid>

      <Grid xs={12} marginBottom="114px">
        <Button
          style={{
            background:
              "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
            width: "296px",
            height: "56px",
            marginTop: "28px",
            marginLeft: "27%",
          }}
        >
          自分の日記をもっと見る
        </Button>
      </Grid>
    </Grid>
  );
};

export default Infomation;

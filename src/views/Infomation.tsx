import React from "react";
import { Grid, Box, Stack, Typography, Button, styled } from "@mui/material";
import Personal from "./Personal";
import Graph2 from "../components/Diagram/Graph2";
import Divider from "@mui/material/Divider";
import Diary from "../components/Diary/Diary";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const MenuDiaryStyled = styled("div")(({ theme }) => ({
  flexDirection: "row",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",

  [theme.breakpoints.between("md", "lg")]: {
    width: "960px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "1000px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "390px",
    marginLeft: "0px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const Infomation = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Box
          sx={{ flexDirection: "row", display: "flex", marginLeft: "160px" }}
          mt="56px"
        >
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
          <Grid ml="24px">
            <Typography color="white" pt="16px">
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
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div style={{ color: "white" }}>
                        <td>家事全般（立位・軽い）</td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td
                        style={{
                          color: "#FFCC21",
                          paddingLeft: "122px",
                          marginTop: "4px",
                        }}
                      >
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />
                  </table>
                </Grid>
                <Grid xs={6}>
                  <table>
                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />

                    <tr>
                      <div>
                        <td style={{ color: "white" }}>
                          家事全般（立位・軽い）
                        </td>
                        <div style={{ color: "#FFCC21" }}>26kcal</div>
                      </div>
                      <td style={{ color: "#FFCC21", paddingLeft: "122px" }}>
                        10 min
                      </td>
                    </tr>
                    <Divider variant="fullWidth" />
                  </table>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid xs={12} marginTop="56px" width="960px" sx={{ marginLeft: "207px" }}>
        <Typography variant="h1">MY DIARY</Typography>
        <MenuDiaryStyled>
          <Diary />
        </MenuDiaryStyled>
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

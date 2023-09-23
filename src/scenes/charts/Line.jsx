import { Box } from "@mui/material";
import Header from '../dashboard/Header';
import LineChart from "../../components/LineChart";

const Line = () => {

  return (
    <Box m="20px">
        <Header title="LINE CHART" substitle='Simple Line Chart' />
        <Box height= "75vh">
            <LineChart />
        </Box>
    </Box>
  )
}

export default Line;
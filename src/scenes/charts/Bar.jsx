import { Box } from "@mui/material";
import Header from '../dashboard/Header';
import BarChart from "../../components/BarChart";

const Bar = () => {

  return (
    <Box m="20px">
        <Header title="BAR CHART" substitle='Simple Bar Chart' />
        <Box height= "75vh">
            <BarChart />
        </Box>
    </Box>
  )
}

export default Bar;
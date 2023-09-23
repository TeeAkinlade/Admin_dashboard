import { Box } from "@mui/material";
import Header from '../dashboard/Header';
import PieChart from "../../components/PieChart";

const Bar = () => {

  return (
    <Box m="20px">
        <Header title="PIE CHART" substitle='Simple Pie Chart' />
        <Box height= "75vh">
            <PieChart />
        </Box>
    </Box>
  )
}

export default Bar;
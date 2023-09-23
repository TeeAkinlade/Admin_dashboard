import { Box, Typography, useTheme } from "@mui/material";
import { ProgressCircle } from "./ProgressCircle";
import { tokens } from "../theme";

const StartBox = ({ title, subtitle, icon, progress, increase }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box with="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between">
            <Box>
                {icon}
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{ color: colors.gray[100] }}
                >
                    {title}
                </Typography>
            </Box>
            <Box>
                <ProgressCircle progress={progress} />
            </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mt="10px">
            <Typography
                    variant="h5"
                    sx={{ color: colors.greenAccent[500] }}
                >
                    {subtitle}
            </Typography>
            <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >
                    {increase}
            </Typography>
        </Box>
    </Box>
  )
}

export default StartBox
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../dashboard/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary   from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon  from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

  return (
    <Box m='20px'>
        <Header title ="FAQ" subtitle='Frequently Asked QUestion Page' />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={ <expandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur ipsam fuga recusandae, aspernatur, aliquam nesciunt eveniet magni amet labore, nobis blanditiis quae exercitationem soluta obcaecati expedita dolorum animi ea.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={ <expandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur ipsam fuga recusandae, aspernatur, aliquam nesciunt eveniet magni amet labore, nobis blanditiis quae exercitationem soluta obcaecati expedita dolorum animi ea.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={ <expandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Random question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur ipsam fuga recusandae, aspernatur, aliquam nesciunt eveniet magni amet labore, nobis blanditiis quae exercitationem soluta obcaecati expedita dolorum animi ea.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={ <expandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Favorites Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur ipsam fuga recusandae, aspernatur, aliquam nesciunt eveniet magni amet labore, nobis blanditiis quae exercitationem soluta obcaecati expedita dolorum animi ea.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={ <ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    How to become a member
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione pariatur ipsam fuga recusandae, aspernatur, aliquam nesciunt eveniet magni amet labore, nobis blanditiis quae exercitationem soluta obcaecati expedita dolorum animi ea.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default Faq
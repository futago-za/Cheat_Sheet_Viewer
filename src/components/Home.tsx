import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ActionTable from './ActionTable/ActionTable';
import Data from '../../public/sample.json';
import Mansory from '@mui/lab/Masonry';

const Home = () => {
  console.log(Data)

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Mansory columns={4} spacing={2}>
        {
          Data.data.map((value, index) => (
              <Grid item xs={3} key={index}>
                <ActionTable actionList={value}/>
              </Grid>
            )
          )
        }
      </Mansory>
    </Box>
  )
};

export default Home;
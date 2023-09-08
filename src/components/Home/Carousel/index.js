import { Box, Container, Grid, Typography } from '@mui/material'
import Slider from '../Slider'

const Carousel = ({category, videos}) => {
  return (
    <Box
      bgcolor={"secondary.main"}
      padding={2}
    >
      <Container>
        <Grid container spacing={2}>
          {
            category 
            && (
              <>
                <Typography variant='h5'component={'h2'} color={"white.main"} bgcolor={"primary.main"} margin={2}>{category}</Typography>
                <Typography variant='h6'component={'h3'} color={"gray"}margin={2}> Formacion {category}</Typography>
              </>
            )
          }
        </Grid>    
    
        
        <Slider videos={videos}/>
      </Container>
    </Box>
  )
}

export default Carousel
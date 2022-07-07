import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Details = () => {

  return (

    <>
        
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                

                <Grid item xs={2} sm={4} md={4} sx={{ p: 2, border: 0, boxShadow: 3 }}>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Opening Hours
                    </Typography>

                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h6" component="div">
                        start at 9.00am and end with 10pm.
                    </Typography>
                </Grid>

                <Grid item xs={2} sm={4} md={4} sx={{ p: 2, border: 0, boxShadow: 3 }}>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Visit Our Locations
                    </Typography>
                </Grid>

                <Grid item xs={2} sm={4} md={4} sx={{ p: 2, border: 0, boxShadow: 3 }}>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Contact Us
                    </Typography>
                </Grid>
            
            </Grid>
       
    </>
  )
}

export default Details
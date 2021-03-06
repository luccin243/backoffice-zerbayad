import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {Layout} from 'components'

const Dashboard = () => {
  return (
    <Layout>
      <Container>
        <Typography variant='h2' sx={{ py: 4 }}>
          Dashboard
        </Typography>
      </Container>
    </Layout>
  )
}

export default Dashboard
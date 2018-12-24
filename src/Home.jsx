import React from 'react'
import Button from '@material-ui/core/Button'
import { withTheme } from '@material-ui/core/styles';

const Home = () => {
    return (
        <div>
            <strong>Welcome narsicloud excellent123!!!</strong>
            <Button variant="contained" color="primary">
                Hello World123!!
            </Button>
        </div>
    )
}

export default withTheme()(Home)
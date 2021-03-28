import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
//import welcomeImg from './../assets/images/welcomeImg.jpg'
import welcomeImg from './../assets/images/welcome2.jpg'


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 400
    },
    credit: {
        padding: 10,
        textAlign: 'right',
        backgroundColor: '#ededed',
        borderBottom: '1px solid #d0d0d0',
        '& a': {
            color: '#3f4771'
        }
    }
}))

export default function Home() {
    const classes = useStyles()


    //card media: solution
    // https://stackoverflow.com/questions/62556862/moduleparseerror-module-parse-failed-unexpected-character 

    return (
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title}>
                Hello There 🌟
            </Typography>

            <CardMedia
                className={classes.media}
                image={welcomeImg}
                title="Unicorn Bicycle" />

            <CardContent>
                <Typography variant="body1" component="p">
                    Street Fighters 💪
              </Typography>
            </CardContent>

        </Card>
    )
}
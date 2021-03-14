import { FC } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useTypesSelector } from '../hooks/useTypesSelector'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 32,
  },
  pos: {
    marginBottom: 12,
  },
  btn:{
    margin:'0 auto',
    width:'600px'
  }
});


interface ParamTypes { id: string | undefined; }

const Note: FC = () => {
  const classes = useStyles();
  const history = useHistory()
  const { id } = useParams<ParamTypes>()
  const { currency } = useTypesSelector(state => state.currency)
  const elem = currency.find(row => row.r030 == id)
  const goBack = (): void => {
    history.goBack()
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" >
          {elem.txt}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {elem.rate}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {elem.cc}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {elem.exchangedate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  color="primary" className={classes.btn} variant="contained" onClick={goBack}>GO BACK</Button>
      </CardActions>
    </Card>
  )
}

export default Note

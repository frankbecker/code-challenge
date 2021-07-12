import { makeStyles } from '@material-ui/core/styles';
import { Alert, Color } from '@material-ui/lab';

type NotificationProps = {
  title: string;
  message: string;
  status: Color;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Notifications = (props: NotificationProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Alert variant="filled" severity={props.status}>
        {props.title} — <strong>{props.message}</strong>
      </Alert>
    </div>
  );
};

export default Notifications;

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
      color: 'red'
    },
    toolBar: {
        backgroundColor: 'white'
    },
    button: {
        color: 'red'
    }
  }),
);
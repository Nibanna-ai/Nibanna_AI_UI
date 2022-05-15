import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container: {
        backgroundColor:theme.palette.background.paper,
        padding: theme.spacing(0,8,2)
    },
    icon: {
        marginRight:'12px',
    },
    cardGrid: {
        padding:'20px 80px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0,0,0)
    },
    cardMedia: {
        height:'400px'
    },
    cardContent: {
        flexGrow:1,
    },
}));

export default useStyles;
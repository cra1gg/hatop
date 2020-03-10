import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="hatop.tk">
        HaTop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: 'HaTop',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Attendance', 'Quizzes', 'Live Quizzes', 'Course Materials', 'Canvas Integration'],
  },
  {
    title: 'Resources',
    description: ['Canvas API', 'Blackboard API', 'Desire2Learn API', 'UofT API'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome to HaTop
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          HaTop is a free-to-use assessment platform for post-secondary students and teachers
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="center" component="main">
        <Grid container spacing={4} alignItems="flex-end">
            <Grid item md={6}>
              <Card>
                <CardHeader
                  title="Teachers"
                  subheader="Professors and Teaching Assistants"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action=""
                />
                <CardContent>
                  <ul>
                      <Typography component="li" variant="subtitle1" align="center" key="Swag">
					  	- Administer quizzes in class
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="Swag">
					  	- Create quizzes ahead of time
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="Swag">
					  	- Take attendance in class
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="Swag">
					  	- Post slides, assignments, and other materials
                      </Typography>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
			<Grid item md={6}>
              <Card>
                <CardHeader
                  title="Students"
                  subheader="Students enrolled in classes"
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action=""
                />
                <CardContent>
                  <ul>
				  	  <Typography component="li" variant="subtitle1" align="center" key="idea1">
					  	- Get good marks
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="idea2">
					  	- Show that you actually showed up to class
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="idea3">
					  	- bottom text
                      </Typography>
					  <Typography component="li" variant="subtitle1" align="center" key="idea4">
					  	- im running out of ideas
                      </Typography>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
		
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

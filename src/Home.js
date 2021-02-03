import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



class Copyright  {
  render() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}}



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Album extends Component {


  constructor(props) {

    super(props) ; 
  /*  this.state={
       // theme : createMuiTheme(),
        classes : [{
          icon: {
            marginRight: createMuiTheme().spacing(2),
          },
          heroContent: {
            backgroundColor: createMuiTheme().palette.background.paper,
            padding: createMuiTheme().spacing(8, 0, 6),
          },
          heroButtons: {
            marginTop: createMuiTheme().spacing(4),
          },
          cardGrid: {
            paddingTop: createMuiTheme().spacing(8),
            paddingBottom: createMuiTheme().spacing(8),
          },
          card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
          cardMedia: {
            paddingTop: '56.25%', // 16:9
          },
          cardContent: {
            flexGrow: 1,
          },
          footer: {
            backgroundColor: createMuiTheme().palette.background.paper,
            padding: createMuiTheme().spacing(6),
          },
        }]
    } */   

 }

render() {
 // const classes = this.state.classes ; 

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon

          /* className={{ 
             marginRight: createMuiTheme().spacing(2),
          }} */
          
          />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div 
        
        /*className={ {
         // this.state.classes[0].heroContent.backgroundColor.toString()
       //  backgroundColor: createMuiTheme().palette.background.paper,
        // padding: createMuiTheme().spacing(8, 0, 6),
          
        }}*/
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div 
            /*className={
              
            { // marginTop: createMuiTheme().spacing(4),
            }

              //this.state.classes[0].heroButtons.marginTop.toString()
              
              }*/ 
               >
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container
         /* className={
          
          {//paddingTop: createMuiTheme().spacing(8),
        //  paddingBottom: createMuiTheme().spacing(8),
         }
          

        //  this.state.classes[0].cardGrid.paddingBottom.toString()
          
          
          
          } */
           maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card 
                
                /*className={
                  
                 { 
                //   height: '100%',
                 // display: 'flex',
                  //flexDirection: 'column',
                }

                  //this.state.classes[0].card.display.toString()
                  
                  
                  }  */
                  >
                  <CardMedia
                   /* className={
                      
                      {
                        //paddingTop: '56.25%',
                      } // 16:9
                      
                     // this.state.classes[0].cardMedia.paddingTop.toString()
                    
                    
                    } */
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent 
                  /*className={
                    
                    
                    {
                      //flexGrow: 1,
                    }
                    
                   // this.state.classes[0].cardContent.flexGrow.toString()
                    
                    }  */ >
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer
      /* className={
        
        {
      //    backgroundColor: createMuiTheme().palette.background.paper,
      //  padding: createMuiTheme().spacing(6),
      }

       //this.state.classes[0].footer.backgroundColor.toString()
        
        } */
        >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
}


import './App.css';
import  {Button , Form , FormGroup ,Label , Input, Alert} from 'reactstrap' ; 
import  {FacebookLoginButton } from 'react-social-login-buttons' ; 
import {BrowserRouter as Router ,Route} from 'react-router-dom' ;
import Album from './Home' ; 
import React , {Component} from 'react' ; 

import axios from 'axios' ; 

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import albumItems from './data/album';
import socialLinks from './data/socialLinks';

import fire from './Config/Fire' ; 



class App extends Component {

  constructor(props) {

     super(props) ; 
     this.toggleNavbar = this.toggleNavbar.bind(this);
     this.state={
          email:null , 
          password:null , 
          isLoaded:false,
          submit:false,
          items: [] , 
          i: 0 ,
          collapsed: true,
          socialLinks: socialLinks,
          album: albumItems,
          user:false
     }   
 
//  this.authListener = this.authListener.bind(this) ;


  }

  toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
}


  handleSubmit= (event) => {

    event.preventDefault();
    if ( (this.state.email != "admin@admin.com") || (this.state.password != "admin") ) {
        alert("Sorry , invalid credentials") ; 
         
    }
    else {
      this.state.submit=true ; 
      this.componentDidMount() ; 
    }
    //console.log(this.state.email) ; 
    //console.log(this.state.password) ; 
 
  }

  setPassword= (event) => {
       this.setState({password: event.target.value});
    }

  setEmail= (event) => {
      //event.preventDefault();
     // console.log(event.target.value) ; 
     this.setState({email: event.target.value});
   //  this.setState({password: event.target.value});
      }


  setUser() {
    this.setState({user:true}) ;
  } 


    login() {    // Equivalent to handleSubmit

        //const email = this.state.email ; 
        //const password = this.state.password ; 

        const email = document.querySelector("#email").value ; 
        const password = document.querySelector("#password").value ; 

  
       fire.auth().signInWithEmailAndPassword(email,password).then(
          (u) => {
            console.log("Successfully logged in !") ; 

            

            // this.state.user = true ; 
            //this.setUser() ; 
            this.componentDidMount() ;
          }
        ).catch((err) => {
          console.log("Error: " + err.toString()) ; 
        })


    }
   
    signUp() {

          //const email = this.state.email ; 
          //const password = this.state.password ; 
 
          const email = document.querySelector("#email").value ; 
          const password = document.querySelector("#password").value ;



          fire.auth().createUserWithEmailAndPassword(email,password).then(
            (u) => {
           
              console.log("Successfully signed in !") ; 

              //not_funct
              //this.setState({user:true}) ; 
             // this.setUser() ;
             // this.state.user = true ;
              this.componentDidMount() ;
              
            }
          ).catch((err) => {
            console.log("Error: " + err.toString())
          })


    }

     logout(){
        fire.auth().signOut() ; 
        this.setState({user:false})
     }


  componentDidMount(){
   axios.get('https://oppup.herokuapp.com/')
  .then(res => 
        this.setState(
        { 
        items: res.data ,
       // isLoaded: true
        }
      ))
  console.log(this.state.items) ; 
  //console.log(this.state.isLoaded) ; 

  }
  
  render() {

     var {isLoaded , items} = this.state ; 
    // isLoaded = false ; 
     
  
   /* fire.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState({user})
      }
      else {
        this.setState({user:null}) ; 
      }
     })*/


    //if the user is logged in ( fireBase )
    //if (this.state.user) { return 1 else 2 }

     if ((this.state.submit)){
      //console.log(this.state.email) ; 
      // isLoaded = false ; 
      //if (this.state.user) {
        return (

         <div>
            <Header
                collapsed={this.state.collapsed}
                toggleNavbar={this.toggleNavbar}
                socialLinks={this.state.socialLinks}
                logout={this.logout}
            />
            <Main album={this.state.items} />
            <Footer />
         </div>
          
          )
        
     }
     else {
    //  console.log(isLoaded) ; 
  // console.log(this.state.email) ; 
          
        return(
          
          <div class="back">
          <Form className="login-form" onSubmit={this.handleSubmit}> 
             <h1 className=" font-weight-bold text-center"><span class="text-primary">Opp</span><span class="text-warning">Up</span></h1>
             <h3 class="welc" >Welcome</h3>
             <FormGroup>
               <Label>Email</Label>
               <Input type="email" name="email" placeholder="Email" onChange={this.setEmail}></Input>
               <Label>Password</Label>
               <Input type="Password" name="password" placeholder="Password" onChange={this.setPassword}></Input>
               <hr></hr>
               <Button className="btn-lg btn-dark btn-block">Log in</Button>
               <div className="text-center pt-2">
                   Or <span class="text-primary">Sign-Up</span> if you don't have already an account
               </div>
               <Button className="btn-lg btn-warning btn-block" onClick={this.signUp}>Sign-Up</Button>
             </FormGroup>
           </Form>
       </div>
    
        )
  }
  };

/*
        <div class="back">
           <Form className="login-form" onSubmit={this.login}> 
              <h1 className=" font-weight-bold text-center"><span class="text-primary">Opp</span><span class="text-warning">Up</span></h1>
              <h3 class="welc" >Welcome</h3>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="Email" onChange={this.setEmail}></Input>
                <Label>Password</Label>
                <Input type="Password" name="password" placeholder="Password" onChange={this.setPassword}></Input>
                <hr></hr>
                <Button className="btn-lg btn-dark btn-block">Log in</Button>
                <div className="text-center pt-2">
                    Or <span class="text-primary">Sign-Up</span> if you don't have already an account
                </div>
                <Button className="btn-lg btn-warning btn-block" onClick={this.signUp}>Sign-Up</Button>
              </FormGroup>
            </Form>
        </div>

*/









}

export default App;

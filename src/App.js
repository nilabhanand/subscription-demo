import './App.css';
import React, { useState } from 'react';

import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import bg1 from './bg1.jpeg';
import bg2 from './bg2.jpg';
import logo from './assets/logo.png';
import eliaLogo from './assets/elia-white.svg';
import second from './assets/second.png';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import apple from './assets/apple.svg';
import google from './assets/google.svg';
import bgpopup from './assets/bgpopup.png';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function getModalStyle2() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'none',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  popup: {
    position: 'relative',
    width: '400px',
    height: '650px',
    backgroundColor: 'black',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
    color: 'white',
    height: '55px',
  },
  input: {
    color: 'white',
  },
  textfield: {
    margin: theme.spacing(1, 0, 1),
    color: 'white',
    width: '70%',
    height: '55px',
    border: 'white',
    borderRadius: '5px',
    opacity: '0.75',
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
    textAlign: 'center',
    width: '70%',
    fontSize: '15px',
    fontWeight: '700',
  },
}));

function App() {

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [modalStyle2] = useState(getModalStyle2);
  const [open2, setOpen2] = useState(false);
  const [screen, setScreen] = useState('first');
  const [screen2, setScreen2] = useState('first');
  const [subscriptionAmount, setSubscriptionAmount] = useState(2.99);
  const [paymentAmount, setPaymentAmount] = useState(29.99);
  const [cardBalance, setCardBalance] = useState(10690.77);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setScreen('first');
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    setScreen2('first');
  };

  const handleLogin = () => {
    setScreen('second');
  }

  const handleLogin2 = () => {
    setScreen2('second');
  }

  const handleSubscribe = () => {
    setScreen('third');
    var finalBalance = cardBalance - subscriptionAmount;
    setCardBalance(finalBalance.toFixed(2));
  }

  const handleSubscribe2 = () => {
    setScreen2('third');
    var finalBalance = cardBalance - paymentAmount;
    setCardBalance(finalBalance.toFixed(2));
  }

  const body = (
    <div className={classes.paper}>
      {
        screen === 'first' ?
        <div style={modalStyle} className={classes.popup}>
        <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
          <Grid container spacing={0}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <p onClick={handleClose} className='cancelBtn'>X</p>
            <img src={logo} style={{ width: '40%', marginTop: '15px', marginBottom: '20px' }} />
              <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              </Grid>
              <p style={{ color: 'white' }}>Login or create an account</p>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <TextField
                  variant="outlined"
                  className={classes.textfield}
                  style={{ backgroundColor: '#d6d0d02a', color: 'white'}}
                  id="phone"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  label='Phone'
                  name="phone"
                  defaultValue="+1"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <TextField
                  variant="outlined"
                  className={classes.textfield}
                  style={{ backgroundColor: '#d6d0d02a', color: 'white'}}
                  id="password"
                  name="password"
                  type="password"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  label='Password'
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  onClick={handleLogin}
                  style={{ backgroundColor: `#0ced05`, fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Button
                    style={{ backgroundColor: `#0ced05`, fontSize: '15px', color: `BLACK` }}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Create Account
                  </Button>
                </Grid>
            </Grid>
            <Grid item xs={10} style={{ textAlign: 'center' }}>
              <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
            </Grid>
          </Grid>
        </form>
      </div> 
      : (screen === 'second') ?
      <div style={modalStyle} className={classes.popup}>
        <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
          <Grid container spacing={0}>
          <p onClick={handleClose} className='cancelBtn'>X</p>
          <Grid item xs={12}>
              <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              </Grid>
              <Grid item xs={12}>
                <h2 style={{ color: `white`, fontWeight: '400', fontSize: `30px`, marginLeft: '20px',marginTop: '20px' }}>Subscription</h2>
              </Grid>
              <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center',marginTop: '15px' }}>
                <div className='divider-bar'></div>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '15px' }}>
                <div className='elia-wallet' style={{ background: `linear-gradient(236deg, #5D0DB6 25%, #D10E9E)` }}>
                  <Grid item xs={12} style={{ zIndex: '9999' }}>
                    <p style={{ color: 'white', fontWeight: '500', fontSize: '16px', zIndex: '9999', float: 'left', marginLeft: '10px', marginTop: '10px' }}>Balance: ${cardBalance}</p>
                    <img src={eliaLogo} alt="elia logo" style={{ width: '40px', zIndex: '9999', float: 'right', marginRight: '10px' }} />
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
                <div className='divider-bar'></div>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0}className='currency-input' style={{ width: '70%' }}>
                  <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <TextField
                      variant="outlined"
                      disabled
                      className={classes.paymentInput}
                      style={{ backgroundColor: '#d6d0d02a', color: 'white' }}
                      id="phone"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input
                        }
                      }}
                      InputLabelProps={{
                        style: { color: '#fff', fontSize: '15px' },
                      }}
                      name="phone"
                      label="CAD"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <TextField
                      variant="outlined"
                      disabled
                      className={classes.paymentInput}
                      style={{ backgroundColor: '#d6d0d02a', color: 'white' }}
                      id="phone"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input
                        }
                      }}
                      InputLabelProps={{
                        style: { color: '#fff', fontSize: '15px' },
                      }}
                      name="phone"
                      label="3.72"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className='currency-input' style={{ width: '70%' }}>
                  <Grid item xs={6}>
                    <p style={{ color: 'white', fontSize: '17px', fontWeight: '700', float: 'left' }}>Total USD</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p style={{ color: 'white', fontSize: '17px', fontWeight: '700', float: 'right' }}>${subscriptionAmount}/month</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  onClick={handleSubscribe}
                  style={{ backgroundColor: `#0ced05`, fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Subscribe
                </Button>
              </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Button
                    style={{ backgroundColor: `#0ced05`, fontSize: '15px', color: `BLACK` }}
                    variant="contained"
                    color="primary"
                    onClick={handleClose}
                    className={classes.submit}
                  >
                    Cancel
                  </Button>
                </Grid>
            </Grid>
            <Grid item xs={10} style={{ textAlign: 'center' }}>
              <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
            </Grid>
          </Grid>
        </form>
      </div> : 
      <div style={modalStyle} className={classes.popup}>
      <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', opacity: '0.9'}}>
        <Grid container spacing={0}>
        <p onClick={handleClose} className='cancelBtn'>X</p>
        <Grid item xs={12}>
            <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ color: `white`, fontWeight: '400', fontSize: `30px`, marginLeft: '20px',marginTop: '20px' }}>Confirmation</h2>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
                <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ color: `white`, fontWeight: '700', fontSize: '20px', marginLeft: '20px', marginTop: '15px' }}>Thank you for your order!</h2>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'left' }}>
              <p style={{ color: `white`, fontSize: '15px', marginLeft: '20px', marginTop: '15px', width: '70%' }}>You have now subscribed to a monthly re-occuring payment of $2.99. Your next payment will be on August 30th, 2021.</p>
            </Grid>
            <Grid item xs={12} className='reciept-list' style={{marginTop: '15px'}}>
              <li><span style={{ fontWeight: '700' }}>Item:</span> Kingdom Rush Monthly Subscription</li>
              <li><span style={{ fontWeight: '700' }}>Status:</span> Subscription Accepted</li>
              <li><span style={{ fontWeight: '700' }}>Date:</span> July 30th, 2021</li>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
              <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <p style={{ color: 'white', fontSize: '15px', fontWeight: '700', float: 'left', marginLeft: '20px',marginTop: '15px' }}>Total</p>
                </Grid>
                <Grid item xs={6}>
                  <p style={{ color: 'white', fontSize: '15px', fontWeight: '700', float: 'right', marginRight: '20px',marginTop: '15px' }}>$2.99/month</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
              <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                style={{ backgroundColor: `#0ced05`, fontSize: '15px', color: `BLACK` }}
                variant="contained"
                onClick={handleClose}
                color="primary"
                className={classes.submit}
              >
                Back To Store
              </Button>
            </Grid>
            <Grid item xs={10} style={{ textAlign: 'center' }}>
              <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
      }
      
    </div>
  );


  const body2 = (
    <div className={classes.paper}>
      {
        screen2 === 'first' ?
        <div style={modalStyle2} className={classes.popup}>
        <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
          <Grid container spacing={0}>
          <p onClick={handleClose2} className='cancelBtn'>X</p>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <img src={logo} style={{ width: '40%', marginTop: '15px', marginBottom: '20px' }} />
              <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              </Grid>
              <p style={{ color: 'white' }}>Login or create an account</p>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <TextField
                  variant="outlined"
                  className={classes.textfield}
                  style={{ backgroundColor: '#d6d0d02a', color: 'white'}}
                  id="phone"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  label='Phone'
                  defaultValue="+1"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <TextField
                  variant="outlined"
                  className={classes.textfield}
                  style={{ backgroundColor: '#d6d0d02a', color: 'white'}}
                  id="phone"
                  type="password"
                  InputProps={{
                    classes: {
                      notchedOutline: classes.notchedOutline,
                      input: classes.input
                    }
                  }}
                  InputLabelProps={{
                    style: { color: '#fff' },
                  }}
                  label='Password'
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  onClick={handleLogin2}
                  style={{ backgroundColor: '#ede209', fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  style={{ backgroundColor: '#ede209', fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Create Account
                </Button>
              </Grid>
              <Grid item xs={10} style={{ textAlign: 'center' }}>
                <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div> 
      : (screen2 === 'second') ?
      <div style={modalStyle2} className={classes.popup}>
        <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
          <Grid container spacing={0}>
          <p onClick={handleClose2} className='cancelBtn'>X</p>
          <Grid item xs={12}>
              <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
                <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              </Grid>
              <Grid item xs={12}>
                <h2 style={{ color: `white`, fontWeight: '400', fontSize: `30px`, marginLeft: '20px',marginTop: '20px' }}>Payment</h2>
              </Grid>
              <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center',marginTop: '15px' }}>
                <div className='divider-bar'></div>
              </Grid>
              <Grid item xs={12} style={{ marginTop: '15px' }}>
                <div className='elia-wallet' style={{ background: `linear-gradient(236deg, #5D0DB6 25%, #D10E9E)` }}>
                  <Grid item xs={12} style={{ zIndex: '9999' }}>
                    <p style={{ color: 'white', fontWeight: '500', fontSize: '16px', zIndex: '9999', float: 'left', marginLeft: '10px', marginTop: '10px' }}>Balance: ${cardBalance}</p>
                    <img src={eliaLogo} alt="elia logo" style={{ width: '40px', zIndex: '9999', float: 'right', marginRight: '10px' }} />
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
                <div className='divider-bar'></div>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={0}className='currency-input' style={{ width: '70%' }}>
                  <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <TextField
                      variant="outlined"
                      disabled
                      className={classes.paymentInput}
                      style={{ backgroundColor: '#d6d0d02a', color: 'white' }}
                      id="phone"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input
                        }
                      }}
                      InputLabelProps={{
                        style: { color: '#fff', fontSize: '15px' },
                      }}
                      name="phone"
                      label="CAD"
                    />
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: 'center' }}>
                    <TextField
                      variant="outlined"
                      disabled
                      className={classes.paymentInput}
                      style={{ backgroundColor: '#d6d0d02a', color: 'white' }}
                      id="phone"
                      InputProps={{
                        classes: {
                          notchedOutline: classes.notchedOutline,
                          input: classes.input
                        }
                      }}
                      InputLabelProps={{
                        style: { color: '#fff', fontSize: '15px' },
                      }}
                      name="phone"
                      label="37.25"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className='currency-input' style={{ width: '70%' }}>
                  <Grid item xs={6}>
                    <p style={{ color: 'white', fontSize: '17px', fontWeight: '700', float: 'left' }}>Total USD</p>
                  </Grid>
                  <Grid item xs={6}>
                    <p style={{ color: 'white', fontSize: '17px', fontWeight: '700', float: 'right' }}>${paymentAmount}</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  onClick={handleSubscribe2}
                  style={{ backgroundColor: '#ede209', fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Pay
                </Button>
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button
                  style={{ backgroundColor: '#ede209', fontSize: '15px', color: `BLACK` }}
                  variant="contained"
                  color="primary"
                  onClick={handleClose2}
                  className={classes.submit}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={10} style={{ textAlign: 'center' }}>
                <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div> : 
      <div style={modalStyle2} className={classes.popup}>
      <form style={{ width: '400px', height: '650px', backgroundImage: `url(${bgpopup})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat'}}>
        <Grid container spacing={0}>
        <p onClick={handleClose2} className='cancelBtn'>X</p>
        <Grid item xs={12}>
            <Grid item xs={12} style={{ marginTop: '10px', textAlign: 'center' }}>
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px' }} />
              <Brightness1Icon fontSize='medium' style={{ color: '#000', marginRight: '15px', opacity: '0.3' }} />
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ color: `white`, fontWeight: '400', fontSize: `30px`, marginLeft: '20px',marginTop: '20px' }}>Confirmation</h2>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
                <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ color: `white`, fontWeight: '700', fontSize: '20px', marginLeft: '20px', marginTop: '15px' }}>Thank you for your order!</h2>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'left' }}>
              <p style={{ color: `white`, fontSize: '15px', marginLeft: '20px', marginTop: '15px', width: '70%' }}>You can now log in and play with your Kingdom Rush account. Enjoy building and dominating the Rush world!</p>
            </Grid>
            <Grid item xs={12} className='reciept-list' style={{marginTop: '15px'}}>
              <li><span style={{ fontWeight: '700' }}>Item:</span> Kingdom Rush Payment</li>
              <li><span style={{ fontWeight: '700' }}>Status:</span> Payment Accepted</li>
              <li><span style={{ fontWeight: '700' }}>Date:</span> July 30th, 2021</li>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
              <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={6}>
                  <p style={{ color: 'white', fontSize: '15px', fontWeight: '700', float: 'left', marginLeft: '20px',marginTop: '15px' }}>Total</p>
                </Grid>
                <Grid item xs={6}>
                  <p style={{ color: 'white', fontSize: '15px', fontWeight: '700', float: 'right', marginRight: '20px',marginTop: '15px' }}>$29.99 USD</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} alignItems='center' justify='center' style={{ alignItems: 'center', marginTop: '15px' }}>
              <div className='divider-bar'></div>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Button
                style={{ backgroundColor: '#ede209', fontSize: '15px', color: `BLACK` }}
                variant="contained"
                onClick={handleClose2}
                color="primary"
                className={classes.submit}
              >
                Back To Store
              </Button>
            </Grid>
            <Grid item xs={10} style={{ textAlign: 'center' }}>
              <img src={eliaLogo} alt="elia logo" style={{ width: '70px', position: 'absolute', bottom: '0' }} />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
      }
      
    </div>
  );
  
  const handleSubscription = () => {
    alert('subscription');
  }
  
  const handlePayment = () => {
    alert('payment');
  }


  return (
    <div className="App">
      <Grid className='header'>
        <div class="navigation-container">
          <img className='header-logo' src={logo} style={{width: '100px', float: 'left', marginLeft: '50px'}} />
          <ul>
            <li>GAMES</li>
            <li>NEWS</li>
            <li>ABOUT US</li>
            <li>SHOP</li>
            <li>SUPPORT</li>
          </ul>
        </div>
      </Grid>
      <Grid className='main-container' style={{backgroundImage: `url(${bg1})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <img src={logo} className='logo' alt='logo'/>
        <Grid item>
          <Button
            style={{ backgroundColor: `#d03add`, fontSize: '15px', color: `white`, width: '200px', height: '50px', boxShadow: 'rgba(0, 0, 0, 0.55) 0px 5px 15px' }}
            variant="contained"
            color="primary"
            className={classes.submit}
          >Watch Trailer</Button>
        </Grid>
        <Grid item>
          <div class="packs-container">
            <img id="pack-img" src={apple} />
            <img id="pack-img" src={google} />
          </div>
        </Grid>
      </Grid>
      <Grid className='second-div'>
        <Grid container spacing={0}>
          <Grid item xs={6} className='left-column'>
            <h1>IT'S PAYBACK TIME!</h1>
            <h2>LORD VEZ’NAN HAS RETURNED</h2>
            <p>Get ready to show your enemies who’s the real boss! Vez’nan, 
              the powerful almighty wizard has returned. Lead your powerful 
              dark army and make the Kingdom tremble with each step!</p>
          </Grid>
          <Grid item xs={6} className='right-column'>
            <img src={second} alt='second img' />
          </Grid>
        </Grid>
      </Grid>
      <div className='bottom'>
        <h1 className='bottomTitle'>FIGHT YOUR WAY ACROSS NEW AND OLD KINGDOMS!</h1>
      </div>
      <Grid className='forth-div' style={{backgroundImage: `url(${bg2})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></Grid>
      <Grid className='third-div'>
        <h1>JOIN & BUILD YOUR KINDOM NOW</h1>
        <Grid item xs={12} className='payment-btns'>
          <button className='main-btn' onClick={handleOpen}>MONTHLY SUBSCRIPTION</button>
          <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
        <button className='main-btn' onClick={handleOpen2}>ANNUAL PAYMENT</button>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body2}
      </Modal>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default App;

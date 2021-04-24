import './index.css';
import { Button, Container, FormControl, Input, InputLabel, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Info from './info';
import def from './default.jpg';

const styles=makeStyles({
  box:{
    width:"90%",
    marginTop:"50px",
    height:"520px",
    borderRadius:"20px",
    marginBottom:"50px",
    backgroundImage: `url(${def})`,
    backgroundRepeat:"no-reapeat",
    backgroundSize:"cover"
    
  },
  text:{
    zIndex:2,
    textAlign:"center"
  },
  btn:{
    zIndex:2,
    backgroundColor:"Primary",
    marginTop:"10px"
  },
  frm:{
    zIndex:2,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center"
  }
})

function App() { 
 // const temp=useState();
  const [city,setcity]=useState("");
  const [clicked,setclicked]=useState(false);
  const [all,setall]=useState([]);

  // fetching data
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=5f20e401acf341f44e5ef735fe1dd181"
  console.log(url)

  const find=(e)=>{
    e.preventDefault();
    console.log('submitted')
    fetch(url)
    .then(res=>{return res.json()})
    .then(data=>setall(data))
    .catch(error=>console.log(error))
    setTimeout(()=>{
      if(city!==''){
        setclicked(true);
      }
    },1000)
  }
  
  useEffect(() => {
    fetch(url)
    .then(res=>{return res.json()})
    .then(data=>setall(data))
  }, [])

  const classes=styles();


  // main page
  return (
    <Container className={classes.box}>
         <div className="header">
          <Typography variant="h2" className="heading">
            Weather
          </Typography>
        </div>
        <form noValidate onSubmit={find}>
          <FormControl className= {classes.frm}>
            <InputLabel>Enter City</InputLabel>
            <Input
              value={city}
              onChange={(e)=>(setcity(e.target.value))}
            />
            <Button variant="outlined" className={classes.btn} type="submit" >Check</Button>
          </FormControl>
        </form>
        <Info all={all} clicked={clicked}/>
    </Container>
  );
}

export default App;

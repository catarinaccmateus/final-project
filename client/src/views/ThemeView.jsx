import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import themes from "./themes";
import ReactLoading from 'react-loading';
import "./views.css";

class ThemeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themes: [],
      loadedPicture: true,
    };
   // console.log(this.state)
  }

  componentDidMount() {
    const array = themes;
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({
      themes: array,
      loadedPicture:false
    });
  }


  render() {
    console.log('length', this.state.themes.length)
    const luckyNum = Math.floor(Math.random()* this.state.themes.length);
    return (
      // <div>
      //    <div className="context" style ={{height: "100%"}}>
      <main className="App-layers justify-content-center align-items-center">
        <h1 className='mt-3' style= {{color: "#787878"}}>Themes</h1>
        <p className='m-1' style= {{textAlign: "center", color: "#787878"}}>Choose a theme and begin your Journey...</p>
        {this.state.loadedPicture && <ReactLoading type={'balls'} color={'#E3D353'} height={100} width={100} />}
       {this.state.themes.length && 
       <div className='text-center'>
       <button className="btn w-80 mt-3 text-center" style ={{border: "2px solid white", borderRadius: "90px", backgroundColor:"#E3D353" }} ><Link to={`/search/${this.state.themes[luckyNum].id}`} className='lucky' style = {{color:"white"}}>I feel lucky...</Link></button>
        <div className = "theme mt-3">
          {this.state.themes.map((val)=>{
            return <Link className = "themeWidth" to={`/search/${val.id}`} key={Math.random()} >
            <img className = "theme-img" src= {val.imageURL} style={{"width":"90%", border: "2px solid white", maxWidth: "200px"}}/></Link>
          })}
          </div>
        </div> } 
        <br></br>
      </main>
    //   </div>
    //   <div class="area" >
    //   <ul class="circles">
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //         </ul>
    // </div >
    // </div>
      
    );
  }
}

export default ThemeView;


/*
// to shuffle the themes each time
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

const luckyNum = Math.floor(Math.random()* themes.length)

// import { listUser as listUser } from './../services/authentication';
*/
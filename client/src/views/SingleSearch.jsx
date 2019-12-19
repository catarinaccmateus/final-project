import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactLoading from 'react-loading';
import { FaPodcast } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { IconContext } from "react-icons";


import "./views.css";

import themes from "./themes";

function SingleSearch(props) {
  
  const [result, setResults] = useState([]);
  const [image, setImage] = useState([]);
  const [loaded, setLoaded] = useState(true);


  function handleSearchSubmission() {
    const title = props.match.params.title;
   // console.log("Title", title)
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" +
        title
        +
        "&k=351127-cheeta-8Z5VDMQU"
      )
      .then(data => {
        const final = data.data.Similar.Results;
        console.log(final)
        const filteredpercentage = final.filter((val,index) => { if(!val.Name.includes("%")){ return val}})
        const filtered = filteredpercentage.filter((val,index) => { if(val.Type === "book" || val.Type === "podcast"){ return val}})
        if(filtered.length === 0){
          filtered.push({Name: "Sorry no results - go back homie", Type: "..."})
        }
        setResults(filtered);
        setLoaded(false);
      })
      .catch(err => {});
  }

  useEffect(() => {
    return handleSearchSubmission();
  }, []);

  return (
    <main className="App-layers text-center">
    <h2 style={{color: "#788FAD"}} > Search : {props.match.params.title}</h2>
    <br></br>
    {loaded && <ReactLoading type={'balls'} color={'#E3D353'} height={100} width={100} />}
    <div>
    {result.map(val => {
      return (
        <Link to={`/book/${val.Name}`} key={Math.random()}>
        <div className="card mb-2 " style={{border: "#f0f0f2", backgroundColor: "#f0f0f2"}}>
        {" "}
        <div className="card-body p-1 d-flex flex-row">
        <IconContext.Provider className=" m-0" value={{ style: { width: "5em", color: "#E3D353" } }}>
        {val.Type === "podcast" &&  <div>
        <FaPodcast/>
        </div>}
        {val.Type === "book" && <div>
        <FaBookOpen/>
        </div>}
        </IconContext.Provider>
        <h6 className="m-0" style={{color: "#788FAD", alignSelf: "center"}}>{val.Name}</h6>
        </div>
        </div>{" "}
        </Link>
        );
      })}
      </div>
      </main>
      );
    }

export default SingleSearch;

import React, { useEffect, useState } from "react";
import "./preloader.css";

function preloader() {
  const [data, setData] = React.useState([]);
  const [loading, setloading] = React.useState(undefined);
  const [completed, setcompleted] = React.useState(undefined);

  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 10000);
        });
    }, 10000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className="spinner">
              <span>Loading...</span>
              <div className="half-spinner"></div>
            </div>
          ) : (
            <div className="completed">&#x2713;</div>
          )}
        </>
      ) : (
        <>
          <h1>Your Data</h1>
        </>
      )}
    </>
  );
}

export default preloader;
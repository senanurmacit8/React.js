import React, { useState, useEffect } from "react";
import "./css/ListUsers.css"


const Agenda = () => {

  const url = "http://localhost:8080/getAgendaList";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div>
      <div>
        <table>
            {data.map((item1) => {
              return (
                <tr>
                  <thead>session</thead>
                  <thead>
                    <tr>
                     <th scope="col">conferenceName</th>
                     <th scope="col">conferenceDateTime</th>
                     <th scope="col"> conferenceDuration</th>
                     <th scope="col">userName</th>
                    </tr>  
                    </thead>
                    <tbody >
                  {item1.map((item2) => {
                    return (                  
                    <tr>
                      {Object.entries(item2).map((field) => {
                          return (
                            <td>{field[1]}</td>
                          )
                        })}
                        </tr>
                      
                    );
                  })}
                 </tbody>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default Agenda;
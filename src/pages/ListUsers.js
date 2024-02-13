import React, { useState, useEffect } from "react";
import "./css/ListUsers.css"


const ListUsers = () => {

  const url = "http://localhost:8080/hello";
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
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">lastname</th>
              <th scope="col"> job</th>
              <th scope="col">country</th>
            </tr>
          </thead>

          <tbody >
            {data.map((item,index) => {

              return (
                <tr>
                  {Object.entries(item).map((field) => {
                    return (
                      <td>{field[1]}</td>
                    )
                  })}
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListUsers;
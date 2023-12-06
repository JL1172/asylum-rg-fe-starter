import { BASE_URL } from '../configs/config';
import axios from 'axios';

//! IMPORTANT NOTE

/*
This code is for fetching all of the data for the graphs and distributing the data accordingly to there necessary destinations
*/

export function updateStateWithNewData(
  years,
  view,
  office,
  stateSettingCallback
) {
  /*
        _                                                                             _
      |                                                                                 |
      |   Example request for once the `/summary` endpoint is up and running:           |
      |                                                                                 |
      |     `${url}/summary?to=2022&from=2015&office=ZLA`                               |
      |                                                                                 |
      |     so in axios we will say:                                                    |
      |                                                                                 |     
      |       axios.get(`${url}/summary`, {                                             |
      |         params: {                                                               |
      |           from: <year_start>,                                                   |
      |           to: <year_end>,                                                       |
      |           office: <office>,       [ <-- this one is optional! when    ]         |
      |         },                        [ querying by `all offices` there's ]         |
      |       })                          [ no `office` param in the query    ]         |
      |                                                                                 |
        _                                                                             _
                                 -- Mack 
  
  */
  //!added condition for citizenship chart
  if (view === 'citizenship') {
    axios
      .get(`${BASE_URL}/citizenshipSummary`)
      .then(result => {
        const citizenshipResults = [{ citizenshipResults: result.data }];
        stateSettingCallback(view, office, citizenshipResults); //! put the result.data in array in order for plotly to receive data
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    if (office === 'all' || !office) {
      axios
        .get(`${BASE_URL}/fiscalSummary`, {
          params: {
            from: years[0],
            to: years[1],
          },
        })
        .then(result => {
          stateSettingCallback(view, office, [result.data]); //! put the result.data in array in order for plotly to receive data
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .get(`${BASE_URL}/fiscalSummary`, {
          params: {
            from: years[0],
            to: years[1],
            office: office,
          },
        })
        .then(result => {
          stateSettingCallback(view, office, [result.data]); //! put the result.data in array in order for plotly to receive data
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}

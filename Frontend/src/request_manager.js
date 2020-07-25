import axios from 'axios';

let endPoint = '';
let url = '';
let post_data = {};
let headers = {}
let baseURL = 'http://localhost:8080';
baseURL = 'http://139.162.208.159:8080'
headers = {'Content-Type': "application/json"};

function make_server_request(server_call) {

    switch (server_call) {
      case "login":
        url = `${endPoint}/login`;
        return get_function(url);
        break;
     
    }
}

function get_function(url) {
  console.log(url)

let ax =  axios({
      method: 'get',
      headers: headers,
      url: url,
      baseURL: baseURL
    })

  return ax;
}

export { make_server_request }
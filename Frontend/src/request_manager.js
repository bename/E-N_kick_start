import axios from 'axios';

let endPoint = '139.162.208.159:8080';
let url = '';
let post_data = {};
let headers = {}
headers = {'Content-Type': "application/json"};

function make_server_request(server_call) {

    switch (server_call) {
      case "login":
        url = endPoint + '/login';
        return get_function(url);
        break;
     
    }
}

function get_function(url) {
  console.log('testttmp')

let ax =  axios({
      method: 'get',
      headers: headers,
      url: url,
    })

  return ax;
}

export { make_server_request }
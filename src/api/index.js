const API_URL = "https://srapi.herokuapp.com/v1";

function request(endpoint, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer nvnvndf"
    }
  };
  if (method === "POST" || method === "PATCH") {
    config.body = JSON.stringify(data);
  }
  const url = `${API_URL}${endpoint}`; // /movies -> https://srapi.herokuapp.com/v1/movies
  return fetch(url, config).then((response) => {
    // response.status
    return response.json();
  });
}

function get(endpoint) {
  return request(endpoint);
}

function post(endpoint, data) {
  return request(endpoint, "POST", data);
}

function patch(endpoint, data) {
  return request(endpoint, "PATCH", data);
}

function _delete(endpoint) {
  return request(endpoint, "DELETE");
}

export default {
  get,
  post,
  patch,
  delete: _delete
};

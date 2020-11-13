const url = 'http://54.158.203.226:8081/api/v1'

const login = (dataLogin) =>
  fetch(`${url}/login`, {
    method: "POST",
    body: JSON.stringify(dataLogin),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

const logout = () => {
  localStorage.removeItem("token");
  return null;
};

export { login, logout };


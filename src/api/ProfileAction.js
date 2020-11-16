const url = 'http://kelompok6.dtstakelompok1.com/api/v1/'
const token = localStorage.getItem('user')


const getDataProfile = async() => {

    await fetch(url + `user/detail/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhhcmxhbm9yb2hAZ21haWwuY29tIiwiaWQiOjN9.YSXxy-90RdONGhrumIFHNpKZE1G-fVSVSFL64KVy7aw"
            },
        }).then(response => response.json())
        .then(data => {
            console.log(data.data.user)
            data = data.data.user
            return data.data.user // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))

}
export { getDataProfile }
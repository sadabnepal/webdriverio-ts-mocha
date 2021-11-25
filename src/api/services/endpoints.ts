import util from 'util'

class APIConfig {
    reqresBaseURL = "https://reqres.in"
    userAPI = "/api/users"
    private userAPIByID = "/api/users/%s"

    getUserAPIByID(id:number) {
        return util.format(this.userAPIByID, id)
    }
}
export default new APIConfig()
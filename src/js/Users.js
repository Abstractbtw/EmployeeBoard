import axios from 'axios';

class Users {
  static all() {
    return axios.get('./Data.json').then(resp => resp.data);
  }
}

export default Users;
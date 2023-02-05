import axios from 'axios';
const url = 'https://daftlab-back-production.up.railway.app/'

const adminActions = {
  

    addShoe: (data, token) => {

        // console.log(data);
        // console.log(token);

        return async (dispatch, getState) => {

            const res = await axios.post(`${url}api/shoes`, { data },
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            return res;
        }

    },

    removeShoe: (idShoe, token) => {

        return async (dispatch, getState) => {

            const res = await axios.delete(`${url}api/shoes/${idShoe}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            return res;
        }
    }

}

export default adminActions
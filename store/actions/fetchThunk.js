import axios from 'axios';
import { ACCESS_KEY } from '../../config';
import fetchingAction from './fetchAction';
export default () => (dispatch) => {
    axios
        .get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
        .then((res) => dispatch(fetchingAction(res.data)));
};

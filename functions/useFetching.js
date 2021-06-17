import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default (fn) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fn());
    }, []);
};

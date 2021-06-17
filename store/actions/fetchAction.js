export default (data) => {
    return {
        type: 'FETCH_DATA',
        payload: {
            stack: data
        }
    };
};

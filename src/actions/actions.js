export const DATA_AVAILABLE = 'DATA_AVAILABLE';

// const action = type =>
//   store.dispatch({
//     type,
//   });

export function getData(data) {
  return {
    type: DATA_AVAILABLE,
    data,
  };
}

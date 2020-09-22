export const WIKI_REQUEST = 'WIKI_REQUEST';
export const WIKI_SUCCESS = 'WIKI_SUCCESS';
export const WIKI_FAIL = 'WIKI_FAIL';

export const fetchWiKi = () => ({
  type: WIKI_REQUEST
});

export const fetchWiKiSuccess = (wikis) => ({
  type: WIKI_SUCCESS,
  payload: wikis
});

export const fetchWiKiFail = (message) => ({
  type: WIKI_FAIL,
  payload: message
});
import mountURL from './mountURL';
import cleanDataMiddleware from '../middlewares';

const customHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
});

export default function ({term, offset = 0, itemsPerPage = 4}) {
    return fetch(`${mountURL()}&nameStartsWith=${term}&offset=${offset}&limit=${itemsPerPage}`, {
        method: 'GET',
        headers: customHeaders,
    })
    .then(res => {
        if(res.status !== 200) {
            return false
        }
        return cleanDataMiddleware(res.json())
    })
}
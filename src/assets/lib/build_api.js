
import AlertError from './alert_error';
import { HOSTNAME } from '../constants';

function build_api(methods){
    const api = {};
    for (const method of methods) {
        let query_func = (params = {}) => {
            // GET  query
            if (method.startsWith("get_")) {
                let url =  `${HOSTNAME}/${method.replace("get ", "")}`;
                const params_keys = Object.keys(params);
                if (params_keys.length) url += "?";
                for (const param of params_keys) {
                    url += `${param}=${encodeURI(params[param])}`
                }
                return fetch(url);
            }
            // POST query
            else {
                const url = `${HOSTNAME}/${method}`;
                json_fetch(url, params);
            }
        }
        api[method] = async (params = {}) => {
            const response = await query_func(params);
            if (!response.ok) throw new AlertError(response.statusText);
            return response.json();
        }
    }
    return api;
}

function json_fetch(url, data = {}) {
    return fetch(url, { body: JSON.stringify(data), method: "POST", headers: { "Content-Type": "application/json" } });
}

export default build_api;
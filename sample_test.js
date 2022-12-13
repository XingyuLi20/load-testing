import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '10s'
};

export default () => {
    http.get('http://localhost:8088/cedar/v1/offer/collection/0xed5af388653567af2f388e6224dc7c4b3241c544');
    sleep(1);
};

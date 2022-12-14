import http from "k6/http";
import { sleep } from "k6";

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  vus: 1,
  duration: "1m",
  thresholds: {
    http_req_duration: ["p(99)<50"], // 99% of requests must complete below 50ms
  },
};

export default () => {
  let response = http.get(
    "http://localhost:8088/cedar/v1/offer/collection/0xed5af388653567af2f388e6224dc7c4b3241c544"
  );

  sleep(1);
};

import http from "k6/http";
import { sleep } from "k6";

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: "2m", target: 100 }, // below normal load
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 }, // normal load
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 }, // around the breaking point
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 }, // beyond the breaking point
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 }, // scale down. Recovery stage.
  ],
};

const API_BASE_URL = "http://localhost:8088/cedar/v1/offer/collection";

export default () => {
  http.batch([
    ["GET", `${API_BASE_URL}/0xed5af388653567af2f388e6224dc7c4b3241c544`],
    ["GET", `${API_BASE_URL}/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e`],
    ["GET", `${API_BASE_URL}/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b`],
  ]);

  sleep(1);
};

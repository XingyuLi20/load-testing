## Installation
Install [k6](https://k6.io/docs/get-started/installation/) MacOS
```
brew install k6
```


## Testing
```
k6 run sample_test.js
k6 run load_test.js
k6 run smoke_test.js
k6 run spike_test.js
k6 run stress_test.js
k6 run spike_test.js
```

---
### Load Test
Load Testing is primarily concerned with assessing the current performance of your system in terms of concurrent users or requests per second.
When you want to understand if your system is meeting the performance goals, this is the type of test you'll run.

Run a load test to:
- Assess the current performance of your system under typical and peak load
- Make sure you are continuously meeting the performance standards as you make changes to your system

Can be used to simulate a normal day in your business

---
### Smoke Test
Smoke test is a regular load test, configured for minimal load. 
You want to run a smoke test as a sanity check every time you write a new script or modify an existing script.
Run a smoke test to:
- Verify that your test script doesn't have errors
- Verify that your system doesn't throw any errors when under minimal load

---
### Stress Test
Stress Testing is a type of load testing used to determine the limits of the system. 
The purpose of this test is to verify the stability and reliability of the system under extreme conditions.

Run a stress test to:
- Determine how your system will behave under extreme conditions
- Determine what is the maximum capacity of your system in terms of users or throughput
- Determine the breaking point of your system and its failure mode
- Determine if your system will recover without manual intervention after the stress test is over

More of a load test than a spike test

---
### Spike Test
Spike test is a variation of a stress test, but it does not gradually increase the load, 
  instead it spikes to extreme load over a very short window of time

Run a stress test to:
- Determine how your system will perform under a sudden surge of traffic
- Determine if your system will recover once the traffic has subsided

Success is based on expectations. Systems will generally react in 1 of 4 ways
- Excellent: system performance is not degraded during the surge of traffic. 
Response time is similar during low traffic and high traffic
- Good: Response time is slower, but the system does not produce any errors. 
All requests are handled
- Poor: System produces errors during the surge of traffic, but recovers to normal after the traffic subsides
- Bad: System crashes, and does not recover after the traffic has subsided

---
### Soak Test
Soak testing is used to validate reliability of the system over a long time

Run a soak test to:
- Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart after several hours of operation
- Verify that expected application restarts don't lose requests
- Find bugs related to race-conditions that appear sporadically
- Make sure your database doesn't exhaust the allotted storage space and stops
- Make sure your logs don't exhaust the allotted disk storage
- Make sure the external services you depend on don't stop working after a certain amount of requests are executed

How to run a soak test:
- Determine the maximum amount of users your system can handle
- Get the 75-80% of that value
- Set VUs to that value
- Run the test in 3 stages. Rump up to the VUs, stay there for 4-12 hours, rump down to 0
---
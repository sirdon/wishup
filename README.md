# wishup Backend APIs

**Getting started**

**step1 clone repo**

git clone https://github.com/sirdon/wishup.git

**step2 install dependencies**

npm install

**step3 run project**

npm run start or npm start

**Create user**
PUT api to create user - http://localhost:4000/user/sita

**User Get APIs** 
GET api to get user info - http://localhost:4000/user/sita

**Subscription APIs**
POST api to create subscription- http://localhost:4000/subscription
````
{
    "user_name":"sita",
    "plan_id":"TRAIL",
    "start_date":"2021-09-15"
}
````

GET api to get subscription list - http://localhost:4000/subscription/sita

GET api to get active subscription on date - http://localhost:4000/subscription/sita/2021-09-20





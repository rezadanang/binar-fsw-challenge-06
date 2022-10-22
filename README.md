# Car Management API

## Getting Started

1. Setting db postgres
2. Instal dependencies using yarn

```
yarn install
```

3. Create db postgres

```
sequelize db:create
```

4. Migrate db postgres

```
sequelize db:migrate
```

5. Seed db postgres

```
sequelize db:seed:all
```

6. Start project

```
yarn start
```


Super Admin Account

```
email: superadmin@mail.com
pass: superAdmin
```


## Endpoint Table

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | /superadmin/login | Login super admin |
| POST | /superadmin/admin/add | Add new admin by super admin |
| POST | /admin/login | Login admin |
| POST | /member/add | Register new member |
| POST | /member/login | Login member |
| POST | /cars | Create cars data by admin or super admin |
| GET | /user | Get information of profile data |
| GET | /cars | Get information of cars data |
| PUT | /cars | Update cars data by admin or super admin |
| DELETE| /cars | Delete cars data by admin or super admin |

## POST /superadmin/login
- summary: Login super admin
- description: Login super admin 

#### Responses
- 200 OK
```
{
  "user": {
    "id": 1,
    "email": "superadmin@mail.com",
    "password": "$2b$10$6HnBL02xfNF/3zomu4qjtuqNh/l0Ylcj1.G4M3ZW0wJihs7AFSyu6",
    "createdAt": "2022-10-21T09:50:27.783Z",
    "updatedAt": "2022-10-21T09:50:27.783Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InN1cGVyYWRtaW5AbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2SG5CTDAyeGZORi8zem9tdTRxanR1cU5oL2wwWWxjajEuRzRNM1pXMHdKaWhzN0FGU3l1NiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMjFUMDk6NTA6MjcuNzgzWiIsInVwZGF0ZWRBdCI6IjIwMjItMTAtMjFUMDk6NTA6MjcuNzgzWiJ9LCJyb2xlIjoiU3VwZXJhZG1pbiIsImlhdCI6MTY2NjM3OTMwMn0._FLooPJzUJWjjFYMHQCCls2cESXE7KLhJSSCO5cSFgA"
}
```
- 403 Forbidden
if password incorrect 
```
{
  "message": "Password is incorrect!!"
}
```
if email incorrect 
```
{
  "message": "Email is incorrect!!"
}
```

## POST /superadmin/admin/add
- summary: Register new admin
- description: Register new admin by super admin

#### Responses
- 201 Created

```
{
  "Message": "New admin has been created",
  "schema": {
    "email": "newadmin@mail.com",
    "password": "$2b$10$taYldXyOnqJmlIuSBdoyRukrXOwqhWc7JIjRwQYpNFUin9J5Y/rmO"
  }
}
```

- 400 Bad Request if email already registered

```
{
  "message": "Admin email already registered!"
}
```

- 401 Created if no allowed to add new admin

```
{
  "message": "Unauthorized"
}
```

## POST /admin/login
- summary: Login admin
- description: Login admin 

#### Responses
- 200 OK

```
{
  "User": {
    "id": 1,
    "email": "newadmin@mail.com",
    "password": "$2b$10$6flnfnEXFpff8vI1MujOU.lpsIdUR5ZNosD.eKBgVDnu1IOxz9orW",
    "createdAt": "2022-10-21T09:50:27.783Z",
    "updatedAt": "2022-10-21T09:50:27.783Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJlbWFpbCI6Im5ld2FkbWluQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkdGFZbGRYeU9ucUptbEl1U0Jkb3lSdWtyWE93cWhXYzdKSWpSd1FZcE5GVWluOUo1WS9ybU8iLCJjcmVhdGVkQXQiOiIyMDIyLTEwLTIxVDExOjU4OjI3LjI5MVoiLCJ1cGRhdGVkQXQiOiIyMDIyLTEwLTIxVDExOjU4OjI3LjI5MloifSwicm9sZSI6IkFkbWluIiwiaWF0IjoxNjY2MzcyNTM0fQ.fHctpElUfL7dgB4vIPEARYNTRlzKsH2w492-z_SYXhk"
}
```

- 403 Forbidden if incorrect email

```
{
  "message": "Email is incorrect!!"
}
```

- 403 Forbidden if incorrect password

```
{
  "message": "Password is incorrect!!"
}
```

## POST /member/add
- summary: Register new member
- description: Register new member

#### Responses
- 201 Created

```
{
  "Message": "New member has been created",
  "schema": {
    "email": "newmember@mail.com",
    "password": "$2b$10$GDzM6fpxd8odKHWJOIwAZ.GUTu2OfYR8v/OZs1nEVLgVXCFPOmfsS"
  }
}
```

- 400 Bad Request if email already registered

```
{
  "message": "Member email already registered!"
}
```

## POST /member/login
- summary: Login member
- description: Login member

#### Responses
- 200 OK
```
{
  "User": {
    "id": 1,
    "email": "newmember@mail.com",
    "password": "$2b$10$GDzM6fpxd8odKHWJOIwAZ.GUTu2OfYR8v/OZs1nEVLgVXCFPOmfsS",
    "createdAt": "2022-10-21T09:50:27.783Z",
    "updatedAt": "2022-10-21T09:50:27.783Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6Im5ld21lbWJlckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJEdEek02ZnB4ZDhvZEtIV0pPSXdBWi5HVVR1Mk9mWVI4di9PWnMxbkVWTGdWWENGUE9tZnNTIiwiY3JlYXRlZEF0IjoiMjAyMi0xMC0yMVQxMjowMzo1OS40MTBaIiwidXBkYXRlZEF0IjoiMjAyMi0xMC0yMVQxMjowMzo1OS40MTBaIn0sImlhdCI6MTY2NjM3MjUxMH0.aUaY43TSNR3r-RHCED46daBFOkCf5RlunI1AhoFkvME"
}
```
- 403 Forbidden
if password incorrect 
```
{
  "message": "Password is incorrect!!"
}
```
if email incorrect 
```
{
  "message": "Email is incorrect!!"
}
```

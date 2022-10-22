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
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
| POST | /member/add]  Register new member |
| POST | /member/login | Login member |
| POST | /cars | Create cars data by admin or super admin |
| GET | /user | Get information of profile data |
| GET | /cars | Get information of cars data |
| PUT | /cars | Update cars data by admin or super admin |
| DELETE| /cars | Delete cars data by admin or super admin |



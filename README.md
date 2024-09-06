# Social-app Project Setup

## Clone the repo
```
git clone https://github.com/Finn1203/social-app.git
```

## After installation

## Set up backend
### Step 1 
```

cd social-app/laravel-social-apis

```

### Step 2
```
composer update

```
or

```
composer install
```

### Create Database
first run XAMPP and start apache and sql
Another way: Use laradock - clon and set up enviroment follow your ideas

#### Then goto brower and paste
```
http://localhost/phpmyadmin
```
create database after database creation goto .env in the project and add the database name to
```
DB_DATABASE=social_apis
```
"social_apis" will be your database's name

### Migrate

```
php artisan migrate
```

### Run project

```
php artisan server
```
### Set up Front-end
### Step 1 
```

cd social-app/Vue-Social-App-Frontend-laravel-apis

```

### Step 2
```
npm install
```
if getting any error during npm install then delete package-lock.json file and re run
```
npm install
```

#### Step 3 
```
npm run dev
```
# SmartMall — Digital Shopping Mall Platform

SmartMall is a full-stack academic project that brings multiple stores and shopping departments together on one online platform. Customers can discover participating stores, browse products and offers, add products to a cart, and place orders. Shop owners have a separate seller workspace to manage their own store profile, products, stock, promotions, and order lines related to their products. Administrators manage the mall-wide directory and monitor the platform.

Because SmartMall is an online platform, the website does **not** show a generic physical-mall opening schedule or pretend to represent a specific Hyderabad mall. Customers can browse the catalogue and place orders at any time; stock and offer validity depend on the current data maintained by each seller.

## Technology stack
- Frontend: React 19 + Vite
- Backend: Java 17 + Spring Boot 3.5
- Database: MySQL 8+
- Persistence: Spring Data JPA / Hibernate
- API: REST / JSON
- Authentication: Spring Security + JWT

## Run locally (Windows)

### 1. Start MySQL
Make sure the MySQL server is running. Run `create-database.sql` in MySQL Workbench or execute:

```sql
CREATE DATABASE IF NOT EXISTS smartmall;
```

Open `smartmall-backend/src/main/resources/application.properties` and set your database username and password if they differ from your local MySQL configuration.

### 2. Start the backend
Double-click `START_BACKEND.cmd`, or open a terminal in `smartmall-backend` and run:

```bat
mvnw.cmd spring-boot:run
```

The backend runs at `http://localhost:8080`. On startup, sample categories, stores, products, offers and demo accounts are inserted or normalized. Sample stores are demonstration data, not verified businesses.

### 3. Start the frontend
In a second terminal, double-click `START_FRONTEND.cmd`, or run:

```bat
cd smartmall-frontend
npm install
npm run dev
```

Open the Vite URL printed in the terminal, normally `http://localhost:5173`.

## Demo accounts
- **Admin:** `admin@smartmall.com` / `admin123`
- **Store owner:** `owner@smartmall.com` / `owner123` — sample seller account for the Urban Thread shop
- **Customer:** `customer@smartmall.com` / `customer123`

New users can choose either a customer account or a shop-owner account from the registration form. Admin accounts are not available through public registration.

## Main features

### Customer-facing experience
- Home page with departments and participating store highlights.
- Departments for Fashion & Clothing, Footwear, Electronics, Home & Kitchen, Beauty & Personal Care, Groceries & Supermarket, Food & Dining, Jewellery & Accessories, Books & Stationery, Toys & Games, and Sports & Fitness.
- Searchable store directory and individual store pages.
- Product search, department filters and mixer-grinder brand filters (Preethi, Philips, Bajaj, Havells and Bosch).
- Store-linked offers and promotions.
- Customer registration/login, wishlist, cart, checkout, order history and reviews.
- A **How it works** guide that explains the online platform and the three user roles; it intentionally does not show physical opening times or fabricated mall facilities.

### Shop owner / seller
- Create and edit a store profile with a department, description, section and contact number.
- Add, edit and delete products belonging only to the seller's own stores.
- Maintain product prices and stock quantities.
- Publish, edit and delete offers for the seller's own store.
- View order lines linked to the seller's products without seeing unrelated sellers' line items.
- Backend ownership checks prevent sellers from changing other shops' products, stores or offers.

### Administrator
- View high-level user, store, product and order counts.
- Create, edit and delete store directory entries.
- Create, edit and delete promotions.
- Review registered users and recent orders.

## How to explain it in a viva

**SmartMall is a digital shopping mall platform, not a claim to be better than Amazon.** Amazon is a large e-commerce marketplace. SmartMall is a smaller academic implementation focused on the idea of bringing distinct stores and departments under one mall-style platform. A customer can discover a shop, open its store page, explore its products and offers, and place an order. A seller signs in separately to maintain the seller's own shop catalogue, stock and offers. An administrator oversees the common directory and platform activity.

Suggested demo flow: open Home → explore departments → open the store directory → open a store and product → view offers → explain the online access guide → sign in as the demo seller to show store/product/offer management → sign in as the admin to show the directory and platform overview.

## Configuration
- Backend API base: `http://localhost:8080/api`
- Frontend API override: set `VITE_API_URL` to the backend URL ending in `/api` if deploying elsewhere.
- Backend environment variables: `DB_URL`, `DB_USER`, `DB_PASSWORD`, `JWT_SECRET`.

For a public deployment, replace the demo JWT secret and configure database credentials using environment variables.

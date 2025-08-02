# Car Care 🚗

A comprehensive car servicing management platform built with Next.js, featuring user authentication, service booking, and admin dashboard functionality.

## 🌐 Live Demo

**Website:** [https://next-car-care.vercel.app/](https://next-car-care.vercel.app/)

## ✨ Features

### 🏠 Public Features
- **Service Catalog**: Browse all available car services with detailed descriptions
- **Service Details**: View comprehensive information about each service
- **User Authentication**: Sign in/up with email, Google, or GitHub
- **About & Contact Pages**: Learn more about the company and get in touch

### 👤 User Features
- **Service Booking**: Book services with automated pricing and user details
- **My Bookings**: View, edit, and delete personal bookings
- **Profile Management**: Manage account information

### 🔧 Admin Features
- **Admin Dashboard**: Comprehensive booking management system
- **Booking Actions**: View, edit, delete, and manage all customer bookings
- **Detailed Reports**: Access complete booking information and customer details

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.1
- **Runtime**: React 19.1.0
- **Database**: MongoDB 6.17.0
- **Authentication**: NextAuth.js 4.24.11
- **Password Hashing**: bcrypt 6.0.0
- **Form Handling**: React Hook Form 7.60.0
- **Notifications**: React Hot Toast 2.5.2
- **Icons**: React Icons 5.5.0

## 📱 Pages & Routes

### Public Routes
- `/` - Homepage with hero section and services overview
- `/service/[id]` - Individual service details page
- `/about` - About us page
- `/contact` - Contact information page
- `/login` - User authentication page
- `/register` - User registration page

### Protected Routes (Authentication Required)
- `/checkout/[id]` - Service booking checkout form
- `/my-bookings` - User's personal bookings dashboard
- `/admin/dashboard` - Admin panel for managing all bookings

## 🔐 Authentication & Authorization

### Authentication Methods
- Email & Password
- Google OAuth
- GitHub OAuth

### Access Control
- **Public Access**: Home, services, about, contact, login, register
- **User Access**: Checkout, personal bookings management
- **Admin Access**: Dashboard with full booking management capabilities

## 📋 Booking Process

1. **Service Selection**: Browse and select a service from the homepage
2. **Service Details**: Review service information and pricing
3. **Authentication Check**: Login required to proceed with booking
4. **Checkout Form**: Complete booking with:
   - Auto-filled username and email (from session)
   - Phone number input
   - Service date selection
   - Fixed service amount (non-editable)
   - Address input
5. **Confirmation**: Booking saved to database and visible in admin dashboard

## 🎛️ Admin Dashboard Features

### Booking Management Table
- Service name and details
- Customer information
- Service date and pricing
- Service images

### Available Actions
- **View Details**: Modal with complete booking information
- **Edit Booking**: Update customer details, date, and address
- **Delete Booking**: Remove bookings from system

## 👥 User Dashboard Features

### My Bookings Page
- View all personal service bookings
- Edit booking details (date, phone, address)
- Cancel/delete bookings

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- NextAuth.js configuration for OAuth providers

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd car-care
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
# Create .env.local file with:
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🔒 Security Features

- Password hashing with bcrypt
- Session-based authentication
- Protected routes with middleware
- Input validation with React Hook Form
- Secure database operations


**Built with ❤️ using Next.js and modern web technologies**

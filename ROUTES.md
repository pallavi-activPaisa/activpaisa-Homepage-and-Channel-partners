# Application Routes

This file maintains a live list of all active routes in the application, categorized by user role.

## 1. Public / General User
Routes accessible to all visitors.

- **Home**: `/`
- **CIBIL Score**: `/CheckCIBILScore`
- **Offerings**: `/OurOfferings`
- **Contact Us**: `/ContactUs`

## 2. Partner (Channel Partners)
Routes for partner registration, authentication, and dashboard management.

- **Landing Page**: `/partners`
- **Registration**: `/partners/signup`
- **Portal Root**: `/partner`
- **Login**: `/partner/login`
- **Dashboard**: `/partner/dashboard`
- **Profile**: `/partner/profile`
- **Verification**: `/partner/verification`
- **Reset Password**: `/partner/reset-password`

## 3. Super Admin
Routes for internal administration and system management.

- **Internal Login**: `/superadmin/internal-login`
- **Dashboard**: `/superadmin/dashboard`
- **Reset Password**: `/superadmin/reset-password`

---
*Note: This file should be updated whenever a new route is created or improved.*

# Dashboard Screens

This directory contains multiple dashboard views for different user roles in the Servexa application.

## Available Dashboards

### 1. Dashboard (Default)
**Route:** `/dashboard`  
**Component:** `Dashboard.tsx`  
**Description:** Standard dashboard with basic metrics and sales overview.

### 2. Business Owner Dashboard
**Route:** `/dashboard/business-owner`  
**Component:** `BusinessOwnerDashboard.tsx`  
**Description:** Enterprise-level dashboard for business owners with:
- Total enterprise revenue tracking
- Branch management overview
- Staff count across all locations
- Stock health monitoring
- Revenue performance by branch (chart)
- Strategic insights and recommendations
- Branch health status table

**Key Features:**
- Multi-branch performance comparison
- Real-time branch health monitoring
- Strategic business insights
- Goal progress tracking

### 3. Platform Super Admin Dashboard
**Route:** `/dashboard/platform-admin`  
**Component:** `PlatformSuperAdminDashboard.tsx`  
**Description:** Platform-wide administrative dashboard for super admins with:
- Total active businesses (tenants)
- Monthly recurring revenue (MRR)
- Churn rate monitoring
- Average branch count per tenant
- Tenant management cards
- Global module management
- System audit log

**Key Features:**
- Multi-tenant overview
- Subscription health tracking
- Module enable/disable controls
- Real-time audit logging
- Tenant search and filtering

### 4. Staff Operational Dashboard
**Route:** `/dashboard/staff`  
**Component:** `StaffOperationalDashboard.tsx`  
**Description:** Operational dashboard for floor staff with:
- Quick operation shortcuts (POS, Stock Entry, Attendance, Returns)
- Personal performance metrics
- Pending task management
- Daily schedule timeline
- Stock alerts feed
- Recent sales tracking
- Hardware connectivity status

**Key Features:**
- Task-oriented interface
- Real-time stock alerts
- Personal performance tracking
- Schedule management
- Quick access to common operations

## Navigation

All dashboards are accessible through the sidebar navigation. The routes are protected and require authentication.

## Tech Stack

- **UI Framework:** Material-UI (MUI)
- **Charts:** Recharts
- **State Management:** Redux Toolkit
- **Routing:** React Router v6

## Usage

```typescript
import { BusinessOwnerDashboard } from '@/features/dashboard/pages/BusinessOwnerDashboard'
import { PlatformSuperAdminDashboard } from '@/features/dashboard/pages/PlatformSuperAdminDashboard'
import { StaffOperationalDashboard } from '@/features/dashboard/pages/StaffOperationalDashboard'
```

Or use the index export:

```typescript
import { 
  Dashboard, 
  BusinessOwnerDashboard, 
  PlatformSuperAdminDashboard, 
  StaffOperationalDashboard 
} from '@/features/dashboard/pages'
```

## Future Enhancements

- Role-based dashboard routing (automatic redirect based on user role)
- Real-time data integration with backend APIs
- Customizable dashboard widgets
- Export functionality for reports
- Advanced filtering and search capabilities

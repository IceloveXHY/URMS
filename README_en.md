# University Research Management System (URMS)

> A Research Management System based on Spring Boot & Vue

---

## Overview

This project is a full-featured research management platform for universities, including modules for research projects, publications, patents, and funds. Backend is implemented with Spring Boot, frontend uses Vue.js. The project follows industry-standard engineering practices and focuses on clean code, which makes it a strong portfolio piece when applying for software development positions.

---

## Tech Stack

- Frontend: Vue.js, JavaScript, Element-UI
- Backend: Spring Boot, Java, MyBatis or JPA
- Database: MySQL (and scalable to PostgreSQL/Oracle)
- Testing: JUnit, Postman (API testing)
- Tooling: Git, Maven, npm, ESLint, Checkstyle

---

## Engineering Practices

- Java code style based on Alibaba Java Guide; Vue code follows ESLint standards
- Git used for branching (feature/bugfix/release) and code management
- Emphasis on unit tests and API documentation (Swagger or Postman)
- RESTful APIs with consistent response structure
- Key modules are well-commented and documented

---

## Main Features

- Research Project Management (CRUD, progress, approvals)
- Management for publications, patents, and research outcomes
- Budget and fund approval workflows
- User & Role-based access control (Multi-role support)
- Data statistics and exportable reports
- Notification & system log auditing

---

## Quick Start

### 1. Prerequisites

- JDK 8+
- Node.js 12+
- MySQL 5.7+

### 2. Start Backend

```bash
cd server
# Configure 'application.yml' for your database
mvn spring-boot:run
```

### 3. Start Frontend

```bash
cd client
npm install
npm run serve
```

### 4. Visit the Application

- Frontend: http://localhost:8080/
- Backend API: http://localhost:8081/ (if needed)

---

## Directory Structure

```
URMS/
  ├── client/    # Frontend code
  ├── server/    # Backend code
  ├── docs/      # Documents
  ├── tests/     # Tests
  ├── README.md
```

---

## Project Highlights

- Covers core technologies for most software engineer positions
- Clear separation of frontend and backend, easily extendable and maintainable
- Standard branch management and thorough documentation
- Comprehensive test cases, well-described APIs

---

## Contact

- Author: IceloveXHY
- Email: 814641372@qq.com

---

## License

MIT

---

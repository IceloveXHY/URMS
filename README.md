# 高校科研管理系统 (URMS)
# University Research Management System (URMS)

> 本项目下方提供【中文说明】和【English Guide】，请根据需要阅读。
> Please scroll down for English version.

---

## 🀄 中文说明

### 项目简介

高校科研管理系统（URMS）是为高校设计的科研项目、成果、经费等信息管理平台。采用主流前后端分离架构：**前端 Vue (75.9%)**，**后端 Java/Spring Boot (22.2%)**，辅以 JavaScript，关注业务流程完整性、系统安全和工程规范。

### 技术栈

- 前端：Vue.js、JavaScript、Element-UI
- 后端：Java、Spring Boot、MyBatis 或 JPA
- 数据库：MySQL
- 工具：Git、Maven、npm

### 主要功能

- 科研项目信息管理（增删改查、流程审批）
- 成果管理（论文/专利/奖项）
- 经费预算与审批流程
- 用户和限多级管理（RBAC）
- 数据统计分析、报表导出
- 消息通知、日志等系统辅助功能

### 软件工程规范

- 前后端接口采用 RESTful 标准
- 代码格式化：Java（阿里规范）/Vue（ESLint）
- Git 规范分支管理 feature/bugfix/release
- 代码详细注释和文档说明
- 配备用例测试和接口文档

### 快速开始

1. **环境准备：**
    - JDK 8及以上
    - Node.js 12及以上
    - MySQL 5.7及以上

2. **启动后端：**
    ```bash
    cd server
    # 配置数据库 application.yml
    mvn spring-boot:run
    ```

3. **启动前端：**
    ```bash
    cd client
    npm install
    npm run serve
    ```

4. **访问系统：**
    - 前端：http://localhost:8080/
    - 后端：http://localhost:8081/ （如开放）

### 目录结构

```
URMS/
  ├── client/    # 前端源码(Vue)
  ├── server/    # 后端源码(Java/Spring Boot)
  ├── docs/      # 项目文档
  ├── tests/     # 测试用例
  ├── README.md
```

### 联系方式

- 作者：IceloveXHY
- 邮箱：814641372@qq.com

### License

MIT

----

## 🌐 English Guide

### Project Introduction

URMS is an integrated platform for universities, managing research projects, achievements, and funding. It utilizes a **Vue-based frontend (75.9%)**, a **Java/Spring Boot backend (22.2%)**, and additional JavaScript modules, focusing on workflow completeness, system security, and solid engineering practices.

### Tech Stack

- Frontend: Vue.js, JavaScript, Element-UI
- Backend: Java, Spring Boot, MyBatis or JPA
- Database: MySQL
- Tools: Git, Maven, npm

### Core Features

- Research project management (CRUD, approval workflow)
- Achievements: publications, patents, awards
- Budget and funding approval process
- Multi-level user & permission management (RBAC)
- Data statistics, exportable reports
- Notification and system log functions

### Engineering Practices

- Frontend-backend separation via RESTful API
- Coding style: Java (Alibaba Java Guide), Vue (ESLint)
- Git branching for feature/bugfix/release management
- Well-documented code with comments
- Basic unit tests and API docs

### Quick Start

1. **Prerequisites:**
    - JDK 8+
    - Node.js 12+
    - MySQL 5.7+

2. **Start Backend:**
    ```bash
    cd server
    # Configure database in application.yml
    mvn spring-boot:run
    ```

3. **Start Frontend:**
    ```bash
    cd client
    npm install
    npm run serve
    ```

4. **Access:**
    - Frontend: http://localhost:8080/
    - Backend: http://localhost:8081/ (if enabled)

### Directory Structure

```
URMS/
  ├── client/    # Frontend source code (Vue)
  ├── server/    # Backend source code (Java/Spring Boot)
  ├── docs/      # Documentation
  ├── tests/     # Tests
  ├── README.md
```

### Contact

- Author: IceloveXHY
- Email: 814641372@qq.com

### License

MIT

----

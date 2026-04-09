# 高校科研管理系统 (URMS)

> 基于 Spring Boot + Vue 的高校科研管理系统

---

## 项目简介

本项目是一款服务于高校的全流程科研管理平台，涵盖科研项目、论文、专利、经费等各类信息管理。后端采用 Spring Boot，前端使用 Vue，注重代码规范和软件工程实践，适合用于软件开发类岗位的个人/团队项目实践以及简历展示。

---

## 技术栈

- 前端：Vue.js、JavaScript、Element-UI
- 后端：Spring Boot、Java、MyBatis 或 JPA
- 数据库：MySQL（可扩展 PostgreSQL/Oracle）
- 测试：JUnit、Postman（接口测试）
- 工具链：Git、Maven、npm、ESLint、Checkstyle

---

## 软件工程规范

- 遵循阿里巴巴 Java 开发手册与 Vue + ESLint 代码风格
- 使用 Git 管理代码分支（feature/bugfix/release）
- 重视单元测试和接口文档（Swagger 或 Postman）
- 前后端接口采用 RESTful 风格，数据结构规范统一
- 关键模块配有详细注释和文档

---

## 主要功能

- 科研项目管理（增删改查，进度审批）
- 论文/专利/成果管理
- 经费预算与审批流程
- 用户和角色权限管理（多角色支持）
- 数据统计报表、支持导出
- 通知公告与日志审计

---

## 快速启动

### 1. 环境准备
- JDK 8 及以上
- Node.js 12 及以上
- MySQL 5.7 及以上

### 2. 启动后端

```bash
cd server
# 修改 application.yml 数据库配置
mvn spring-boot:run
```

### 3. 启动前端

```bash
cd client
npm install
npm run serve
```

### 4. 访问项目

- 前端访问地址：http://localhost:8080/
- 后端接口地址：http://localhost:8081/ （如有需要）

---

## 目录结构

```
URMS/
  ├── client/    # 前端源码
  ├── server/    # 后端源码
  ├── docs/      # 相关文档
  ├── tests/     # 测试用例
  ├── README.md
```

---

## 项目亮点

- 覆盖大多数软件开发岗位所需技术点
- 前后端分离、接口清晰，易于扩展和维护
- 规范的分支管理与文档编写
- 测试用例齐全，接口文档完善

---

## 联系方式

- 作者：IceloveXHY
- 邮箱：814641372@qq.com

---

## License

MIT

---

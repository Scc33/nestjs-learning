# NestJS Overview

NestJS is a framework for building efficient, reliable and scalable server-side applications. It uses modern JavaScript, is built with TypeScript (but allows developers to code in pure JavaScript), and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

## Key Features

- **Extensible**: NestJS provides a modular structure that allows you to use other libraries alongside it.
- **Versatile**: It can be used for building various types of server-side applications like REST APIs, GraphQL APIs, microservices, WebSocket servers, and more.
- **Progressive**: NestJS leverages TypeScript for added reliability and maintainability, but it's also compatible with plain JavaScript.
- **Scalable**: Its architecture supports horizontal scalability and is designed to handle increasing loads and complex operations efficiently.

## Core Concepts

- **Modules**: Organize code into separate modules to keep the codebase more organized and facilitate microservice patterns.
- **Controllers**: Handle incoming requests and return responses to the client.
- **Providers**: Services, repositories, factories, helpers, and more. They can inject dependencies; this means objects can create various relationships with each other.
- **Middleware**: Functions that are called before the route handler.
- **Filters**: Handle errors that occur during the execution of route handlers and middleware.
- **Guards**: Determine whether a given request will be handled by the route handler or not, based on certain conditions like permissions or roles.
- **Interceptors**: Extend the basic functionality of route handlers, allowing you to transform the result of route handlers, bind extra logic before or after the execution of a handler, and more.
- **Pipes**: Transform input data from the request before it reaches the route handler or validate it.

## Getting Started

To start a new NestJS project, you can use the Nest CLI. First, install the CLI globally with npm:

```bash
npm i -g @nestjs/cli
nest new project-name
```

# Providers and Controllers in NestJS

## Providers

*Business logic*

Providers are a fundamental concept in NestJS, serving as the backbone for various NestJS features like dependency injection. They can be thought of as classes that can create or deliver a specific service or functionality. Providers can be anything from services, repositories, factories, helpers, and more. The main idea behind providers is that they can inject dependencies; this means objects can create various relationships with each other, leading to a more modular and easily testable codebase.

### Key Points about Providers:
- **Dependency Injection**: Providers are designed to be injectable into controllers or other providers, allowing for loose coupling and easier unit testing.
- **Singleton Scope by Default**: When a provider is injected into a module, NestJS instantiates it as a singleton, ensuring that the same instance is used throughout the application (unless explicitly configured otherwise).
- **Versatile**: Providers are not limited to any specific task. They can handle data access, perform complex operations, or even provide utility functions.

## Controllers

*HTTP controller*

Controllers are responsible for handling incoming requests and returning responses to the client. They act as the connection between the client and the server, determining how to respond to a client's request after receiving it.

### Key Points about Controllers:
- **Routing**: Controllers define routes and handle HTTP requests (GET, POST, PUT, DELETE, etc.) at those routes. Each route is associated with a controller method.
- **Request Handling**: They process incoming requests, validate input, perform operations (often involving providers/services), and return responses.
- **Decorators**: NestJS uses decorators to easily bind class methods to specific routes, extract parameters from requests, and define other route-specific behavior.

### Example of a Basic Controller:
```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }
}
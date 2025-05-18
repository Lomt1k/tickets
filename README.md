# Ticket API

> REST API для управления обращениями (тикетами). Реализовано с использованием NestJS, TypeORM и SQLite.

---

## ✅ Функционал

- Создание тикетов
- Обновление статуса тикета (`new`, `in-progress`, `done`, `canceled`)
- Завершение тикета с указанием решения
- Отмена тикета с указанием причины
- Фильтрация тикетов по статусу и диапазону дат

---

## 🧰 Используемые технологии

- **NestJS** — фреймворк для построения серверных приложений
- **TypeORM** — ORM для работы с базой данных
- **SQLite** — локальная БД (не требует установки)
- **Swagger UI** — документация и тестирование API
- **TypeScript**

---

## 🚀 Установка и запуск

### 1. Откройте терминал и перейдите в папку server

```bash
cd server
```

### 2. Установите зависимости

```bash
npm install
```

### 3. Запустите приложение

```bash
npm run start
```

API будет доступен по адресу: [http://localhost:3000](http://localhost:3000)

Swagger UI: [http://localhost:3000/api](http://localhost:3000/api)

Для тестирования API в папке `client` есть небольшой скрипт `test.js`.
Его можно запустить с помощью:

```bash
node test.js
```

## Доступные эндпоинты

<table>
<thead>
  <tr>
    <th>МЕТОД</th>
    <th>ПУТЬ</th>
    <th>ОПИСАНИЕ</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>POST</td>
    <td>/ticket</td>
    <td>Создать новое обращение</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/ticket</td>
    <td>Получить список обращений (можно фильтровать по <b>status</b>, <b>from</b>, <b>to</b>)</td>
  </tr>
  
  <tr>
    <td>GET</td>
    <td>/ticket/:id</td>
    <td>Получить обращение по ID</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/ticket/:id</td>
    <td>Обновить статус обращения</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/ticket/:id/resolve</td>
    <td>Завершить обращение</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/ticket/:id/cancel</td>
    <td>Отменить обращение</td>
  </tr>
</tbody>
</table>

## 📋 Примеры запросов

### Создать тикет

```http
POST /ticket
Content-Type: application/json

{
  "text": "Не могу войти в аккаунт"
}
```

### Обновить статус

```http
PATCH /ticket/1
Content-Type: application/json

{
  "status": "in-progress"
}
```

### Завершить тикет

```http
PATCH /ticket/1/resolve
Content-Type: application/json

{
  "resolutionText": "Пароль успешно сброшен."
}
```

### Отменить тикет

```http
PATCH /ticket/1/cancel
Content-Type: application/json

{
  "cancellationReason": "Клиент отозвал заявку."
}
```

### Фильтр по дате и статусу

```http
GET /ticket?status=done&from=2024-01-01&to=2024-12-31
```

## 📦 Статусы тикетов

<table>
<thead>
  <tr>
    <th>СТАТУС</th>
    <th>ОПИСАНИЕ</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>new</td>
    <td>Новое обращение</td>
  </tr>
  <tr>
    <td>in-progress</td>
    <td>В работе</td>
  </tr>
  <tr>
    <td>done</td>
    <td>Завершено</td>
  </tr>
  <tr>
    <td>canceled</td>
    <td>Отменено</td>
  </tr>
</tbody>
</table>

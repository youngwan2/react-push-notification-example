# React Push Notification Example
![image](https://github.com/user-attachments/assets/2c113592-a7fb-478b-9d35-c59b5c4be513)


## Description/ 설명
외부 라이브러리 없이 Web API만을 사용하여 React 애플리케이션에서 푸시 알림을 구현하는 간단한 예제를 담고 있는 저장소입니다(This repository demonstrates how to implement push notifications in a React application using only Web APIs without any external libraries. ).

---

## Features / 기능
- Push notifications with Web APIs.
- Service Worker integration for background notifications.
- Manual trigger for testing notifications.

---

## Requirements / 요구사항
- Node.js and npm installed.
- Modern web browser (supports Service Workers and Notifications).
- HTTPS environment (required for Service Workers and Push API in production).

---

## Installation / 설치
1. Clone the repository:
   ```bash
   git clone https://github.com/youngwan2/react-push.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-push-notification-example
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage / 사용법
1. Open the application in your browser.
2. Click on "Request Notification Permission" to grant notification access.
 ![alt text](image.png)
3. Click on "Trigger Push Notification" to display a sample notification.
![alt text](image-1.png)

# 🌟 KindDoner – A Donation Management Platform

**KindDoner** is a responsive and serverless donation website that allows users to:
- 💬 Submit contact messages
- 📦 Donate physical items with address and item list
- 💸 Send monetary donations via a static UPI QR code

Built entirely by **Dip Shill**, this project showcases both **frontend design** and a **serverless AWS backend** using Python Lambda functions.

---

## 🏗️ Architecture

![Architecture Diagram](![1_oaoY3k8IIQlwIC-2XHoirw](https://github.com/user-attachments/assets/da8de3ad-a759-4fb2-91c0-d65684a977ab)).

> The project uses AWS services to implement a fully serverless and scalable backend:
- **API Gateway**: Receives form requests from the frontend
- **AWS Lambda (Python)**: Processes form data
- **DynamoDB**: Stores contact messages and donation records
- **CloudWatch**: Monitors logs for debugging

---

## 🔧 Tech Stack

| Layer         | Tools / Services                             |
|---------------|-----------------------------------------------|
| **Frontend**  | HTML, CSS, JavaScript                         |
| **Backend**   | AWS Lambda (Python), REST API via API Gateway |
| **Database**  | Amazon DynamoDB                               |
| **Infra**     | Serverless Architecture on AWS                |

---

## 🚀 Features

### 📬 Contact Form
- Appears in both **Home** and **Contact** pages
- Fields: Name, Email, Message
- Data sent to API Gateway and stored in DynamoDB

### 📦 Physical Donation Form
- Donor Details: Name, Email, Phone
- Address: Street, City, State, etc.
- Items: Dynamic item list using the `Add More` button
- All data saved in DynamoDB

### 💸 QR Code Donation (UI Only)
- Embedded Google Pay UPI QR code
- Simple, clean user experience (no backend logic)

---

## 🎥 Video Walkthrough

📽️ [Click here to watch full website walkthrough](https://youtu.be/ALYKmqZpusY)

---

## ⚙️ Backend Logic

The project uses **two Lambda functions**:

### 1. `submit-contact`
- Triggered by: Contact form
- Saves: Name, Email, Message to `ContactMessages` table

### 2. `submit-donation`
- Triggered by: Donation form
- Saves:
  - Donor name, email, phone
  - Address (street, landmark, city, state, pincode)
  - Array of donation items
  - Timestamp
- All data saved in `ItemDonations` table

Each Lambda is connected to an API Gateway endpoint, with **CORS enabled** for frontend integration.

---

## ✅ Project Status

- ✔️ Fully completed and functional  
- ✔️ Hosted locally / test environment  
- ✔️ Backend serverless (no PHP or Node.js used)  
- ✔️ Code well structured and documented

---
## 🙌 Credits

This website was designed and developed by **Dip Shill**, utilizing modern frontend design and cloud-based backend infrastructure.

---

## 📬 Contact

🔗 [LinkedIn – Dip Shill](https://www.linkedin.com/in/dip-shill-010814211/)  
📫 Feel free to connect or message for any queries, feedback, or collaborations!

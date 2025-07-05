# 🌟 KindDoner – A Donation Management Website

KindDoner is a colorful and responsive donation platform that allows users to:
- 💬 Send contact messages
- 📦 Submit physical donation details (with item list and address)
- 💸 Scan a QR to donate money via UPI

---

## 🔧 Tech Stack

| Frontend        | Backend         | Cloud Infra |
|----------------|-----------------|-------------|
| HTML, CSS, JS   | Python (Lambda) | AWS Lambda  |
| Responsive UI   | RESTful APIs     | API Gateway |
| QR Code UX      | Error Handling   | DynamoDB    |

---


## 🏗️ Architecture

![architecture_diagram](https://github.com/user-attachments/assets/003cffd8-18e4-4a03-a057-18bbdf0b0b96)


---

## 🖼️ Key Features

### 📬 Contact Us (x2)
- Name, Email, Message
- Stored in DynamoDB via Lambda function

### 📦 Physical Donations
- Donor details, address
- Dynamic list of items (`Add More`/`Remove`)
- Submitted to DynamoDB through a secure API

### 💸 Donate Money (QR Code)
- Static QR Code for Google Pay / UPI
- No payment gateway used — just a clean UI for scanning
- Designed to look dynamic and user-friendly

---

## 📸 Screenshots

> Include screenshots of:
> - Homepage
![homepage](https://github.com/user-attachments/assets/743bc3b7-6205-4c46-b275-0814a008e346)

> - Donation Page
![donation_details](https://github.com/user-attachments/assets/92a867ca-5b96-4988-9c43-a7fd9462d0cd)
![donation_item](https://github.com/user-attachments/assets/8423a50a-faf0-4048-a1a9-2dd1d22baed6)
> - Submitted Successfully
![donation_completed](https://github.com/user-attachments/assets/a6c0fc79-da90-4062-8cb3-75136c87cc30)

> - Contact Page
![2025-07-04_23-45](https://github.com/user-attachments/assets/c08bbc87-6f53-4596-89ee-050d3f3ea16d)
> - Submitted Successfully
![contact_success](https://github.com/user-attachments/assets/dbefac53-b274-4b16-9a22-0b4d3b92dbdb)

> - QR Code Donation View
![image](https://github.com/user-attachments/assets/5515f1cc-9a5a-46e0-a993-16711f0c7528)

---

## Video
Here is a video of the website walkthrough.
https://youtu.be/ALYKmqZpusY



## ✅ Status

✔️ Completed  
✔️ Tested and working  
✔️ Backend connected via AWS  
✔️ Fully responsive frontend

---

## 🙌 Acknowledgements

Project fully built and maintained by **Dip Shill**  
Frontend + Cloud Backend (solo effort)

---

## 📬 Contact

For any queries, feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/dip-shill-010814211/)!



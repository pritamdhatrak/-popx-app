# PopX React Assignment

This project is a simple ReactJS application built for the PopX UI assignment.  
It follows the provided Adobe XD design and replicates a mobile app interface in the center of the screen.

---

* About the Project

The app contains a few key screens:

- **Welcome Page** – Introduction screen with buttons to either create a new account or log in.
- **Create Account Page** – A form for new users to enter details like name, email, password, and company information.
- **Login Page** – A form for existing users to sign in using email and password.
- **Account Settings Page** – Displays the user’s name and email that were entered in the previous steps.  
  A random image is shown beside the profile info, similar to an avatar placeholder.

All navigation between pages is handled using **React Router**, and user details are maintained in a **React Context** so they can be shared easily between screens.

---

* Features

- Pixel‑perfect layout based on the given design  
- Centered mobile‑view frame (350 × 700 px)  
- Functional navigation between pages  
- Dynamic user name and email display  
- Clean and minimal React component structure  
- Random image used for profile avatar  
- Fully responsive inside the mobile frame  



 *Tech Stack

- **React JS (Create React App)**
- **React Router DOM**
- **Context API for global state**
- **CSS for styling**

---

* How to Run Locally

```bash
# Clone the repository
git clone https://github.com/pritamdhatrak/-popx-app.git
cd popx-app

# Install dependencies
npm install

# Start the app
npm start
The app will run on http://localhost:3000


🌐 Deployment
The project is hosted on Vercel.
You can view the live version here:

Live Demo
vercel link:-https://popx-app-ebon.vercel.app/
 Author
Created with attention to detail and care for clean code.
This project was built as part of the PopX Frontend Assignment.

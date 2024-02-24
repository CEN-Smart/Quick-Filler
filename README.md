# Quick Filler

## Introduction

Quick Filler is an innovative online gas filling platform that revolutionizes the industry by integrating cryptocurrency XRP for secure and swift transactions. This platform offers a comprehensive solution for both cooking gas and petrol services, providing users with a seamless and user-centric experience.

## Table of Contents

- [User Guide](#user-guide)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## User Guide

### User Personas

- Tech-Savvy Sam: A young professional who values convenience and efficiency.
- *Environmentally Conscious Emily:* Seeks eco-friendly alternatives and is interested in supporting sustainable practices.

### User Journey

1. **Discover Quick Filler:** Learn about Quick Filler through online advertisements, social media, or word-of-mouth recommendations.
2. **Sign-Up Process:** Register on the Quick Filler app, providing basic information, and set up the account.
3. **Gas Ordering:** Select preferred gas type, choose quantity, and initiate payment using XRP.
4. **Gas Filling:** Schedule delivery for cooking gas or locate the nearest gas station for petrol filling.
5. **Payment Confirmation:** Receive confirmation of payment and transaction details on the app.

## Technology Stack

### Backend (Java)

- **Framework:** Spring Boot
- **Database:** PostgreSQL
- **Authentication:** Spring Security
- **XRP Transactions:** xrpl4j

### Frontend (React)

- **Library:** React
- **State Management:** Redux
- **Styling:** Bootstrap
- **API Integration:** Axios

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-username/quick-filler.git
```

2. Navigate to the project directory:

```bash
cd quick-filler
```

3. Install dependencies:

```bash
# For backend
cd backend
mvn install

# For frontend
cd ../frontend
npm install
```

## Development

- Ensure Java and Node.js are installed.
- Start the backend server:

```bash
cd backend
mvn spring-boot:run
```

- Start the frontend development server:

```bash
cd frontend
npm start
```

## Testing

- Unit testing for React components using Jest and Enzyme.
- Backend testing using suitable testing frameworks.

## Deployment

- Host the frontend on platforms like Netlify or Vercel.
- Deploy the backend on cloud services such as AWS or Heroku.

## Contributing

We welcome contributions! Please check out our [Contribution Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [MIT License](LICENSE).

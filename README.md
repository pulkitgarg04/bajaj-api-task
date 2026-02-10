# BFHL Backend API

It provides a RESTful service with endpoints to perform various mathematical operations and AI-based responses using Google Gemini.

## Project Description

The API is built using Node.js and Express. It serves two main endpoints:
1.  **POST `/bfhl`**: A multifunctional endpoint that accepts JSON input and performs one of the following operations based on the provided key:
    -   **Fibonacci**: Generates a Fibonacci sequence.
    -   **Prime**: Filters prime numbers from an array.
    -   **LCM**: Calculates the Least Common Multiple of an array of numbers.
    -   **HCF**: Calculates the Highest Common Factor (GCD) of an array of numbers.
    -   **AI**: Uses Google Gemini to answer a question with a single word or short phrase.
2.  **GET `/bfhl`**: A simple health/operation code check endpoint.

## API Specification

### 1. POST /bfhl

**Endpoint:** `POST https://bajaj-bfhl-api.pulkitgarg.in/bfhl`

**Request Body Schema:**
The request must contain **exactly one** of the following keys:

| Key | Type | Description |
| :--- | :--- | :--- |
| `fibonacci` | Integer | Generate Fibonacci sequence up to `n` terms. |
| `prime` | Array of Integers | Filter prime numbers from the list. |
| `lcm` | Array of Integers | Calculate LCM of the numbers. |
| `hcf` | Array of Integers | Calculate HCF of the numbers. |
| `AI` | String | A question for the AI. |

**Example Requests:**

*Fibonacci:*
```json
{
    "fibonacci": 7
}
```

*Prime Filter:*
```json
{
    "prime": [10, 2, 5, 7, 8]
}
```

*AI Question:*
```json
{
    "AI": "What is the capital of India?"
}
```

**Response Structure (Success):**

```json
{
    "is_success": true,
    "email": "pulkit0940.be23@chitkara.edu.in",
    "fibonacci_series": [0, 1, 1, 2, 3, 5, ...]
}
```

### 2. GET /bfhl

**Endpoint:** `GET https://bajaj-bfhl-api.pulkitgarg.in/health`

**Response:**
```json
{
    "is_success": true,
    "official_email": "pulkit0940.be23@chitkara.edu.in"
}
```

## Setup and Installation

### Prerequisites
-   Node.js (v14 or higher)
-   npm (Node Package Manager)
-   Google Gemini API Key

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pulkitgarg04/bajaj-api-task
    cd bajaj-api-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    GEMINI_API_KEY=my_gemini_api_key
    OFFICIAL_EMAIL=pulkit0940.be23@chitkara.edu.in
    ```

4.  **Run the server:**
    ```bash
    node index.js
    ```

The API will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
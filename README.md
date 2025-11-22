# Tablet POS Interface Prototype (React Native / Expo)

## Project Objective

This project is a functional prototype of a Point of Sale (POS) Order Processing Screen, designed for tablet devices in landscape orientation. The objective was to recreate the attached interface screenshots, demonstrating proficiency in the specified modern React Native tech stack and clean UI/UX implementation.

## Tech Stack & Requirements

This application was built from scratch adhering strictly to the following required technologies:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | **React Native (Expo)** | Primary development platform. |
| **Language** | **TypeScript** | Strict typing used throughout the codebase. |
| **Styling** | **NativeWind** | Styling and layout implemented using Tailwind CSS utility classes for React Native. |
| **State Management** | **Zustand** | Used for managing global cart state, including adding/removing items and calculating totals. |
| **Icons** | **Lucide-React-Native** | Used for all interface icons. |

## Key Features

The prototype successfully implements the core functionality required for the Order Processing Screen:

### Menu Section (Right Column)
* **Category Filtering:** Products are filtered dynamically based on the selected category.
* **Product Selection:** Clicking a product opens the **Item Details Modal**.
* **Item Details Modal:** Allows users to set a specific **Quantity** and add **Notes** before adding the item to the cart.

### Cart Section (Left Column)
* **Dynamic Cart Management:** State is managed via **Zustand** for seamless add, remove, and clear operations.
* **UI Precision:** Item names in the cart are correctly displayed and long names are truncated with `...` (using `numberOfLines={1}`) to maintain UI integrity and visibility.
* **Automatic Calculations:**
    * Calculates **Subtotal** (sum of all items).
    * Calculates **10% Tax** on the subtotal.
    * Calculates **Total** (`Subtotal + Tax`).
* **Pay Button:** Displays the final dynamic total amount.

##  Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Appyouz/pos-tablet-app.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the application:**
    ```bash
    npm expo start
    ```
    (Select the **Web** or **Android/iOS Simulator** option and ensure it runs in **Landscape mode** to view the tablet layout.)

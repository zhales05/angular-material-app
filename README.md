# Angular Material App

## Overview

**angular-material-app** is a demonstration and experimentation project built with Angular and Angular Material.

## Features

- Demonstrates the use of Angular Material components such as toolbars, buttons, icons, and more.
- Easily extendable for additional experimentation or feature integration.

## Prerequisites

Before running the application, ensure you have the following installed on your machine:

- Node.js (version 12 or above)
- Angular CLI

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/angular-material-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd angular-material-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Add Angular Material to your project (if not already added):

   ```bash
   ng add @angular/material
   ```

5. Choose a theme when prompted (e.g., "Indigo/Pink").

## Running the Application

To start the development server, run:

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/` to view the app.

## Style Guide

Color Palette
1. Primary Colors
- Midnight Blue (#145da0)
    Usage:
    Primary buttons (e.g., "Submit" or "Next").
    Headers and navigation bars.
    Main sections to create a strong visual impact.
    Contrast: Ensure sufficient contrast against light backgrounds for legibility.
- Dark Blue (#0c2d48)
    Usage:
    Backgrounds for sections that need depth.
    Footers, headers, or any container elements.
    Text or icons in light color for high contrast.
    Effect: Creates a strong foundation and stability in the design.

2. Secondary Colors
- Blue (#2e8bc0)
    Usage:
    Secondary buttons or links.
    Accent elements, like borders or highlights.
    Status messages (info or neutral alerts).
    Effect: Adds vibrancy and draws attention without overpowering.
- Baby Blue (#b1d4e0)
    Usage:
    Backgrounds for forms or lighter sections.
    Hover effects for buttons or links.
    Secondary backgrounds to create a soft, inviting atmosphere.
    Effect: Keeps the design friendly and approachable.

3. Accent Colors
- Emerald Green:
    Hex: #4CAF50
    Usage: This vibrant green can be used for action buttons (e.g., "Confirm," "Save"). It stands out against the blues and conveys growth and success.
- Lime Green:
    Hex: #8BC34A
    Usage: A brighter option that can also serve as an accent for notifications or success messages. Use it sparingly for a pop of color.
- Forest Green:
    Hex: #228B22
    Usage: A darker, richer green that can be used for important action buttons. It complements the blues nicely and adds an earthy feel.
4. Alternative Accent Colors (Yellow/Red)
- Yellow:
    Hex: #FFEB3B
    Usage: Great for warnings or alerts, but use sparingly to avoid overwhelming the palette. It provides a bright contrast but may not fit the overall theme as well as green.
- Red:
    Hex: #F44336
    Usage: Use red for critical alerts, errors, or actions requiring caution. It should be used sparingly to indicate danger or urgency.
5. Example Usage in the App
Primary Button: Use Midnight Blue (#145da0) with white text.
Secondary Button: Use Blue (#2e8bc0) with white text.
Action Button: Use Emerald Green (#4CAF50) for positive actions, ensuring sufficient contrast.
Alert: Use Red (#F44336) for error messages, ensuring the background is dark or neutral for contrast.
Warning: Use Yellow (#FFEB3B) for warnings or important notices.
## Acknowledgements

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)

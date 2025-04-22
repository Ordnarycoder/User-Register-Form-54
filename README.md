# User Registration Form

This is a simple, responsive user registration form built with HTML, CSS, and JavaScript. It features client-side form validation and uses local storage to store user data.

## Features

- **User-friendly interface** for registration.
- **Client-side validation** (username, email, password, confirm password).
- **Data persistence** using browser's local storage.
- **Instant feedback** on form input errors.

## Technologies Used

- **HTML5** for form structure and validation attributes.
- **CSS3** for clean and responsive design.
- **JavaScript (Vanilla)** for interactive validation and data management.
- **Local Storage** for storing user data in-browser.

## Project Structure

```
registration-form/
├── index.html
├── styles.css
└── app.js
```

## How to Run

Simply open `index.html` in your web browser.

```
registration-form/index.html
```

## Usage

1. Fill out the registration form with username, email, password, and password confirmation.
2. Client-side validation will guide you to correct any mistakes immediately.
3. Upon successful registration, the user details are stored in local storage.

## Validation Rules

- **Username**: 3-20 characters, letters, numbers, and underscores only.
- **Email**: Must be a valid email format.
- **Password**: Minimum 6 characters.
- **Confirm Password**: Must match the Password field exactly.

## Future Improvements

- Implement password encryption for enhanced security.
- Add a login page to authenticate registered users.
- Expand user profile options.

## License

This project is open-source and available under the MIT License.


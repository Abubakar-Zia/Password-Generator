# Password Generator

A simple web-based password generator that creates secure, random passwords.

## Features

- Generates 24-character passwords
- Includes a mix of special characters, numbers, uppercase, and lowercase letters
- Copy to clipboard functionality
- Responsive design

## Usage

1. Open `index.html` in a web browser.
2. Click the "Generate Password" button to create a new password.
3. Click the "Copy" button to copy the generated password to your clipboard.

## Technical Details

- Built with HTML and JavaScript
- Uses CSS for styling (link to external `styles.css` file)
- Utilizes Google Fonts for typography

## File Structure

- `index.html`: Main HTML file containing the structure and JavaScript code
- `styles.css`: External CSS file for styling (not included in the provided code)
- `Images/pngegg.png`: Favicon image

## Password Generation Algorithm

The password is generated using the following method:
1. Combines special characters, numbers, uppercase letters, and lowercase letters
2. Ensures at least 3 characters from each category
3. Randomizes the order of characters
4. Trims the final password to exactly 24 characters

## Browser Compatibility

This application uses the `navigator.clipboard` API for copying text, which may not be supported in all browsers. Please check browser compatibility before use.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or find any bugs.

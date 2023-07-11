## Speed Keys
Welcome to Speed Keys, the ultimate typing test and accuracy finding site! If you're looking to improve your typing speed and accuracy, you've come to the right place. Speed Keys provides a fun and challenging platform for users to enhance their typing skills and measure their accuracy.

Our site offers a focused approach to typing practice, currently allowing you to practice on eight specific keys. By narrowing the scope, we aim to provide a targeted and efficient learning experience, enabling you to master these keys with precision and speed. Whether you're a beginner looking to build a solid foundation or an experienced typist striving for perfection, Speed Keys has something to offer.

#
Link to site :https://navpreet032.github.io/SpeedKeys/
#


# User Manual
# Next Key
The "Next Key" section represents the next key that the user needs to press during the typing test. It serves as a visual indicator to guide the user through the typing exercise.
# User Input Field
The "User Input Field" displays the keys pressed by the user during the typing test. It updates in real-time as the user types. If the user presses the wrong key, the corresponding input turns red, indicating an incorrect keystroke.
![image](https://github.com/navpreet032/chaabi_assignment/assets/55250212/a5ee10c3-26cf-4270-b001-c92f618a3465)
# Accuracy
The "Accuracy" section shows the number of correct keys pressed by the user. It provides a measure of the user's accuracy in typing. The accuracy count updates dynamically as the user types.
# Select Mode
The "Select Mode" feature allows the user to choose between three typing modes: unigram, bigram, and trigram. Each mode represents different levels of difficulty and complexity in typing exercises.
# Start Button

The "Start" button initiates the typing test. Once the user clicks the "Start" button, a 5-minute timer begins, and the user can start typing the prompted keys. The typing test measures the user's speed and accuracy during the 5-minute duration.
# Technologies Used

    - React: A JavaScript library for building user interfaces.
    - JavaScript: The programming language used for client-side functionality.
    - Redux: A state management library for managing application state.
# Purpose of Redux

Redux is used in the code to manage the application's state. It provides a centralized store that holds the state of the application and allows components to access and update the state in a predictable manner. In this assignment, Redux is used for the following purposes:

# Increment

The Increment action is used to increment the keypress count. When a user presses a key, the Increment action is dispatched to the Redux store, which updates the keypress count accordingly.

# Amount

The Amount action is used to set the keypress count to a specific value. Although the original purpose of this action is to set the keypress count to any value, in this assignment, it is specifically used to set the keypress count to 0.

# takeTest

The takeTest action is a boolean value that determines whether the 5-minute test component should be rendered. If the takeTest value is true, indicating that the user wants to take the test, the 5-minute test component will be rendered.

# Additional Features

- **Wrong Key Highlight**: If the user presses the wrong key, it will be highlighted in red to indicate the error.

- **Partial Text Highlight**: In the 5-minute typing test, as the question can be lengthy, the portion of text that the user has written will be shown in orange color, while the rest of the text will be displayed in grey.
![image](https://github.com/navpreet032/chaabi_assignment/assets/55250212/dec851ad-c5c8-43a6-8ef9-96e60467b318)

- **Randomly Generated Text** : All the text which is given to user is randomly generated so every time user gets random challange

# Getting Started

1. Clone the repository: `https://github.com/navpreet032/Typing-Tester.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open the application in your browser: `http://localhost:3000`

# TODO

## Setup

- :white_check_mark: ~~Setup repo: Golang backend, JS frontend. Serve a barebones html site using embedded static files~~
- :white_check_mark: ~~Infrastructure: deploy to EC2~~
- :white_check_mark: ~~CI/CD: GitHub actions~~

## Dashboard

- Profile (top left)
- Create a room button opens `Create Room` modal
- Join a room button opens `Join Room` modal
- List of all games as cards in a gallery, with the title and image
- Hovering over the card flips it, showing the title but with a short description and the number of possible players
- Clicking a card
  - If the correct number of players are in the room will replace the existing dashboard and load the related game instead
  - Fancy animation where the cards are whisked away and the game transitions in from the top?
  - Will do a shake animation on the card if the there are not enough players (red validation message on the card too, although maybe not)
- Exiting any game will bring back the dashboard

### Profile

- A way to input / change your name
- Avatar placeholder
- Use anon if none exists yet?
- Stretch
  - Avatar generator
  - Transfer profile button

### Create room

- Modal
  - UI: a title, generate button, cancel button and some explanatory text, a generated id should appear by default
  - `Copy Code` button that copies the generated id to clipboard
  - Generate button will regenerate a new ID
  - Create button creates the room and closes the modal
  - Cancel button closes the modal
- If you have a room active, you can't create a second room
- Creating a room creates a room sidebar below the profile

### Join room

- Modal popup with a title, input textbox, explanatory text and a submission button
- Clicking the submission button
  - Valid code entered will close the modal and admit you into a room
  - Invalid code will have a validation message, the modal will stay open

### Room sidebar

- When a room is created
  - Add a room title (maybe room creator's name + room?)
  - Add the room id
  - The room creator appears as a participant (crown next to name)
  - Display number of people in the room
  - Leave room button
    - Leaving the room, removes their name from the list and lowers the number of participants by one
    - If the owner leaves the room while people are still in it, randomly select someone else to be the new owner
    - If the last person leaves the room the room is destroyed
    - Grayed out if not in the room
  - Score
    - Defaults to 0
    - When a new game is started, reset score to 0
    - Score incremented based on game results
    - Sort by top score when score changes
    - Show arrows indicating people who have moved up/down

## Games

- All games have a leave room button
  - If the room owner presses the button, leaves the game and rerenders the dashboard
  - If not the room owner, the button is grayed out

### Doodl

- On game load
  - Render canvas
  - Render selection of colours
  - Render brush sizes
  - Render answer window with textbox
  - 3 rounds by default
  - Randomly order the room participants
- Game loop
  - Select the next player
  - The selected player
    - Give them a selection of three random drawable things
    - Give them 10 seconds to select. Pick a random one if they fail to select in time
    - Give them access to draw on the canvas, the objective is to draw the thing well enough that people understand what it is in a time limit
    - When the time limit is up, score points depending on how many people guessed the drawing and how quickly
    - Chat window is disabled for this player
  - The other players
    - Gets notified on who is selected
    - Is given continuous updates of what the selected player is drawing
    - Guess what the selected player is drawing within the time limit
    - Input answers into the chat window
    - Getting a correct answer awards points. The sooner the answer is found the more points earned
    - Not getting the answer in time leads to 0 points earned
  - Hint
    - Number of letters in the word / phrase
    - Randomly fill in letters as the timer ticks down
  - Time limit shown on screen: 60 seconds that ticks down to 0
  - Score screen at the end of each turn to show incremented points
  - Repeat this for however many rounds configured
  - When all rounds end
    - Podium with top 3 players
    - Button to play again

## Extra

- Periodically destroy old existing rooms

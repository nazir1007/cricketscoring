## CRICKET SCORING MERN STACK ASSIGNMENT

# Project Overview

The Cricket Scoring Project aims to develop a robust backend system using Node.js and
TypeScript is used to track and update cricket scores accurately. The system will handle various
scenarios in cricket scoring, including special cases like overthrows, no-balls, wides, and
wickets. The project will involve creating a flexible and dynamic data schema to manage scoring
outcomes and an admin panel frontend interface for real-time scoring and editing capabilities.

# BACKEND TASK

# Technology Stack

● Backend: Node.js with TypeScript

● Database: MongoDB

● API Framework: Express.js 

# Schema Design

The developer is responsible for designing the payload schema to be sent from the frontend.

The schema should handle various cricket scoring scenarios, including but not limited to:

● normal

● normal with overthrow

● overthrow

● bye

● bye with overthrow

● legbye

● legbye with overthrow

● noball

● No ball with overthrow

● noball with bye

● No ball with a bye and an overthrow

● noball with legbye

● noball with legbye and overthrow

● wide

● wide with overthrow

● wide with bye

● wide with a bye and an overthrow

● wide with legbye

● wide with legbye and overthrow

● wicket


Outcome Effects
Each scenario will have specific effects on the batsman's stats, bowler stats, extras, team stats,
and the overall match progress. The developer must implement some of these unique effects as described below:

1. Wide + runs:
   
   ○ No balls increase.

   ○ 1 run conceded in the bowler data.

   ○ All runs are added to the team data.

   ○ No runs are credited to the batsman.

   ○ Wide extra includes all runs.

2. Noball + bye:
   
   ○ Batsman balls increase by 1.

   ○ 1 run conceded to the bowler data.

   ○ All runs are added to the team data.

   ○ No runs are credited to the batsman.

   ○ 1 run credited to a no-ball in extras and others added as a bye.

3. Noball + runs:
   
   ○ Batsman balls increase by 1.

   ○ All runs are considered for bowler data.

   ○ All runs, except 1, are credited to the batsman.

   ○ 1 run is credited to a no-ball in extras.

4. Noball + legbye:
   
   ○ Batsman balls increase by 1.

   ○ 1 run conceded to the bowler data.

   ○ All runs are added to the team data.

   ○ No runs are credited to the batsman.

   ○ 1 run is added to a no-ball in extras and others as a legbye.

5. Legbye/Bye + Overthrow:
   
   ○ Treated as a normal legbye/bye.

   ○ All runs added in extras as bye or legbye.

6. Runs + OT (Overthrow):
   
   ○ All runs credited to the batsman's account.

## Version

- node - v20.17.0,
- express: v5.1.0,
- mongoose: v8.13.2,
- cors: v2.8.5,
- dotenv: v16.5.0,
- typescript: v5.8.3,

# FRONTEND TASK

The frontend will include an Admin Panel UI. The actual project UI will be provided as a
reference. The developer will need to incorporate several buttons and features in the UI,
such as:

○ Buttons for adding extras, overthrows, byes, leg byes.

○ Batsman and bowler scorecards (balls/runs for batsman; over/runs/maidens for bowler).

○ Last wicket details, runs/over.

○ Handling tick/untick functionality on buttons.

○ Adding or removing deliveries in case of scoring errors.


## Version

- axios: v1.8.4,
- react: v19.0.0,
- react-dom: v19.0.0

## created_at

24 APR 2025

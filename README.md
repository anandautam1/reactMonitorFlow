# ReactMonitorFlow
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Waterway monitoring can be a difficult task without a proper set of equipment. Ideally, the equipment used for monitoring should be lightweight and should have long battery life; Internet of Things (IoT) matches these criteria perfectly for waterway monitoring.

Zigbee network devices will be used in this project which implement a mesh type network. End devices to act as sensors, routers route information in the network, and coordinators establish and manage the network. The ‘ZigFlo’ project aims to effectively reduce the workload strain on waterway measurement specialists.

For easy access on the logged parameters, the information is sent to a web page interface for the user to view the data in a readable and interactive manner without having to visit the waterway site. The measured water parameter information that was sent from each sensor was continuously sent to and  monitored from the web User Interface (UI).

## Infrastrucure
![alt text](relative/assets/Infrastructure.png)

## THIS PROJECT REQUIRE FIREBASE DEPENDENCY
Firebase connector is needed as it handles the login authenticatio before going in and check the actual data. 

## Quick start
1. Clone this repo using `git clone https://github.com/anandautam1/reactMonitorFlow`
2. Move to the appropriate directory: `cd reactMonitorFlow`.<br />
3. Run `npm install` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm start` to start the example app.

Climate Action Pledge Microsite

This project was developed as part of the Deepwoods Web Development Internship assignment.
It is a single-page web application that encourages users to take climate-friendly pledges and generates a digital certificate upon submission.

Problem Statement 
>>Users can commit to eco-friendly actions through a pledge form
>>Pledge data is recorded and displayed publicly
>>Key engagement statistics (KPIs) update dynamically
>>Users receive a certificate immediately after submitting the pledge
>>Backend interaction is simulated using Google Sheets or dummy JSON

Solution Approach
>>A responsive pledge form with validation
>>Dynamic counters that update on each pledge submission
>>A public pledge wall that displays participant details and commitment level
>>Automatic generation of a personalized certificate
>>PDF download support for certificates
>>A Google Sheets integration through Apps Script to simulate backend storage

Features Built
>>Climate pledge submission form (Name, Email, Phone, State, Profile type, Commitments)
>>Real-time KPI update (Total pledges count)
>>Certificate generation with participant name and commitment stars
>>Option to download the certificate as a PDF
>>Pledge wall populated dynamically from form input
>>Google Sheets used as a backend simulation for data storage
>>Fully responsive layout for different screen sizes
>>Privacy consideration: phone number and email are collected but not exposed publicly


System Workflow
1.User fills the pledge form
2.JavaScript validates the inputs
3.Pledge details update live statistics
4.Pledge wall displays new pledge immediately
5.Certificate is generated dynamically with the user's details
6.Certificate can be downloaded as PDF
7.Data is simultaneously sent to Google Sheets via API call

 
climate_pledge_app/
│── index.html
│── style.css
└── script.js

Website:
[Climate Pledge Web App](https://dharnish0310.github.io/climate_pledge_app)


Author
Dharnish Barath

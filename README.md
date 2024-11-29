# Next delivery message task

## Frontend

### How to run

From the client directory

- Run yarn to install the dependencies
- Run yarn dev to start
- Follow the instructions below to spin your local backend
- Access the app at http://localhost:5173/welcome/<SOME-USER-ID>

## Backend

### How to run

From the server directory

- Run yarn to install the dependencies
- Run yarn start to spin the API
- Open another tab in your terminal to test by running curl http://localhost:3000/comms/your-next-delivery/<SOME-USER-ID>

## Notes

- Even if that was not explicitly written in the instructions, I only included the cats with an active subscription in the title and message. This makes more sense to me, but I hope no cat was offended in the process.
- The domain folder, duplicated in client and server, would ideally be shared between the two.
- I assumed that when loading and in case of errors, nothing should be displayed
- The responsiveness could be improved.

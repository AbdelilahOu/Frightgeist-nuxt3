# Voting app

## Features :

- Create question at a time
- Cant vote more than one time within a minute
- Show countdown of the question
- Show winner

## Issues :

- [ ] We are listening on table Vote which means even if theres a vote that doesnt concern the question you are in you will recieve changes still

- [ ] Unauthorized changes means you dont get the old or the new row

- [ ] The changes are slow (listening on changes send a request for newer data, update store data)

- [ ] Votes are stopped whene the time is over but its done in the front how about we check for endsdate in the backend

- [x] duplicate Votes (changed vote.create to vote.upsert)

- [x] Something is wrogn with middlewares i guess

## Improvements :

- [x] whene a question is created by the user we force the user to stay in the question page till the time is ended (done by creating an other middleware and abortNavigation helper)

- [x] reduce picked time to few minutes

- [x] dont allow user to create an other question if the theres an active one (useCookie)

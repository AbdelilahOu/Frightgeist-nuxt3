# Voting app

## How it works :

### whene creating a question :

- Create your question give it a time and options...
- Whene the question is created we navigate to the question/:id page
- Since you created the question you cant leave until the question time is ended (whats the point of creating a question and just leave it there)

### whene particepating on a question :

- Navigate to the question
- make a vote
- you are not allowed to make an other vote till 1 minute later
- whene voting again the old vote is updated

## Issues :

- [ ] We are listening on table Vote which means even if theres a vote that doesnt concern the question you are in you will recieve changes still

- [ ] Unauthorized changes means you dont get the old or the new row

- [ ] The changes are slow (listening on changes send a request for newer data, update store data)

- [x] Whene a user makes a vote we register the vote in the pinia store so that whene he changes it we only update the last but if he reloaded the page the vote will be gone and if he chnages his vote it adds it as a new vote, we could chnage this by puting it in the cookie but its gone after one minute I could use localStorage but im not a fan really

- [x] duplicate Votes (changed vote.create to vote.upsert)

- [x] Something is wrogn with middlewares i guess

## Improvements :

- [x] whene a question is created by the user we force the user to stay in the question page till the time is ended (done by creating an other middleware and abortNavigation helper)

- [x] reduce picked time to few minutes

- [x] dont allow user to create an other question if the theres an active one (useCookie)

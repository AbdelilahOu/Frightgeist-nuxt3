# Voting app

## Issues :

- [ ] We are listening on table Vote which means even if theres a vote that doesnt concern the question you are in you will recieve changes still

- [ ] Unauthorized changes means you dont get the old or the new row

- [ ] The changes are slow (listening on changes send a request for newer data, update store data)

- [ ] Votes are stopped whene the time is over but its done in the front how about we check for endsdate in the backend

### new Idea which will help us in some part of the app :

- [ ] whene a question is created by the user we force the user to stay in the question page till the time is ended

- [ ] reduce picked time to few minutes

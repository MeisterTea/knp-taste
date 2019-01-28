# KNP Taste guidelines

Welcome at KNP !

If you're reading this, chances are you're about to work on a front project
based on React. This little guideline is here to help you to familiarize with
KNP practices & tools regarding front end applications development.

## Expected features

You're going to work on a little TODO application. We're NOT expecting you to
cover all scenarios below.

### Minimal scenarios that has to be covered
- As a regular user, when I click on "Add another card", then a new empty card
should be created and focused so I can enter the title of the card.

- As a regular user, given I've clicked on "Add another card" and written some
text in it, when I press "return", then the new card should be created.

- As a regular user, given I've clicked on "Add another card" and I pressed the
"escape" key, then the new card should be removed.

- As a regular user, when I click on the little remove button over an existing
card, then I should see a confirmation message.

- As a regular user, given I've clicked on the remove button over an existing
card and I clicked on "ok", then the card should be removed.

### Other ideas
- In the edition of a card, search members and add members to a card.
- In the edition of a card, search labels and add labels to a card.
- Mock the persistence of your cards to an API using epics...

## Expected delivery

You can either fork that repository to your own account or open a pull request
on this one so we can review your work. Don't forget to always self review your
code before submitting it to us !

## To begin

Clone the [KNP React App](https://github.com/KnpLabs/knp-react-app) repository.
This is the bootstrap we use for most of our recent front end projects, based on
Facebook's [Create React App](https://github.com/facebook/create-react-app).
See the [README](https://github.com/KnpLabs/knp-react-app/blob/master/README.md)
to ensure a basic understanding of the architecture and tools to be used on your
project.

## Icing on the cake

- Redux reducers should be covered by a jest test file
- Epics should be covered by a jest test file
- This is a functional project, so keep it functional. Use as less imperative
code as possible (if you use some, be prepared to discuss :D).
- Functions should be properly documented using HM signatures. See some examples
[here](https://hackernoon.com/function-type-signatures-in-javascript-5c698c1e9801)

## General reccomandations

- Don't focus on HTML or design. Rather prefer to demonstrate working features.
- Keep it simple.
- Ask your questions, we're kind :)

# Development

### Link to Deployed Website

`https://cozycat17.github.io/development/`

### Goal and Value of the Application

The application allows people to learn about different animals. The intended audience is a
zoo designer who is trying to pick which animals to select for their zoo.

### Usability Principles Considered

Learnability: The website follows a similar pattern to most shopping websites with the filter and sorting bar. The plus is a clear clickable area to add items to the "cart"

Errors: Errors may happen when too many filters are applied and no options appear -- this
isn't technically an error but it will be obvious what happened because it will be a direct
result of clicking a filter checkbox.

### Organization of Components

The app is orginized as follows:
App \
....FilterBar (handles all filtering/sorting) \
....AnimalList (displays a list of animal cards) \
........AnimalCard (diplays key animal information) \
....SideCart (shows the average lifespan of selected animals) \

### How Data is Passed Down Through Components

On the top level there is:

1. A list of all animals/data
2. A dictionary of filters name -> filter function
3. A list of agregated animals (zoo)

-AnimalList and FilterBar use the first 2 states to control the visible cards
-AnimalCard and SideCart use the zoo state to keep track of aggregated state.

### How the User Triggers State Changes

The user triggers state changes by changing the state of checkboxes, or the sorting method
or by clicking the plus icon on cards

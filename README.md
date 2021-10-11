# Scran
SEI Project Two

# Overview
The concept behind Scran was to provide users who are indecisive about what meal to cook a random recipe generated from The Meal DB API. Originally we intended to include filter functions so users could whittle down things such as the type of cuisine they were after and dietary requirements. Due to time constraints we decided to strip this back into this simpler form.

The project was completed in a group of three via pair programming. My main focus was implementing the API functionality and setting up the random meal page. My two group members worked on the meal show page and the meal category page.

# Brief
We were tasked with creating a frontend web application in React that implemented a third party API of our choice. The project required us to include wireframes and multiple pages. This was a 48 hour hackathon-style challenge which was completed as a group of three with Tomas Hedberg and Victor ReySantos.

# Link
https://scran.netlify.app/

# Instructions
* Clone or download the repo
* `npm i` - Install dependencies
* `npm run dev` - Start the development server

# Technologies Used
* React
* JSX
* Axios
* Bulma
* SCSS
* React Router Dom

# API Used
https://www.themealdb.com/api.php

# Process
Due to the project's tight turnaround time our initial steps were to discuss what type of API we wanted to use in order to speed up the search process. We decided on a food API as there are an abundance of free ones out there which we could use.

We then sketched out a rough wireframe to fit our initial idea with various filters to generate a selection of meals for the user to choose from. We knew from this we would need an API that would enable us to get the full database of meals and also a meal from the ID for the show pages.
![scran-wireframe](https://user-images.githubusercontent.com/71222270/136862505-18e9ca29-cf07-4c71-b205-31758c5db4bd.png)
As previously mentioned we ran into some issues getting the first couple APIs we chose to work. After troubleshooting we realised these were merely sample APIs that wouldn’t allow us to access the whole database. With time waning we came across The Meal DB which seemed perfect as it had its own GET random meal functionality, thus saving us a bit of time building this. We quickly decided to go down this route, cut back the filter functionality and crack on with building the application.

As soon as we were all happy with the route forward we began pair coding using VS Code’s Live Share feature. This enabled us to quickly work through setting up the framework of the application together before moving on to flesh out our own individual parts.

In order to get the random meal functionality working I used a button on the homepage which, when clicked, takes the user to an index page with the randomly generated meal. The user can then choose to ‘scran it’ or refresh the page for another random meal.
```
React.useEffect(() => {
   const getData = async () => {
     try {
       const response = await getRandomMeal()
       setFoods(response.data.meals[0])
     } catch (err) {
       console.log(err)
       setIsError(true)
     }
   }
   getData()
 }, [])
```
As with every API we tested during this project we did have initial trouble working with the data. However, as soon as we understood how it was set up we made swift work being able to display it on our page as you can see below.
```
function FoodCard({ food }) {
 return (
   <section className="hero">
     <div className="hero-head">
       <div className="column has-text-centered">
         <h2 className="title is-white is-2">{food.strMeal}</h2>
         <div className="container is-medium">
           <div className="image is-centered is-4by3">
             <img src={food.strMealThumb} alt={food.strMeal} />
           </div>
           <div className="column has-text-centered">
             <h2 className="subtitle is-white is-4">{food.strArea}</h2>
             <button className="button is-centered is-medium is-light">
               <Link to={`/food/${food.idMeal}`}>Scran It</Link>
             </button>
           </div>
         </div>
       </div>
     </div>
   </section>
 )
}
```
# Wins
* We were successfully able to build an app around a third party API despite our initial setbacks.
* We were able to create multi-page navigation using React for the first time with the Router working from any location on the website.
* Working with a group was a great exercise for our communication and understanding how other people work with code.
*  Very happy with how we were able to adapt the scope of our project to ensure we were able to deliver something rather than stick with the initial idea and potentially run out of time.

# Challenges
* As mentioned, searching for an appropriate API used a lot of our time and perhaps we should’ve acted quicker in moving on to a new one.
* The styling isn’t perfect due to time constraints, i.e. the image size on the food card alters with every random meal - we would have preferred this to stay uniform.

# Future Content
* Implementing our original ideas for filter functionality.
* User login and ability to save liked recipes.
* Complete the styling and keep it consistent across the entire app.

# Key Learnings
Despite this overall being a fairly simple task, the 48 hour deadline meant solid planning and swift decision making was crucial to get a finished project for presentation. I feel the biggest thing we learnt overall is when to make tough decisions to benefit the overall project, even if this means drifting away from your initial plan.

It was also a great experience working in a group for the first time. This made sure we communicated efficiently to work towards a common goal in a step-by-step manner. Learning how others perceive certain code and ideas was also a great experience and no doubt helped me work on later group projects after this.


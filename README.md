## Quick Start

Clone the project and open the terminal on the repo directory.

Build Docker Image:

```
docker build -t nordic-store-image .
```

Run Docker Image:

```
docker run -p 3000:3000 --env UNSPLASH_ACCESS_KEY=<your_unsplash_access_key> --name nordic-store nordic-store-image
```

Open the browser on [localhost:3000](http://localhost:3000)

# Requirements

## Task

You will make a toy ecommerce home page hosted via a Node.js app that will also run some client side Javascript.

## Objective

I would like to see your coding style and how comfortable you are with frontend JS + CSS and backend Node JS.
You are free to use any libraries you like, just make sure it makes sense for what you're trying to achieve.
You will be working closely with multiple 3rd party APIs in the long term role, therefore this task has a focus on calling external APIs.

## Requirements

- You will be provided an example index.html page that is styled as an ecommerce homepage (see https://tailwindtoolbox.github.io/Nordic-Store)
- Create a koa based HTTP server that will serve the above page at the root e.g. if your app is running on port 8080, the page should show up at the url http://localhost:8080

Modify the index.html as shown in the attached images, we have defined two breakpoints, one for small screen and the other for large screen.

Summary of changes:

- When loading the page your Node app should use images from unsplash.com instead of the current images via the Unsplash API.

Top banner slider

- Use the Unsplash API to retrieve 3 landscape images and replace the 3 widescreen images on the top slider. Use the image description field to replace the text on the slider.

Section of 8 products

- Use the Unsplash API to retrieve 8 square images for the 8 products, replace the product title with the image description. For the price, randomly generate a number between 10-99 for each price.

Image grid of dogs using JS + CSS

- Create a separate JS script called dogs.js which you will include using a 'script' tag in index.html.
- Once loaded, the script should use the web workers API (https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) to call https://dog.ceo/dog-api/ and retrieve 3 images.
- Once the 3 images are received, your script should insert them in a grid as shown in the attached images. Remember that web workers have no direct access to the DOM, you will need to pass the image URLs as a message back to the main thread which can then do the grid insertion.
- The grid must be responsive, refer to the large screen + small screen images to see how it should look. To keep things simple, only two breakpoints are needed.

## Free APIs used

1. Unsplash https://unsplash.com/documentation
2. Dogs API https://dog.ceo/dog-api/

## Tips

- This is just a demo/toy app - feel free to pick any colour you want. Images retrieved will have random sizes, this is ok - do what you can via CSS.
- The index.html file attached uses tailwind CSS, you are not required to use it - use any CSS framework you like to achieve the output.
- If anything is unclear, just make an assumption and add it in your readme file.
- Follow good practices like not committing sensitive info in your git repo.

## Instructions

- Fork this GitHub repository: https://github.com/tailwindtoolbox/Nordic-Store
- Clone the forked repository to your local machine.
- Create a new branch called "feature/demo-app".
- Implement the requirements listed above.
- Commit your changes and push them to your forked repository.
- Create a basic readme with instructions on how to run the app, also include any assumptions you made.
- Send me the URL of your forked repository (make sure it is set to public)

## Evaluation criteria

Functionality: The application should meet the requirements listed above.
Code quality: The code should be well-organized, easy to read
Performance: The web page should load and run as quickly as possible
User interface: The page should look consistent and be responsive

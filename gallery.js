const API_TOKEN = "sku4IJt4oKv3DkUNWdpQxDq5D9DX6mudU8QE3dvyJFOB5O7hIlrmbOc5Jha2BWLNMYEL63TWhFAcBvtU8ngxfTnBcxe1XeqWbbCuQ6Y7Nm2hKhGWfvYTWtVmARzITtxKtAbyrxU0I9KMHohEAymbNy0Eqy0v46zhRmjjI5HWzsUfFJ0b5zXz";

import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'f1gcsimq',
    dataset: 'production',
    useCdn: true, // Set to true if you want to use the CDN\  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    apiVersion: '2022-03-07', // use current date (YYYY-MM-DD) to target the latest API version

});
const builder = imageUrlBuilder(client)

function urlFor(source) {
    console.log("running")
    return builder.image(source)
}

document.addEventListener('DOMContentLoaded', () => {
    let gallery = [];

    const fetchImages = async () => {
        try {
            const response = await fetch('https://f1gcsimq.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "students"]', {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`,
                },
            });

            console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            gallery = data.result;
            console.log("gallery:", gallery);
            renderImages(gallery)

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // Handle errors or display an error message
        }
    }

    // Render blogs function
    const renderImages = (images) => {
        const imageContainer = document.getElementById('studentsContainer');
        imageContainer.innerHTML = ''; // Clear existing content

        for (const image of images) {
            const imageUrl = urlFor(image.image);

            const modalImage = document.querySelector('.modal-image');

            const image_tag = document.createElement('img');
            image_tag.src = imageUrl;
            image_tag.classList.add('rounded-4', 'img-fluid', 'h-100');
            image_tag.alt = image.name; // Assuming 'name' is a property in your data

            const button = document.createElement('button');
            button.classList.add('btn', 'h-full', 'rounded-4');
            button.setAttribute('type', 'button');
            button.setAttribute('data-bs-toggle', 'modal');
            button.setAttribute('data-bs-target', '#exampleModal1');
            button.appendChild(image_tag)

            const card = document.createElement('div');
            card.classList.add('card', 'rounded-4', 'border-0', 'h-100'); // Adjust column size as needed
            card.appendChild(button)



            const col = document.createElement('div');
            col.classList.add('col'); // Adjust column size as needed
            col.appendChild(button)

            button.addEventListener('click', () => {
                // Update modal content based on the item clicked
                modalImage.src = imageUrl
            });


            imageContainer.appendChild(col);
        }
    }

    // Fetch blogs and render
    fetchImages();


})

document.addEventListener('DOMContentLoaded', () => {
    let gallery = [];

    const fetchImages = async () => {
        try {
            const response = await fetch('https://f1gcsimq.api.sanity.io/v2022-03-07/data/query/production?query=*[_type == "teachers"]', {
                headers: {
                    'Authorization': `Bearer ${API_TOKEN}`,
                },
            });

            console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            gallery = data.result;
            console.log("gallery:", gallery);
            renderImages(gallery)

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            // Handle errors or display an error message
        }
    }

    // Render blogs function
    const renderImages = (images) => {
        const imageContainer = document.getElementById('teachersContainer');
        imageContainer.innerHTML = ''; // Clear existing content

        for (const image of images) {
            const imageUrl = urlFor(image.image);

            const modalImage = document.querySelector('.modal-image');

            const image_tag = document.createElement('img');
            image_tag.src = imageUrl;
            image_tag.classList.add('rounded-4', 'img-fluid', 'h-100');
            image_tag.alt = image.name; // Assuming 'name' is a property in your data

            const button = document.createElement('button');
            button.classList.add('btn', 'h-full', 'rounded-4');
            button.setAttribute('type', 'button');
            button.setAttribute('data-bs-toggle', 'modal');
            button.setAttribute('data-bs-target', '#exampleModal1');
            button.appendChild(image_tag)

            const card = document.createElement('div');
            card.classList.add('card', 'rounded-4', 'border-0', 'h-100'); // Adjust column size as needed
            card.appendChild(button)



            const col = document.createElement('div');
            col.classList.add('col'); // Adjust column size as needed
            col.appendChild(button)

            button.addEventListener('click', () => {
                // Update modal content based on the item clicked
                modalImage.src = imageUrl
            });


            imageContainer.appendChild(col);
        }
    }

    // Fetch blogs and render
    fetchImages();


})


# HalloWear 🎃

Welcome to **HalloWear**, an application where you can discover how you would look in your desired costume by simply uploading an image and providing a prompt. Additionally, you have the option to write a prompt to change the background of your image, creating an even more immersive visual experience. **Maybe you'll get a scare along the way ;)**


This project is part of the initiative to participate in the [**Cloudinary CloudCreate: Spooky AI Hackathon**](https://cloudinary.com/blog/cloudinary-cloudcreate-spooky-ai-hackathon), organized by **Cloudinary** and **Miguel Ángel Durán ([Midudev](https://github.com/midudev))**.

## Spoiler Alert ⚠️

If you choose to write your own prompt in the form, you will notice that nothing happens on the first click of 'Wear'. This is completely intentional.

On the second click, an overlay will appear on the screen, creating a brief moment of suspense for 2 seconds, and then a legendary horror video will play.

This little easter egg only runs once per session to avoid being annoying. I hope someone likes it.


## Installation

Follow these steps to install and set up the project on your local machine:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/hallowear.git
    cd hallowear
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root of the project and add the necessary variables.

4. Start the development server:
    ```sh
    npm run dev
    ```

5. Set the environment variable `PUBLIC_CLOUDINARY_CLOUD_NAME`:
    Create a `.env` file in the root of the project and add the following line:
    ```sh
    PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
    ```

## Feedback

Any feedback or suggestions for **HalloWear** are welcome. Feel free to open an issue or submit a pull request. Thank you.

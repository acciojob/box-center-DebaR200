body {
    margin: 0;
    height: 100vh; /* This is crucial for centering the box vertically in the viewport */
    display: flex; /* Use flexbox to easily center the box */
    justify-content: center; /* Centers the box horizontally */
    align-items: center; /* Centers the box vertically */
}

.centered-box {
    /* Box Dimensions and Appearance */
    width: 200px;
    height: 200px;
    background-color: lightblue;
    border: 2px solid black;

    /* Centered Text */
    display: flex;
    justify-content: center;
    align-items: center;
}

.centered-box p {
    color: purple;
}
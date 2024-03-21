<template>
    <!-- HTML -->
    <p>HOME</p>
</template>

<script>
export default{
    name: 'telaHome',
    props: {
        msg: String
    }
}
</script>

<<<<<<< Updated upstream
<style>
    /* css */
=======
<style scoped>

.card {
    width: 80%; 
    height: 400px; 
    margin-top: 100px; 
    border-radius: 10px; 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    background-color: white;
    display: inline-flex;
    padding: 30px;
}
.card:hover {
    border: 2px solid #000;
}


.carousel__item {
    min-height: 200px;
    max-height: 200px;
    width: 100%;
    color:black;
    background-color: white;
    font-size: 1.10rem;
    display: flex;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
    padding: 30px;
}

.carousel__item:hover {
    border: 2px solid #000;
}

.modal-container-body {
    padding: 24px 32px 51px;
    overflow-y: auto;
}

span {
    background: #f7dff5;
    margin-top: 32px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
}

.carousel__img {
    width: 50%; 
    background-color: white; 
    border-radius: 8px;
    display: flex;
}

.carousel__slide {
    padding: 10px;
}

img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: contain;
}

.carousel__prev, 
.carousel__next {
    box-sizing: content-box;
    border: 5px solid black;
    border-radius: 999px;
    background-color: white;
}
>>>>>>> Stashed changes
</style>
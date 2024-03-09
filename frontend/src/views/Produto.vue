<template>
    <div class="card-list">
        <a href="#" class="card-item">
            <img src="../assets/products/monitor.jpg" alt="Card Image">
            <span class="product">Monitor</span>
            <h3>Monitor Gamer Samsung 22" FHD,75Hz, HDMI, VGA, Freesync, Preto, Série T350</h3>
            <div class="card-price">
                <p>R$780,00</p>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="../assets/products/monitor.jpg" alt="Card Image">
            <span class="product">Monitor</span>
            <h3>Monitor Gamer Samsung 22" FHD,75Hz, HDMI, VGA, Freesync, Preto, Série T350</h3>
            <div class="card-price">
                <p>R$780,00</p>
            </div>
        </a>
        <a href="#" class="card-item">
            <img src="../assets/products/monitor.jpg" alt="Card Image">
            <span class="product">Monitor</span>
            <h3>Monitor Gamer Samsung 22" FHD,75Hz, HDMI, VGA, Freesync, Preto, Série T350</h3>
            <div class="card-price">
                <p>R$780,00</p>
            </div>
        </a>
    </div>
    
</template>

<script>
export default {
    name: 'telaProduto',
    props: {
        msg: String
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
* {
    margin: 10;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
body {
    background: #ecececdb;
}
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    max-width: 1250px;
    margin: 15px auto;
    padding: 20px;
    gap: 20px;
}
.card-list .card-item {
    background: #fff;
    padding: 26px;
    border-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.04);
    list-style: none;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid transparent;
    transition: border 0.5s ease;
}
.card-list .card-item:hover {
    border: 2px solid #000;
}
.card-list .card-item img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 8px;
    object-fit: contain;
}
.card-list span {
    display: inline-block;
    background: #F7DFF5;
    margin-top: 10px;
    padding: 8px 15px;
    font-size: 0.75rem;
    border-radius: 50px;
    font-weight: 600;
}
.card-list .developer {
    background-color: #F7DFF5; 
    color: #B22485;
}   
.card-list .designer {
    background-color: #d1e8ff;
    color: #2968a8;
}
.card-list .editor {
    background-color: #d6f8d6; 
    color: #205c20;
}
.card-item h3 {
    color: #000;
    font-size: 1.2rem;
    margin-top: 28px;
    font-weight: 300;
    padding: 6px;
}

.card-price p {
    color: #000;
    font-size: 2rem;
    font-weight: bold;
}

.card-list .card-item:hover .arrow  {
    background: #000;
    color: #fff; 
}
@media (max-width: 1200px) {
    .card-list .card-item {
        padding: 5px;
    }
}
@media screen and (max-width: 980px) {
    .card-list {
        margin: 0 auto;
    }
}
</style>
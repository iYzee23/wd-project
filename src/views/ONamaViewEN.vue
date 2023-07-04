<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <br>
                <h2>About us</h2>
                <p> Welcome to L&P, the online art gallery that celebrates creativity and connects artists with art enthusiasts from around the world. At L&P, we strive to showcase a diverse range of artwork across various mediums, including paintings, sculptures, photography, and more. Our platform provides a unique space for talented artists to exhibit their work and for art lovers to discover and collect exceptional pieces. Whether you're an artist looking for exposure or an art enthusiast seeking inspiration, L&P is your gateway to an immersive art experience. Join us on this artistic journey and explore the captivating world of L&P.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <h4>Where to find us?</h4>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7962936869494!2d20.47532344378023!3d44.805339951315155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9f5ee145d3%3A0x3ed89b5bb505d83!2sUniversity%20of%20Belgrade%20School%20of%20Electrical%20Engineering!5e0!3m2!1sen!2srs!4v1688286125877!5m2!1sen!2srs" width="70%" height="600" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <br>           
                <h4>
                    Contact telephone: +381/11 1234-321
                </h4>
                <br>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container-fluid{
        text-align: center;
        border: 5px solid #C4A484;
    }
    .col-sm-12 h2{
        color:plum;
    }
    .footer{
        color:plum;
        font-size: 10px;
    }
</style>

<script>
export default {
    mounted() {
        document.title = 'L&P gallery - About us';
    }
}
</script>
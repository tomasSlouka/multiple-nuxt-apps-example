<template>
    <div class="component">

        <div class="container-narrow mt80 grid gap-60 md-col-2">
            <div class='grid gap-20'>
                <!-- <h2 class='maxw500 h1'>Can't find a free domain name for your next project?</h2> -->
                <h1 class='maxw450'>All-in-one platform for your newsletter.</h1>
                <!-- <h2 class='maxw450 h1'>Get your newsletter to the next level.</h2> -->
                <p class='maxw500'>Become unstoppable with ManyLetter advanced tools made easy for you. Includes email newsletter creation and distribution, A/B testing, subscribers management, automation, custom domain and SEO optimized website for your newsletter—everything in one place.</p>
                <div class='grid gap-5 mt30'>
                    <a href='https://app.manyletter.com/sign-up' class='cta button justify-self-start'>Request access</a>
                    <p class="small">Join 63+ newsletter enthusiasts. </p>
                </div>
                <div class='align-self-end relative'>
                    
                    <div class='plant-grow' style='height: 63px; width: 63px;'>
                        <div class="blob"></div>
                        <p class="johntheplant">Hey! I'm John the Plant.<br>Join Manyletter, and I will grow by one pixel. ❤️</p>
                    </div>
                    <!-- <img src="@/assets/img/plant.svg" alt="" class='plant-grow' style='height: 63px;' /> -->
                </div>
            </div>
            <div class='align-self-end relative show-md'>
                <div class='dots dots1'></div>
                <div class='dots dots2'></div>
                <img src="@/assets/img/screen.png" alt="" class='computer' />
            </div>
        </div>

    </div>
</template>

<script>
export default {

    // props: ['domainList'],

}
</script>

<style scoped>
h1 {
    font-size: 2.5em;
}
img.computer {
    width: 135%;
    position: absolute;
    left: 28px;
    bottom: -90px;
    max-width: fit-content;
    filter: drop-shadow(0px 0px 10px #ccc); 
    z-index: 5;
}

div.plant-grow {
    position: absolute;
    right: -110px;
    bottom: -90px;
    filter: drop-shadow(0px 0px 10px #ccc); 
    z-index: 6;

    background-image:url('~assets/img/plant.svg');
	background-position: top left;
    background-repeat: no-repeat;
    background-size: auto;
}
p.johntheplant {
    position: absolute;
    right: -190px;
    top: -100px;
    -webkit-filter: drop-shadow(0px 0px 2px #ccc);
    filter: drop-shadow(0px 0px 2px #ccc);
    z-index: 6;
    font-size: .7em;
    width: 150px;
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
}

.component {
    overflow: hidden;
}

.dots {    
    background-image:url('~assets/img/dot.svg');
	background-position: top left;
    background-repeat:repeat;
    background-size: auto;
}

.dots1 {
    position: absolute;
    z-index: 0;
    height: 400px;
    width: 400px;
}
.dots2 {
    position: absolute;
    bottom: 40px;
    right: -160px;
    z-index: 0;
    height: 250px;
    width: 150px;
}

.blob {
position: absolute;
    right: -58px;
    top: -62px;
    z-index: 2;
    background: #39ac37;
    border-radius: 50%;
    margin: 45px;
    height: 1px;
    width: 1px;
    box-shadow: 0 0 0 0 rgba(0, 157, 99, 1);
    transform: scale(4);
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
}
@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 157, 99, 0.7);
	}

	70% {
		transform: scale(1.05);
		box-shadow: 0 0 0 40px rgba(0, 157, 99, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 157, 99, 0);
	}
}
</style>

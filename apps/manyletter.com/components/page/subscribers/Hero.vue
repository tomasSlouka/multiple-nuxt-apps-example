<template>
    <div class="component">

        <div class='container-narrow mt20 mb20'>
            <img src="@/assets/img/logo.png" alt="" class='logo' />
        </div>

        <div class="container-narrow mt40 grid">
            <div class='grid gap-20'>
                <!-- <h1 class='maxw500'>Do you subscribe to too many newsletters?</h1> -->
                <h1>Read newsletters like never before. </h1>
                <h2 class='strong big'>Read short newsletter summaries, aka SNS</h2>
                <p class='maxw500'>Rather than receiving many email newsletters that you will never read, receive one email with short summaries of all newsletters you subscribe to, directly from the authors.</p>
                <div class='mt30'>
                    <a href='https://app.manyletter.com/sign-up' class='button black cta'>Get started</a>
                </div>
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
.logo {
    height: 50px;
    width: 50px;
    border-radius: 50px;
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

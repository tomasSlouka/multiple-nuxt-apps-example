<template>
	<div class='container-narrow grid justify-items-center gap-30'>
		<div class='grid gap-60 md-col-2 align-items-center w100'>
			<div class=' justify-self-center'>
				<h3>Indie hackers <span>"Quotes"</span></h3>
			</div>
			<div class='grid'>
				<button @click.prevent='reload()' class='cta justify-self-center'>Next Quote</button>
			</div>
		</div>
		<div class="hr"></div>
		<iframe src="https://www.indiehackers.com/read/more/quotes" title="W3Schools Free Online Web Tutorials"></iframe>
		<div class="hr"></div>
		<div class='footer text-center'>
			Created by <a href='https://twitter.com/TomasSlouka'>@TomasSlouka 🧩</a> in 15 minutes, during the lanch break, for fun.<br>
			All ❤️ should go to <a href='https://indiehackers.com'>indiehackers.com 👈</a>
		</div>
	</div>
</template>

<script>
export default {

	methods: {
		reload() {
			location.reload();
		}
	}

}
</script>

<style>
body {
	background-color: #0e2439;
}
.container-narrow {
	margin-top: 20px
}
h3 {
	color: #fff;
	text-transform: uppercase;
	font-size: 18px;
}
h3 > span {
	font-family: 'Caveat', sans-serif;
	font-size: 16px;
	position: relative;
	top: 20px;
	left: -55px;
}
iframe {
	height: 420px;
	max-width: 100%;
	width: 100%;
	border: 0px;
}
.footer {
	color: #fff;
	font-size: 16px;
}
a {
	color: #39ac37;
	text-decoration: none;
}
.hr {
	border-bottom: 1px solid #385673;
}

button.cta {
	border-radius: 0px;
	font-size: 20px;
}
button.cta:hover {
	transform: rotate(10deg) scale(1.25);
	background-color: #39ac37;
}
</style>

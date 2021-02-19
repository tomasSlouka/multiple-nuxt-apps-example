<template>
    <div class='page'>
        <SubNav />
        <Hero 
            h1='Moje knižky'
            h2='Batôžtek'
        />
        <Confirm
            v-if='dataBasket.count_items > 0'
            :dataBasket='dataBasket'
        />
        <Empty v-else />

        <!-- <input type="button" @click="packeta()" value="Select pick-up point...">
        <p>Selected point:
            <input type="hidden" id="packeta-point-id">
            <span id="packeta-point-info">None</span>
        </p> -->
    </div>
</template>

<script>
import Hero from '@/components/page/user/books/_common/Hero.vue'
import SubNav from '@/components/page/user/books/_common/SubNav.vue'
import Confirm from '@/components/page/user/books/basket/Confirm.vue'
import Empty from '@/components/page/user/books/basket/Empty.vue'

export default {
    layout: 'defaultUser',
        components: {
            SubNav, Hero, Confirm, Empty
    },
   /*  head() {
        return {
        script: [
            
            {
                src: "https://widget.packeta.com/www/js/library.js",
                "data-api-key": "b44b34b577c26ba2"
            },
        ],
        __dangerouslyDisableSanitizers: ['script']
        }
    }, */
    data() {
        return {
            dataBasket: this.$store.state.order.dataBasket,
            // packetaAPIKey: "b44b34b577c26ba2"
        }
    },
    async fetch({store}) {
        await store.dispatch("order/getDataBasket")
    },
    /* methods: {
        packeta() {
            Packeta.Widget.pick(this.packetaApiKey, this.showSelectedPickupPoint, {
                country: "sk",
                language: "sk",
                claimAssistant: "yes",
                primaryButtonColor: "#000"
            })
        },
        showSelectedPickupPoint(point) {
            var spanElement = document.getElementById('packeta-point-info');
			var idElement = document.getElementById('packeta-point-id');
			if(point) {
				var recursiveToString = function(o) {
					return Object.keys(o).map(
						function(k) {
							if(o[k] === null) {
								return k + " = null";
							}
							
							return k + " = " + (typeof(o[k]) == "object"
								? "<ul><li>" + recursiveToString(o[k]) + "</li></ul>"
								: o[k].toString().replace(/&/g, '&amp;').replace(/</g, '&lt;')
							);
						}
					).join("</li><li>");
				};
				
				spanElement.innerText =
					"Address: " + point.name + "\n" + point.zip + " " + point.city + "\n\n"
					+ "All available fields:\n";
				
				spanElement.innerHTML +=
					"<ul><li>" + recursiveToString(point) + "</li></ul>";
					
				idElement.value = point.id;
			}
			else {
				spanElement.innerText = "None";
				idElement.value = "";
			}
        }
    }, */
}
</script>

<style>

</style>

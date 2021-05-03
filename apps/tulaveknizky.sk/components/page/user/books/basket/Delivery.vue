<template>
    <div class="component">
        <div class="container-standard grid">
            <div class='grid gap-40'>
                <h2>Vyberte spôsob dopravy a adresu doručenia.</h2>

                <!-- {{dataBasket}} -->
                <div class='grid gap-60'>
                    <div class='grid gap-20 auto'>
                        
                        <!-- <div class='table-wrapper justify-content-start'> -->
                            <div class='grid md-col-2 gap-10'>

                                <!-- Zasielkovna -->
                                <div class='box-form bb1'> 
                                    <div class='grid col-3 gap-20 auto align-items-center justify-content-start'>
                                        <input type='radio' id='zasielkovna' name='delivery_option' @click="packeta()" v-model='delivery_option' value='zasielkovna' class='m10 p10 block' />
                                        <!-- <label class='normal' for="zasielkovna">Zasielkovňa</label> -->
                                        <label class='pointer normal grid col-2 auto gap-10 align-items-center ml10' for="zasielkovna">
                                            <img class='delivery-img justify-self-end' src="https://widget.packeta.com/v5/static/media/logoSK.a6779253.svg" alt="zasielkovna-logo">
                                            <span class='font12'>(zadarmo)</span>
                                        </label>
                                        
                                    </div>
                                </div>
                                <!-- Zasielkovna -->

                                <!-- Slovenska posta -->
                                <div class='box-form bb1'> 
                                    <div class='grid col-2 gap-20 auto align-items-center justify-content-start'>
                                        <input type='radio' id='sk_posta' name='delivery_option' @click="sk_posta()" v-model="delivery_option" value='sk_posta' class='m10 p10 block' />
                                        <label class='pointer normal grid col-2 auto gap-10 align-items-center ml10' for="sk_posta">
                                            <img class='delivery-img justify-self-end' src="https://www.posta.sk/images/site/sl-posta-logo.svg" alt="sk-posta-logo">
                                            <span>Slovenská pošta <span class='font12'>(zadarmo)</span></span>
                                        </label>
                                    </div>
                                </div>
                                <!-- Slovenska posta -->

                            </div>
                        <!-- </div> -->
                        
                        <div v-if='delivery_option == "zasielkovna"'>
                            <div class='box-form grid gap-20'>
                                <h3>Doručenie pomocou služby Zásielkovňa</h3>
                                <p> 
                                    {{place}}, {{street}}, {{zip}}, {{city}} | 
                                    <a id='zasielkovna' @click="packeta()" value='Upraviť adresu' class='small' >Vybrať iné odberné miesto</a>
                                </p>

                                <div class="hr"></div>
                                
                                <form class='grid gap-20 md-col-2 align-items-start'>

                                    <!-- email -->
                                    <div>
                                        <label for="email">Kontaktný email *</label>
                                        <input type="text" placeholder="Kontaktný email" name="email" v-model="email">
                                    </div>
                                    <!-- email -->
                                    
                                    <!-- phone -->
                                    <div>
                                        <label for="phone">Telefón *</label>
                                        <input type="text" placeholder="Telefón" name="phone" v-model="phone">
                                    </div>
                                    <!-- phone -->

                                    <!-- <div class="md-span-2 hr">

                                    </div> -->
                                    <!-- <div class='justify-self-end md-span-2 grid col-3 auto gap-10 align-items-center'>
                                        <div>
                                            <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                                        </div>
                                        <nuxt-link to='/admin/titles' class="button cta red">Zrušiť</nuxt-link>
                                        <button type="submit" class="button cta black">Uložiť</button>
                                    </div> -->
                                </form>

                            </div>
                        </div>

                        <div v-if='delivery_option == "sk_posta"'>
                            <div class='box-form grid gap-20'>
                                <h3>Doručenie Slovenskou poštou</h3>
                                <p>Prosím vyplň všetky údaje aby sme mohli knižky poslať na správnu adresu. Ďakujeme.</p>
                                
                                <div class="hr"></div>
                                
                                <form class='grid gap-30 md-col-2 align-items-start'>
                                    
                                    <div class='grid gap-20'>
                                        <!-- Name -->
                                        <div>
                                            <label for="name">Meno *</label>
                                            <input type="text" placeholder="Meno" name="name" v-model="name">
                                        </div>
                                        <!-- Name -->

                                        <!-- Surname -->
                                        <div>
                                            <label for="surname">Priezvisko *</label>
                                            <input type="text" placeholder="Priezvisko" name="surname" v-model="surname">
                                        </div>
                                        <!-- Surname -->

                                        <!-- street -->
                                        <div>
                                            <label for="street">Ulica a popisné číslo *</label>
                                            <input type="text" placeholder="Ulica" name="street" v-model="street">
                                        </div>
                                        <!-- street -->

                                        <!-- city -->
                                        <div>
                                            <label for="city">Mesto *</label>
                                            <input type="text" placeholder="Mesto" name="city" v-model="city">
                                        </div>
                                        <!-- city -->

                                        <!-- psc -->
                                        <div>
                                            <label for="psc">PSČ *</label>
                                            <input type="text" placeholder="PSČ" name="psc" v-model="zip">
                                        </div>
                                        <!-- psc -->
                                    </div>

                                    <div class='grid gap-20'>

                                        <!-- email -->
                                        <div>
                                            <label for="email">Kontaktný email *</label>
                                            <input type="text" placeholder="Kontaktný email" name="email" v-model="email">
                                        </div>
                                        <!-- email -->

                                        <!-- phone -->
                                        <div>
                                            <label for="phone">Telefón *</label>
                                            <input type="text" placeholder="Telefón" name="phone" v-model="phone">
                                        </div>
                                        <!-- phone -->
                                    </div>

                                    <!-- <div class="md-span-2 hr">

                                    </div> -->
                                    <!-- <div class='justify-self-end md-span-2 grid col-3 auto gap-10 align-items-center'>
                                        <div>
                                            <p class='success' v-if='submitSuccess'>{{submitText}}</p>
                                        </div>
                                        <nuxt-link to='/admin/titles' class="button cta red">Zrušiť</nuxt-link>
                                        <button type="submit" class="button cta black">Uložiť</button>
                                    </div> -->
                                </form>
                            </div>
                        </div>
                        <!-- <div class='grid box col-2 gap-20 auto align-items-center justify-content-start'>
                            <input type='radio' id='zasielkovna' name='delivery' class='m10 p10 block' @click="packeta()" />
                            <label for="zasielkovna">Zasielkovňa</label>

                            <input type='radio' id='sk_posta' name='delivery' class='m10 p10 block' />
                            <label for="sk_posta">Slovenská pošta</label>
                        </div> -->
                        <!-- <p>Selected point:
                            <input type="hidden" id="packeta-point-id">
                            <span id="packeta-point-info">None</span>
                        </p> -->

                        <!-- {{packetaId}}
                        {{packetaName}}
                        {{packetaZip}}
                        {{packetaCity}}
                        {{packetaPlace}}
                        {{packetaStreet}} -->

                        <!-- <div class='box-2 grid col-2 p10 auto justify-items-end justify-content-end gap-10 align-items-center'>
                            <div><p class='small'>Spolu:</p></div>
                            <div class='grid col-2 auto align-items-center gap-5'><p class='big strong'>{{dataBasket.sum_price}}</p> <p class='small'>kreditov</p></div>
                        </div> -->
                    </div>

                    <div class='box grid md-col-2 auto gap-10 align-items-start'>
                        <div class='md-justify-self-start grid'><nuxt-link to='/user/books/basket' class='button cta white'>Späť na knižky v batôžku</nuxt-link></div>
                        <div class='md-justify-self-end grid'>
                            <button class='button cta black md-justify-self-end' @click='submitForm()'>Pokračovať na rekapituláciu</button>
                            <p class='error justify-self-end' v-if='submitError'>{{submitText}}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    props: ['dataBasket'],
    data() {
        return {
            packetaAPIKey: "b44b34b577c26ba2",

            packetaId: "",
            packetaName: "",
            packetaZip: "",
            packetaCity: "",
            packetaPlace: "",
            packetaStreet: "",

            id: "",
            delivery_option: null,
            delivery_option_data: null,
            place: "",
            name: "",
            surname: "",
            street: "",
            city: "",
            zip: "",
            phone: "",
            email: "",

            submitSuccess: false,
            submitError: false,
            submitText: 'Uložené!',

            // id: this.dataBasket.data.id,
            // name: this.dataBasket.data.name ? this.dataBasket.data.name : this.$store.state.auth.userData.name,
            // surname: this.dataBasket.data.surname ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname,
            // street: this.dataBasket.data.street ? this.dataBasket.data.street : this.$store.state.auth.userData.street,
            // city: this.dataBasket.data.city ? this.dataBasket.data.city : this.$store.state.auth.userData.city,
            // zip: this.dataBasket.data.zip ? this.dataBasket.data.zip : this.$store.state.auth.userData.zip,
            // phone: this.dataBasket.data.phone ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone,
            // email: this.dataBasket.data.email ? this.dataBasket.data.email : this.$store.state.auth.userData.email,
        }
    },
    methods: {
        packeta() {
            Packeta.Widget.pick(this.packetaApiKey, this.showSelectedPickupPoint, {
                country: "sk",
                language: "sk",
                claimAssistant: "yes",
                primaryButtonColor: "#000"
            })
        },
        sk_posta() {
            // this.packetaId = ""
            // this.packetaName = ""
            // this.packetaZip = ""
            // this.packetaCity = ""
            // this.packetaPlace = ""
            // this.packetaStreet = ""

            this.id = this.dataBasket.data.id
            this.delivery_option_data = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.delivery_option_data : ""
            this.place = ""
            this.name = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.name : this.$store.state.auth.userData.name
            this.surname = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname
            this.street = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.street : this.$store.state.auth.userData.street
            this.city = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.city : this.$store.state.auth.userData.city
            this.zip = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.zip : this.$store.state.auth.userData.zip
            this.phone = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone
            this.email = this.dataBasket.data.delivery_option == "sk_posta" ? this.dataBasket.data.email : this.$store.state.auth.userData.email
        },
        showSelectedPickupPoint(point) {
            // var spanElement = document.getElementById('packeta-point-info');
			// var idElement = document.getElementById('packeta-point-id');
			if(point) {
                console.log(point)

                this.id = this.dataBasket.data.id
                this.delivery_option_data = this.dataBasket.data.id
                this.place = point.place
                this.name = this.dataBasket.data.name ? this.dataBasket.data.name : this.$store.state.auth.userData.name
                this.surname = this.dataBasket.data.surname ? this.dataBasket.data.surname : this.$store.state.auth.userData.surname
                this.street = point.street
                this.city = point.city
                this.zip = point.zip
                this.phone = this.dataBasket.data.phone ? this.dataBasket.data.phone : this.$store.state.auth.userData.phone
                this.email = this.dataBasket.data.email ? this.dataBasket.data.email : this.$store.state.auth.userData.email

                // this.packetaId = point.id
                // this.packetaName = point.name
                // this.packetaZip = point.zip
                // this.packetaCity = point.city
                // this.packetaPlace = point.place
                // this.packetaStreet = point.street

			// 	var recursiveToString = function(o) {
			// 		return Object.keys(o).map(
			// 			function(k) {
			// 				if(o[k] === null) {
			// 					return k + " = null";
			// 				}
							
			// 				return k + " = " + (typeof(o[k]) == "object"
			// 					? "<ul><li>" + recursiveToString(o[k]) + "</li></ul>"
			// 					: o[k].toString().replace(/&/g, '&amp;').replace(/</g, '&lt;')
			// 				);
			// 			}
			// 		).join("</li><li>");
			// 	};
				
			// 	spanElement.innerText =
			// 		"Address: " + point.name + "\n" + point.zip + " " + point.city + "\n\n"
			// 		+ "All available fields:\n";
				
			// 	spanElement.innerHTML +=
			// 		"<ul><li>" + recursiveToString(point) + "</li></ul>";
					
			// 	idElement.value = point.id;
			// }
			// else {
			// 	spanElement.innerText = "None";
			// 	idElement.value = "";
			}
        },
        async submitForm() {
                await this.$axios.$put('/order', {
                    // "category_id": this.category_id,
                    "id": this.id,
                    "delivery_option": this.delivery_option,
                    "delivery_option_data": this.delivery_option_data,
                    "place": this.place,
                    "name": this.name,
                    "surname": this.surname,
                    "street": this.street,
                    "city": this.city,
                    "zip": this.zip,
                    "phone": this.phone,
                    "email": this.email,
                })
                .then((response) => {
                    console.log(response);
                    // this.$store.dispatch('auth/setUser', {
                    //     endpoint: '/user'
                    // })
                    // this.submitSuccess = true;
                    // this.submitText = 'Uložené!';
                    // if(this.password_1 === '') { this.password_locked = 0 } else { this.password_locked = 1 }
                    // setTimeout(() => this.submitSuccess = false, 4000)
                    // this.$router.push('/admin/subscriber/settings')
                    this.$router.push('/user/books/basket/confirm')
                }, (error) => {
                    console.log(error);
                    this.submitError = true
                    this.submitText = error.response.data.message
                    setTimeout(() => this.submitError = false, 4000)
                    //this.res = error.response.data.message
                });
            // } else {
            //     this.submitError = true;
            //     this.submitText = 'Passwords do not match!';
            //     setTimeout(() => {
            //         this.submitError = false, 
            //         this.submitText = ''
            //     }, 4000)
            // }
        },
    },
}
</script>

<style scoped>
.box {
    background-color: #f7f7f7;
    /* border-top: 6px solid rgba(255,212,1,0.32157); */
    border-bottom: 6px solid #eee;
    padding: 40px;
    border-radius: 4px;
}
.box-2 {
    background-color: #f7f7f7;
    border-bottom: 6px solid rgba(255,212,1,0.32157);
    /* border-bottom: 6px solid #eee; */
    padding: 40px;
    border-radius: 4px;
}

.delivery-img {
    height: 25px;
    border-radius: 0px;
}
</style>

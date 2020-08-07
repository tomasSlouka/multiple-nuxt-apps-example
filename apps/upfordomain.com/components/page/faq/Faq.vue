<template>
    <div class="component">

        <div class="container-narrow">
            <div class='grid md-col-2 gap-60 align-items-start'>
                
                <div class='grid gap-60'>
                    <h2>Owner questions</h2>
                    <div class='grid gap-10'>
                        <h4>How to add my domain up for rent?</h4>
                        <p>Everyone can add their domain up for rent for FREE. Go to <nuxt-link to='/add/domain-up-for-rent'> list your domain</nuxt-link> and fill in a simple form where you define the monthly renting price, and the buyout price for your domain.</p>
                    </div>
                    
                    <div class='grid gap-10'>
                        <h4>Do I need to transfer domain ownership?</h4>
                        <p>Yes. Anyone who wants to provide a domain for rent must change the domain owner to upfordomain.com. Thanks to this, we can ensure that the renter of the domain regularly pays you for the domain and protects you from the loss of the domain in case the renter ceases to pay his obligation.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>Do I need to transfer domain ownership before the renting period start?</h4>
                        <p>No. Ownership transfer is needed only when we find the renter for your domain.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>Do I need to change domain registrar?</h4>
                        <p>Yes. Change of the domain registrar to upfordomain is mandatory.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>Can I change the renting price?</h4>
                        <p>You can change the renting price while domain is not in rental period. Once the rent period starts, you won't be able to change the price.</p>
                    </div>
                    
                    <div class='grid gap-10'>
                        <h4>What happens if a renter stop paying?</h4>
                        <p>If the renter stop paying for the domain rent for a 3 consequent months, the domain will release back to the owner.</p>
                    </div>
                </div>

                <div class='grid gap-60'>
                    <h2>Buyer questions</h2>
                    <div class='grid gap-10'>
                        <h4>Why should I rent a domain?</h4>
                        <p>You don't have to pay the full price. Domain renting is a great alternative to get the domain name that would be otherwise hard to acquire.</p>
                    </div>

                    <!-- <div class='grid gap-10'>
                        <h4>For what period can I rent a domain?</h4>
                        <p>It depends on the contract. You can rent your domain from 2 years to up to 5 years.</p>
                    </div> -->

                    <div class='grid gap-10'>
                        <h4>Can owner of the domain change the domain renting and buyout price?</h4>
                        <p>No. The renting price and buyout price will remain the same and cannot be changed during the rental period.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>Who will be the domain owner?</h4>
                        <p>The owner of the domain during the rental period will be upfordomain.com. If the total amount of rent payments will reach the buyout price of the domain, the ownership of the domain will transfer to the buyer.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>What is rental period?</h4>
                        <p>The rental period is the period during which the renter pays the owner of the domain. The rental period depends on the rental price and the buyout price of the domain. The rental period ends as soon as the renter pays the buyout price of the domain.</p>
                    </div>

                    <div class='grid gap-10'>
                        <h4>What about DNS access?</h4>
                        <p>You will get full access to the domain DNS settings.</p>
                    </div>
                    <!-- <div class='grid gap-10'>
                        <h4>Who decides the contract terms?</h4>
                        <p>It depends on the contract. You can rent your domain from 2 years to up to 10 years.</p>
                    </div> -->

                </div>



            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p {max-width: 400px;}
</style>

<template>
    <div class='component grid gap-20 col-3 align-items-start'>



        <div class="box grid gap-20">
            
            <h4>Top level menu</h4>
            <!-- <p class='small'>These are the links that are showing in the top menu of your website.</p> -->
            <!-- <div class="hr"></div> -->

            <div class='grid gap-2'>
                <div class="link-wrapper grid justify-content-space-between align-items-center relative">
                    <nuxt-link tag='div' to='/admin/website/navigation/1' class='link' replace> Home</nuxt-link>
                    <nuxt-link tag='div' to='/admin/website/page/editor' class='editor absolute-right'> <i class="icon ion-ios-create"></i></nuxt-link>
                </div>
                <div class="link-wrapper grid justify-content-space-between align-items-center relative">
                    <nuxt-link tag='div' to='/admin/website/navigation/2' class='link' replace> Contact</nuxt-link>
                    <nuxt-link tag='div' to='/admin/website/page/editor' class='editor absolute-right'> <i class="icon ion-ios-create"></i></nuxt-link>
                </div>
            </div>

            <div class="hr"></div>

            <div>
                <form>
                    <label for="page">Create page</label>
                    <div class='relative grid'>
                        <input type="text" id='page' name='page'>
                        <button type='submit' class='cta small absolute-right align-self-center mr10'>Add</button>
                    </div>
                </form>
            </div>
        </div>




        <div v-if='$route.params.lvl2' class="box grid gap-20">
            
            <h4>2nd level menu</h4>
            <!-- Params: {{ $route.params.lvl2 }} -->
            <!-- <p class='small'>These are the links that are showing in the top menu of your website.</p> -->
            <!-- <div class="hr"></div> -->

            <!-- <div class='link-wrapper'>
                <nuxt-link tag='div' to='/admin/website/page/editor' class='link grid col-2 auto justify-content-start gap-20'> 
                    <i class="icon ion-ios-create"></i> 
                    <span>Open page editor</span>
                </nuxt-link>
            </div> -->

            <!-- <div class="hr"></div> -->
            <!-- <h5>Subpages</h5> -->
            <div class='grid gap-2'>
                <div class="link-wrapper grid justify-content-space-between align-items-center relative">
                    <nuxt-link tag='div' :to="'/admin/website/navigation/' + $route.params.lvl2 + '/1'" replace class='link'> Test page</nuxt-link>
                    <nuxt-link tag='div' to='/admin/website/page/editor' class='editor absolute-right'> <i class="icon ion-ios-create"></i></nuxt-link>
                </div>
                <div class="link-wrapper grid justify-content-space-between align-items-center relative">
                    <nuxt-link tag='div' :to="'/admin/website/navigation/' + $route.params.lvl2 + '/2'" replace class='link'> Page test with very long text</nuxt-link>
                    <nuxt-link tag='div' to='/admin/website/page/editor' class='editor absolute-right'> <i class="icon ion-ios-create"></i></nuxt-link>
                </div>
            </div>

            <div class="hr"></div>
            <div>
                <form>
                    <label for="page">Create subpage</label>
                    <div class='relative grid'>
                        <input type="text" id='page' name='page'>
                        <button type='submit' class='cta small mr10 absolute-right align-self-center'>Add</button>
                    </div>
                </form>
            </div>
        </div>




        <div  v-if='$route.params.lvl3' class="box grid gap-20">
            
            <h4>3rd level menu</h4>
            <!-- <p class='small'>These are the links that are showing in the top menu of your website.</p> -->
            <!-- <div class="hr"></div> -->

            <!-- <div class='link-wrapper'>
                <nuxt-link tag='div' to='/admin/website/page/editor' class='link grid col-2 auto justify-content-start gap-20'> 
                    <i class="icon ion-ios-create"></i> 
                    <span>Open page editor</span>
                </nuxt-link>
            </div> -->

            <!-- <div class="hr"></div> -->
            
            <div>
                <form>
                    <label for="page">Create subpage</label>
                    <div class='relative grid'>
                        <input type="text" id='page' name='page'>
                        <button type='submit' class='cta small mr10 absolute-right align-self-center'>Add</button>
                    </div>
                </form>
            </div>
        </div>



    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.link {
    /* text-decoration: none; */
    color: #000;
    padding: 10px 10px;
    /* background-color: #fafcfe; */
    /* border: 1px solid #e2e4e7; */
    /* border: 1px solid transparent; */
    cursor: pointer;
    padding-right: 40px;
    height: 44px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.link-wrapper:hover .link {
    background-color: #f5f8fc;
    /* border: 1px solid #e2e4e7; */
    /* background-color: #fafcfe; */
}
.editor:hover .ion-ios-create {
    color: #000;
}

.editor {
    /* height: 15px; */
    /* width: 15px; */
    /* color: #ccc; */
    /* border: 1px solid #e2e4e7; */
    height: 34px;
    width: 34px;
    line-height: 34px;
    text-align: center;
    font-size: .8em !important;
    margin-right: 5px;
    cursor: pointer;
    color: #bbb;
    /* border: 1px solid #eee; */
    /* background-color: #fff; */
    /* border-radius: 34px; */
}
.editor:hover {
    color: #000;
}

.ion-ios-create {
    color: #bbb;
}
</style>

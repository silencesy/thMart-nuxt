<template>
    <div class="nav">
        <div class="container">
            <div class="homeHead">
                <div class="left"><nuxt-link to="/"><img src="~static/images/thmart.png" alt=""></nuxt-link></div>
            </div> 
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: '',
                searchTipsTextShow: true,
                activeCategoryData: ''
            }
        },
        methods: {
            handleinput() {
                this.searchTipsTextShow = false;
            },
            blurinput() {
                if (this.searchText.length>0) {
                    this.searchTipsTextShow = false;
                } else {
                    this.searchTipsTextShow = true;  
                }
            },
            searchBtn() {
                this.$router.push({path: '/searchModeule/search',query: {searchInfo: this.searchText,classification: 'categories'}});
            },
            sss() {
                alert(123);
            }
        }
    }
</script>

<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .homeHead
        margin: 15px 0
        overflow: hidden
        @include hh(80px, 80px)
        >div
            float: left
        .left, .right
            img
                vertical-align: middle
        .left
            img
                @include wh(80px, 60px)

</style>
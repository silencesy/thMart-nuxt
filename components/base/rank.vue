<template>
    <div class="rank">
        <div class="rankBox">
            <div class="title">
                <div>
                    <span :class="{active: latestActive}" @click="latestRank('createTime_desc')">Latest</span>
                    <span :class="{active: priceActive}" v-if="isShowObj.priceIsShow" @click="priceRank">Price</span>
                </div>
                <div>
                    <i :class="{active: arrowTopActive}" class="el-icon-caret-top"></i>
                    <i :class="{active: arrowBottomActive}" class="el-icon-caret-bottom"></i>
                </div>
            </div>
            <div class="rankSearch" v-if="isShowObj.rankSearchIsShow">
                123
            </div>
		</div>
    </div>
</template>
<script>
    /**
     * isShowObj 是一个对象
     * isShowObj.rankSearchIsShow 是否显示搜索框
     * isShowObj.priceIsShow 是否显示价格排序
     */
	export default {
        props: {
            isShowObj: {
                type: Object,
                default: function() {
                    return {
                        rankSearchIsShow: true,
                        priceIsShow: true
                    }
                }
            }
        },
        data () {
            return {
                latestActive: true,
                priceActive: false,
                arrowTopActive: false,
                arrowBottomActive: false
            }
        },
        methods: {
            latestRank() {
                // this.$emit('alert')
                this.latestActive = true;
                this.priceActive = false;
                this.arrowTopActive = false;
                this.arrowBottomActive = false;
            },
            priceRank() {
                this.latestActive = false;
                this.priceActive = true;
                this.arrowBottomActive = true;
            }
        }
	}
</script>
<style lang='sass' type="text/css" scoped>
    @import '~/assets/sass/common.sass'
    .active
        color: $theme_color
    .rankBox 
        @include whh(100%, 36px, 36px)
        background-color: #eee
        padding: 0 15px 
        overflow: hidden
        .title
            float: left
            >div 
                float: left
            >div:first-child
                span
                    color: $describe_color
                    cursor: pointer
                .active
                    color: $theme_color
                span:first-child
                    margin-right: 115px
            >div:nth-child(2)
                position: relative
                padding-left: 5px
                cursor: pointer
                i 
                    position: absolute 
                i:first-child
                    top: 6px
                i:nth-child(2)
                    top: 14px


    
    					
</style>
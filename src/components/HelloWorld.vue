<template>
    <div class="header">
        <h2>Total users: {{totalPost}}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            totalPost: 'post/totalPost'
        }),
    }
}
</script>

<style>
    .header {
        height: 80px;
        background-color: red;
    }
</style>
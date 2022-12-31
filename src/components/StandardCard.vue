<template>
    <div class="card">
        <div id="image-container"
            style="min-height: 300px; width: 300px !important; max-height: 200px !important; background-color: black">
            <img :src="getImageUrl(props.stats.image)" alt="Card image"
                style="object-fit: cover; max-height: 300px; width: 300px" />
        </div>
        <div class="card-title">{{ props.stats.name }}</div>
        <div>{{ props.stats.description }}</div>
        <div>{{ props.stats.attack }} / {{ props.stats.defense }}</div>
    </div>
</template>
 
<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "StandardCard",
    methods: {
        // ...mapActions(["drawCard", "setHand", "setPlayer1lane"]),
    },

    setup(props) {
        console.log("props")
        console.log(JSON.stringify(props))
        console.log(JSON.stringify(props.stats))
        console.log(JSON.stringify(props.stats.name))
        // const { state, dispatch } = useStore();

        return {
            props,
            getImageUrl: (path) => {
                return '/images/' + path
            }
        };
    },

    props: ['stats'],
});
</script>

<style scoped>
.card {
    background-color: white;
    border: 1px solid black;
    width: 300px;
    height: 450px;
    display: inline-block;
    vertical-align: top;
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
}

.card-title {
    display: block;
    font-size: 1.17em;
    margin-block-start: .3em;
    margin-block-end: .3em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>
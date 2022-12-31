
<template>
    <div>
        <h1>PLAYABLE AREA</h1>
        <div style="border: 1px; border-style: ridge; background-color: #F1F1F1;">
            <draggable style="min-height: 400px; widthL: 100%" v-model="player1lane" group="cards" @start="drag = true"
                @end="drag = false" item-key="id">
                <template #item="{ element }">
                    <StandardCard
                        :stats="element"
                    />
                </template>
            </draggable>
        </div>

        <h1>HAND</h1>
        <!-- Display a button to draw a new card -->
        <button style="position: absolute; right: 20px; margin-top: -45px; height: 100px; width: 200px; background-color: white; font-size: 25px; font-family: Courier New, monospace; color: black" @click="drawCard">Draw
            Card
        </button>
        <div style="border: 1px; border-style: ridge;">

            <draggable style="min-height: 400px; widthL: 100%" v-model="hand" group="cards" @start="drag = true"
                @end="drag = false" item-key="id">
                <template #item="{ element }">
                    <StandardCard
                        :stats="element"
                    />
                </template>

            </draggable>


        </div>
    </div>
</template>
 
<script>
import { defineComponent, computed } from "vue";
import draggable from "vuedraggable";
import { mapActions, useStore } from "vuex";
import StandardCard from './StandardCard.vue';

export default defineComponent({
    name: "CardList",
    methods: {
        ...mapActions(["drawCard", "setHand", "setPlayer1lane"]),
    },

    setup() {
        const { state, dispatch } = useStore();

        // Todo: we would need to move a lot of the control logic to the backend to prevent cheating

        dispatch("createDeck");
        dispatch("shuffleDeck");

        const drawCard = () => { dispatch("drawCard"); };

        if (state.hand.length === 0) {
            for (let i = 0; i < 5; i++) {
                drawCard();
            }
        }

        return {
            hand: computed({
                get() {
                    return state.hand
                },
                set(value) {
                    dispatch('setHand', value)
                }
            }),
            player1lane: computed({
                get() {
                    return state.player1lane
                },
                set(value) {
                    dispatch('setPlayer1lane', value)
                }
            }),
            deck: computed(() => state.deck),
            drawCard,
        };
    },
    components: { draggable, StandardCard }
});
</script>

<style scoped>

</style>
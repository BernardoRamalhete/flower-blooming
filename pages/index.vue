<template>
    <div class="wrapper" @scroll="handleScroll">
        <div class="background-image">
            <figure class="figure">
                <img class="image" :src="`/images/${currentImage}`" alt=""/>
            </figure>
        </div>

        <main class="text-wrapper">
            <h1>
                Blooming in the Infinite Cosmos: <br/>
                Embracing our Fleeting Brilliance
            </h1>

            <p>
                In the vast expanse of time and space, we humans are but fleeting sparks in the cosmic dance. Like flowers blooming for a short while, we grace the world with our presence before gently fading away.
            </p>

            <p>
                Our lives, a delicate interlude between eternity and oblivion, seem insignificant when compared to the majesty of the universe. Yet, within this humbling realization, lies the beauty of our existence.
            </p>

            <p>
                We are a way for the cosmos to know itself.
                <small>Carl Sagan</small>
            </p>

            <p>
                We may be minuscule in the grand scheme of the universe, but we possess the unique capacity for introspection, creativity, and compassion. 
            </p>

            <p>
                Within each of us lies a universe of thoughts and emotions, and our consciousness allows us to marvel at the very cosmos that birthed us.  
            </p>

            <p>
                It is this ephemeral gift of consciousness that elevates our brief existence to something infinitely profound.
            </p>

            <p>
                Just as a flower blooms with vibrant hues, our lives burst forth with moments of joy, love, and growth. We may be transient beings, but our impact can be everlasting. 
            </p>

            <p>
                Our actions can ripple through time, shaping the lives of others and leaving an indelible mark on the fabric of the universe.
            </p>

            <p>
                You are not a drop in the ocean. You are the entire ocean in a drop.
                <small>
                    Rumi
                </small>
            </p>

            <p>
                Our lives are intertwined, weaving a tapestry of stories and experiences that span the ages.
            </p>

            <p>
                Just as flowers wither and fall, we too experience loss and the inevitable passage of time. It is in these moments of impermanence that we can find strength and resilience.  
            </p>

            <p>
                Just as the flowers trust in the return of spring, we can embrace the cycle of life and death with hope and faith in the continuation of our essence.
            </p>

            <p>
                For life and death are one, even as the river and the sea are one.
                <small>
                    Khalil GIbran
                </small>
            </p>

            <p>
                Our journey does not end with the wilting of our bodies; it transcends to become part of the universal fabric. 
            </p>

            <p>
                Like seeds carried by the wind, our energy dissipates and merges with the cosmos, awaiting the next season of existence.
            </p>

            <p>
                Embracing our brief existence in the vastness of the universe, we must not despair at our seeming insignificance. Instead, we should savor each fleeting moment, allowing our lives to unfold like petals in the gentle breeze.
            </p>

            <p>
                Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.
                <small>
                    Henry David Thoreau
                </small>
            </p>

            <p>
                Just as flowers must bloom and fade to make way for new blossoms, so too must we cherish our existence while nurturing the seeds of the future. Our actions today lay the foundation for generations to come.
            </p>

            <p>
                Each of us has the potential to create ripples that echo throughout eternity.
            </p>

            <p>
                In the grand symphony of existence, let us not lament the brevity of our presence but celebrate the brilliance of our being. Like the flowers that bloom and wither, we too have the power to touch lives, to inspire, and to create beauty. 
            </p>

            <p>
                Our lives may be brief, but the impact we leave can be everlasting.
            </p>

            <p>
                So, let us embrace the cosmic dance with open arms, knowing that our brief existence is a gift, a chance to witness the universe through our unique lenses. 
            </p>

            <p>
                We may be small in the face of the infinite, but our spirits can soar to heights unknown.
            </p>

            <p>
                Like flowers reborn with each season, our legacy will live on, intertwined with the universe, forever blooming in the eternal garden of time.
            </p>
        </main>

        <div class="bottom-info">
            <span class="bottom-text">{{ hasStartScrolling ? 'Read time 2 min' : 'Scroll to explore' }}</span>
            <svg v-if="hasStartScrolling" class="circle-completion" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle opacity="0.2" cx="11" cy="11" r="10" stroke="white"></circle>
                <circle class="circle-completion-fill" opacity="1" cx="11" cy="11" r="10" stroke="white"></circle>
            </svg>
            <span v-else class="icon-wrapper">
                <Icon name="ph:caret-down-light"/>
            </span>
        </div>
    </div>
</template>

<script setup>

onMounted(() => {
    window.addEventListener('scroll', updateBackgroundImage)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateBackgroundImage)
})

const hasStartScrolling = ref(false) 

const currentImage = computed(() => {
    return `ezgif-frame-${currentImageIndex.value}.jpg`
})
const currentImageIndex = ref('136')

const readCompletionFill = ref(62.5)
function updateBackgroundImage() {
    hasStartScrolling.value = window.pageYOffset > 0

    let relativeScrollPosition = Math.ceil(window.pageYOffset / 58) + 1
    
    if(relativeScrollPosition > 136) {
        currentImageIndex.value = 136
        return
    }

    relativeScrollPosition = String(relativeScrollPosition)
    while(relativeScrollPosition.length < 3) relativeScrollPosition = '0' + relativeScrollPosition

    currentImageIndex.value = relativeScrollPosition

    const scrollPercentage = 1.36 * (Number(relativeScrollPosition) - 1)
    readCompletionFill.value = 62.5 - 0.34 * scrollPercentage
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 8900px;
    .background-image {
        position: fixed;
        inset: 0;
        background-color: $pure_black;
        &:before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            backdrop-filter: grayscale(100%) brightness(60%) contrast(105%);
        }

        .figure {
            height: 100%;
            width: 100%;
            position: absolute;
            bottom: 0;
            .image {
                height: 90%;
                width: 100%;
                object-fit: contain;
                opacity: 0.6;
                position: absolute;
                bottom: 0;
                @media(min-height: 1000px) {
                    height: 100%;
                    object-fit: cover;
                }
                @media(max-width: 830px) {
                    
                    height: 70%;
                    object-fit: cover;
                }
                @media(max-width: 420px) {
                    height: 50%;
                }
            }
        }
    }

    .text-wrapper {
        padding: 28px;
        position: relative;
        color: $pure_white;
        z-index: 2;
    }

    .bottom-info {
        position: fixed;
        bottom: 32px;
        right: 32px;
        color: $pure_white;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid rgba($pure_white, 0.4);
        opacity: 0.8;

        .bottom-text {
            font-size: 14px;
            margin-right: 8px;
        }

        .icon-wrapper {
            background-color: $pure_white;
            padding: 6px 8px;
            border-radius: 8px;
            height: fit-content;
            svg {
                opacity: 0;
                color: $pure_black;
                animation: icon-loop 3s;
                animation-iteration-count: infinite;
            }
        }

        .circle-completion {
            margin-bottom: -6px;

            &-fill {
                stroke-dashoffset: v-bind(readCompletionFill);
                stroke-dasharray: 62.4, 62.4;
            }
        }

        @keyframes icon-loop {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            20% {
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            70% {
                opacity: 0;
            }
            100% {
                opacity: 0;
                transform: translateY(10px);
            }
        }
    }
}
</style>
<template>
    <div class="wrapper">
        <span class="cursor"/>
        <div class="background-image">
            <figure class="figure">
                <img class="image" :src="`/images/${currentImage}`" alt=""/>
            </figure>
        </div>

        <main class="text-wrapper">
            <h1>
                Bloom brightly in the Infinite Cosmos <br/>
                Embrace your brilliance
            </h1>

            <span>
                <p>
                    In the vast expanse of time and space, we humans are but fleeting sparks in the cosmic dance. Like flowers blooming for a short while, we grace the world with our presence before gently fading away.
                </p>
    
                <p>
                    Our lives, a delicate interlude between eternity and oblivion, seem insignificant when compared<br/> to the majesty of the universe. Yet, within this humbling realization, lies the beauty of our existence.
                </p>
            </span>

            <p class="quote">
                We are a way for the cosmos<br/> to know itself.
                <small>Carl Sagan</small>
            </p>

            <span>
                <p>
                    We may be minuscule in the grand scheme of the universe, but we possess the unique capacity for introspection, creativity, and compassion. 
                </p>
    
                <p>
                    Within each of us lies a universe of thoughts and emotions, and our consciousness allows us to marvel at the very cosmos that birthed us.  
                </p>
    
                <p>
                    It is this ephemeral gift of consciousness that elevates our brief existence to something infinitely profound.
                </p>
            </span>

            <span>
                <p>
                    Just as a flower blooms with vibrant hues, our lives burst forth with moments of joy, love, and growth. We may be transient beings, but our impact can be everlasting. 
                </p>
    
                <p>
                    Our actions can ripple through time, shaping the lives of others and leaving an indelible mark on the fabric of the universe.
                </p>
            </span>

            <p class="quote">
                You are not a drop in the ocean. You are the entire ocean in a drop.
                <small>
                    Rumi
                </small>
            </p>

            <span>
                <p>
                    Our lives are intertwined, weaving a tapestry of stories and experiences that span the ages.
                </p>
    
                <p>
                    Just as flowers wither and fall, we too experience loss and the inevitable passage of time. It is in these moments of impermanence that we can find strength and resilience.  
                </p>
    
                <p>
                    Just as the flowers trust in the return of spring, we can embrace the cycle of life and death with hope and faith in the continuation of our essence.
                </p>
            </span>

            <p class="quote">
                For life and death are one, even as the river and the sea are one.
                <small>
                    Khalil GIbran
                </small>
            </p>

            <span>
                <p>
                    Our journey does not end with the wilting of our bodies; it transcends to become part of the universal fabric. 
                </p>
    
                <p>
                    Like seeds carried by the wind, our energy dissipates and merges with the cosmos, awaiting the next season of existence.
                </p>
    
                <p>
                    Embracing our brief existence in the vastness of the universe, we must not despair at our seeming insignificance. Instead, we should savor each fleeting moment, allowing our lives to unfold like petals in the gentle breeze.
                </p>
            </span>

            <p class="quote">
                Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.
                <small>
                    Henry David Thoreau
                </small>
            </p>

            <span>
                <p>
                    Just as flowers must bloom and fade to make way for new blossoms, so too must we cherish our existence while nurturing the seeds of the future. Our actions today lay the foundation for generations to come.
                </p>
    
                <p>
                    Each of us has the potential to create ripples that echo throughout eternity.
                </p>
    
                <p>
                    In the grand symphony of existence, let us not lament the brevity of our presence but celebrate the brilliance of our being. Like the flowers that bloom and wither, we too have the power to touch lives, to inspire, and to create beauty. 
                </p>
            </span>

            <span>
                <p>
                    Our lives may be brief, but the impact we leave can be everlasting.
                </p>
    
                <p>
                    So, let us embrace the cosmic dance with open arms, knowing that our brief existence is a gift, a chance to witness the universe through our unique lenses. 
                </p>
    
                <p>
                    We may be small in the face of the infinite, but our spirits can soar to heights unknown.
                </p>
            </span>

            <p>
                Like flowers reborn with each season, our legacy will live on, intertwined with the universe, forever blooming in the eternal garden of time.
            </p>
        </main>

        <button class="mute-button" @click="toggleMusic">
            <span class="visually-hidden">{{ audioPlaying ? 'Pause' : 'Play' }} music</span>
            <Icon v-if="audioPlaying" name="ph:pause-light"/>
            <Icon v-else  name="ph:play-light"/>
        </button>

        <p class="sound-warning" :class="{ hidden: hasStartScrolling }">
            Better experienced with sound on
        </p>

        <div class="bottom-info">
            <span class="bottom-text">
                <span v-if="hasStartScrolling">
                    <span class="faded">
                        Read time
                    </span>
                    <span>
                        3 min
                    </span>
                </span>
                <span v-else>
                    Scroll to explore
                </span>
            </span>
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
import backgroundMusic from '@/assets/audio/backgroundMusic.mp3'
import { useLoadImage } from '../composables/useLoadImage'

useHead({
    title: 'Bloom brightly in the Infinite Cosmos',
    meta: [
        { name: 'description', content: 'Discover the profound beauty of embracing your brilliance amidst the vast cosmos. Explore the poetic journey of our fleeting existence, drawing inspiration from blooming flowers and the infinite universe.' }
    ],
    link: [
        { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🌸</text></svg>' }
    ]
})

useSeoMeta({
  title: 'Bloom brightly in the Infinite Cosmos',
  ogTitle: 'Bloom brightly in the Infinite Cosmos',
  description: 'Discover the profound beauty of embracing your brilliance amidst the vast cosmos. Explore the poetic journey of our fleeting existence, drawing inspiration from blooming flowers and the infinite universe.',
  ogDescription: 'Discover the profound beauty of embracing your brilliance amidst the vast cosmos. Explore the poetic journey of our fleeting existence, drawing inspiration from blooming flowers and the infinite universe.'
})

defineOgImageScreenshot({
 selector: '.wrapper',
 mask: '.bottom-info'
})

const loadImage = useLoadImage()
onMounted(() => {
    for(let i = 1; i < 137; i++) {
        let formattedNumber = String(i)
        while(formattedNumber.length < 3) {
            formattedNumber = `0${formattedNumber}`
        }
        
        const src = `/images/ezgif-frame-${formattedNumber}.jpg`
        loadImage(src)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mousemove', handleMouseMove)
    scrollingElement.value = document.querySelector('#__nuxt')
    audio.value = new Audio(backgroundMusic)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
    window.addEventListener('touchmove', handleTouchMove)
    window.removeEventListener('mousemove', handleMouseMove)
})

const audio = ref(null)

const hasStartScrolling = ref(false) 

const currentImage = computed(() => {
    return `ezgif-frame-${currentImageIndex.value}.jpg`
})
const currentImageIndex = ref('001')

const readCompletionFill = ref(62.5)

const scrollingElement = ref(null)

function handleTouchMove(event) {
    event.preventDefault()

    handleScroll()
}
function handleScroll() {
    hasStartScrolling.value = window.pageYOffset > 0
    const scrollPercentage = Math.floor(100 * document.documentElement.scrollTop / (scrollingElement.value.scrollHeight - document.documentElement.clientHeight))

    updateBackgroundImage(scrollPercentage)
    updateReadCompletionFill(scrollPercentage)
}

function updateBackgroundImage(scrollPercentage) {
    let relativeScrollPosition = Math.ceil(100 * scrollPercentage / 136) + 1
    
    if(relativeScrollPosition > 136) {
        currentImageIndex.value = 136
        return
    }

    relativeScrollPosition = String(relativeScrollPosition)
    while(relativeScrollPosition.length < 3) relativeScrollPosition = '0' + relativeScrollPosition

    currentImageIndex.value = relativeScrollPosition
}

function updateReadCompletionFill(scrollPercentage) {
    readCompletionFill.value = (0.63 * scrollPercentage) - 63
}

const audioPlaying = ref(false)

function toggleMusic() {
    if(audioPlaying.value) {
        audioPlaying.value = false
        audio.value.pause()
        return
    }
    audioPlaying.value = true
    audio.value.play()
}

const mouseXPosition = ref(0)
const mouseYPosition = ref(0)
function handleMouseMove(event) {
    mouseXPosition.value = event.clientX + 'px';
    mouseYPosition.value = event.clientY + 'px';
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding-bottom: 200px;
    @media (pointer: fine) {
        cursor: none;
        button {
            cursor: none;
        }
    }

    .cursor {
        display: none;
        width: 12px;
        aspect-ratio: 1;
        background-color: rgba($text_color, 0.4);
        backdrop-filter: opacity(100%);
        z-index: 1;
        border-radius: 50%;
        position: fixed;
        left: v-bind(mouseXPosition);
        top: v-bind(mouseYPosition);
        @media (pointer: fine) {
            display: block;
        }
        
        @media(max-width: 420px) {
            font-size: 16px;
            &:nth-child(odd), &:nth-child(even) {
                max-width: 100%;
            }
        }
    }
    .background-image {
        position: fixed;
        inset: 0;
        background-color: $pure_black;
        &:before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 1;
            backdrop-filter: grayscale(100%) brightness(60%) contrast(105%) sepia(30%);
        }
        &:after {
            content: '';
            z-index: 100;
            position: fixed;
            top: -50%;
            left: -50%;
            right: -50%;
            bottom: -50%;
            width: 200%;
            height: 200vh;
            background: transparent url('/images/background-noise.png') repeat 0 0;
            background-repeat: repeat;
            animation: bg-animation .2s infinite;
            opacity: .8;
            visibility: visible;
        }

        @keyframes bg-animation {
            0% { transform: translate(0,0) }
            10% { transform: translate(-5%,-5%) }
            20% { transform: translate(-10%,5%) }
            30% { transform: translate(5%,-10%) }
            40% { transform: translate(-5%,15%) }
            50% { transform: translate(-10%,5%) }
            60% { transform: translate(15%,0) }
            70% { transform: translate(0,10%) }
            80% { transform: translate(-15%,0) }
            90% { transform: translate(10%,5%) }
            100% { transform: translate(5%,0) }
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
                opacity: 0.5;
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
        height: 100%;
        overflow: hidden;
        margin: 28px 108px;
        position: relative;
        color: $text_color;
        z-index: 2;
        position: relative;
        max-width: 1440px;
        margin-inline: auto;
        width: 100%;
        height: 40%;
        background-clip: text;
        background-image: linear-gradient(transparent, $text_color, $text_color, $text_color, transparent);
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
        filter: grayscale(100%);
        user-select: none;
        @media(max-width: 420px) {
            padding: 12px 20px;
        }

        * {
            color: transparent;
        }

        h1 {
            height: 100vh;
            height: 100dvh;
            text-align: center;
            display: grid;
            place-items: center;
            font-weight: 500;
            font-size: 48px;
            @media(max-width: 420px) {
                font-size: 24px;
                br {
                    display: none;
                }
            }
        }

        & > span {
            height: 105vh;
            height: 105dvh;
            display: block;
        }
        
        & > p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center !important;
            max-width: unset !important;
            font-weight: 500;
            font-size: 40px !important;
            height: 100vh;
            height: 100dvh;
            margin-bottom: 0 !important;
            @media(max-width: 420px) {
                font-size: 20px !important;
            }
        }

        p {
            font-size: 36px;

            &:nth-child(odd) {
                max-width: 880px;
                margin-bottom: 120px;
            }
            
            &:nth-child(even) {
                text-align: right;
                margin-left: auto;
                max-width: 880px;
                margin-bottom: 120px;
            }

            @media(max-width: 420px) {
                font-size: 16px;
                &:nth-child(odd), &:nth-child(even) {
                    text-wrap: balance;
                    max-width: 80%;
                    margin-bottom: 80px;
                    line-height: 1.6;
                }
            }

            &.quote {
                margin: auto;
                height: 105vh;
                height: 105dvh;
                font-weight: 500;
                font-size: 48px;
                text-align: center;
                display: flex;
                justify-content: center;
                flex-direction: column;
                @media(max-width: 420px) {
                    font-size: 20px;
                }
                small {
                    font-weight: 400;
                    font-size: 32px;
                    display: block;
                    @media(max-width: 420px) {
                        font-size: 14px;
                        margin-top: 8px;
                    }
                }
            }
        }
    }

    .mute-button {
        position: fixed;
        bottom: 32px;
        left: 32px;
        background-color: transparent;
        border-radius: 8px;
        border: 1px solid rgba($pure_white, 0.4);
        color: $text_color;
        padding: 8px;
        font-size: 28px;
        display: grid;
        place-items: center;
        opacity: 0.6;
        transition: all 0.2s ease;
        z-index: 1;
        &:hover {
            opacity: 1;
        }
    }

    .sound-warning {
        position: fixed;
        bottom: 48px;
        width: 100%;
        font-size: 20px;
        text-align: center;
        color: $text_color;
        opacity: 0.4;
        transition: all 0.4s ease;
        &.hidden {
            opacity: 0;
            user-select: none;
        }

        @media(max-width: 780px) {
            bottom: unset;
            top: 32px;
        }

        @media(max-width: 420px) {
            font-size: 18px;
        }
    }

    .bottom-info {
        position: fixed;
        bottom: 32px;
        right: 32px;
        color: $pure_white;
        padding: 12px 16px;
        border-radius: 8px;
        border: 1px solid rgba($pure_white, 0.4);
        opacity: 0.8;
        z-index: 3;

        .bottom-text {
            font-size: 14px;
            margin-right: 8px;
            .faded {
                opacity: 0.5;
            }
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